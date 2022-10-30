import styles from './Call.module.css';
import ym from 'react-yandex-metrika';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { sendLead } from '../../utils/telegram';
import classNames from 'classnames';

const Call = () => {
    const [state, setState] = useState({
        name: '',
        phone: '',
        loading: false,
    });
    const router = useRouter();
    const [isPromocode, setIsPromocode] = useState(false);
    const [isPersonal, setIsPersonal] = useState(false);

    const inputHandler = (e) => {
        const prevState = { ...state };
        prevState[e.target.name] = e.target.value;
        setState(prevState);
    };

    const promocodeChangeHandler = (e) => {
        setIsPromocode(e.target.value.toLowerCase() === 'orangepracticum');
        // e.target.value
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setState({ ...state, loading: true });

        fetch('/api/payment', {
            method: 'POST',
            body: JSON.stringify({
                phone: state.phone,
                option: {},
                price: isPromocode ? 29900 : 59900,
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
                Стоимость участия&nbsp;&mdash;{' '}
                {!isPersonal ? (
                    isPromocode ? (
                        <>29&nbsp;900&nbsp;₽</>
                    ) : (
                        <>59&nbsp;900&nbsp;₽</>
                    )
                ) : (
                    <>89&nbsp;900&nbsp;₽</>
                )}
                , далее {isPromocode ? 2990 : 5990}&nbsp;₽&nbsp;&mdash;
                в&nbsp;месяц
            </h2>
            <p className={styles.miniCaption}>
                Участникам от&nbsp;RealtyCalendar&nbsp;&mdash; скидка
                50&nbsp;процентов по&nbsp;промокоду
            </p>
            <p className={styles.caption}>
                Осталось в этом месяце: <b>7 мест из 30</b>
            </p>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <input
                    onChange={promocodeChangeHandler}
                    className={styles.input}
                    name='promocode'
                    placeholder='Промокод (скидка 50%)'
                    minLength='2'
                />
                <input
                    value={state.phone}
                    onChange={inputHandler}
                    className={styles.input}
                    name='phone'
                    placeholder='Номер телефона'
                    required
                    minLength='2'
                />
                <button
                    className={`${styles.button} ${
                        state.loading && styles.buttonLoading
                    }`}
                >
                    {!state.loading && 'Оплатить'}
                </button>
                <div className={styles.personal}>
                    <p style={{ fontSize: '1.5em' }}>
                        Индивидуальное ведение бизнеса от Дениса Соловьева
                        — 88.000 ₽<br />
                        (рассматривается индивидуально)
                    </p>
                </div>
            </form>
            {/* <div className={styles.gift}>
                <span className={styles.giftCaption}>
                    <img src='/icons/gift.svg' />
                    получите в&nbsp;подарок
                </span>
                <h3 className={styles.giftHeading}>
                    Чек-лист &laquo;Как начать бизнес на&nbsp;посуточной
                    аренде&raquo;
                </h3>
            </div> */}
        </section>
    );
};

export default Call;
