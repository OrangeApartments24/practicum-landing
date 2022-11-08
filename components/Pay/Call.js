import styles from './Call.module.css';
import ym from 'react-yandex-metrika';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { sendLead } from '../../utils/telegram';
import classNames from 'classnames';

const Pay = () => {
    const [state, setState] = useState({
        name: '',
        phone: '',
        loading: false,
    });
    const router = useRouter();
    const [isPromocode, setIsPromocode] = useState(false);
    const [isPersonal, setIsPersonal] = useState(false);
    const [oferta, setOferta] = useState(false);

    const price = useMemo(() => {
        const { price } = router.query;
        return price ? price : 2990;
    }, [router.query]);

    const inputHandler = (e) => {
        const prevState = { ...state };
        prevState[e.target.name] = e.target.value;
        setState(prevState);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setState({ ...state, loading: true });

        fetch('/api/payment', {
            method: 'POST',
            body: JSON.stringify({
                phone: state.phone,
                option: {},
                price,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                reject('Ошибка');
            })
            .then((data) => {
                location.href = data.paymentLink;
            });
    };

    return (
        <section className={styles.call} id='call'>
            <h2 className={`heading-2 ${styles.heading}`}>
                Форма оплаты платного чата *
            </h2>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <input
                    value={state.phone}
                    onChange={inputHandler}
                    className={styles.input}
                    name='phone'
                    placeholder='Номер телефона'
                    required
                    minLength='2'
                />
                <div style={{ width: '100%' }}>
                    <button
                        style={{ opacity: oferta ? 1 : 0.2 }}
                        disabled={!oferta}
                        className={`${styles.button} ${
                            state.loading && styles.buttonLoading
                        }`}
                    >
                        {!state.loading && 'Продлить'}
                    </button>
                    <div className={styles.checkbox}>
                        <input
                            checked={oferta}
                            type='checkbox'
                            id='oferta'
                            onClick={() => setOferta(!oferta)}
                        />
                        <label htmlFor='oferta'>
                            Соглашаюсь с условиями{' '}
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='/oferta.pdf'
                            >
                                оферты
                            </a>
                        </label>
                    </div>
                </div>
            </form>
            <span
                style={{
                    marginBottom: '10px',
                    display: 'block',
                    textAlign: 'center',
                    opacity: 0.5,
                    marginTop: 'auto',
                }}
            >
                {' '}
                * в стоимость входит комиссия сервиса Robokassa — 2,9%
            </span>
        </section>
    );
};

export default Pay;
