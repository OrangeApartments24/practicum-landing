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
    const [oferta, setOferta] = useState(false);

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
                Стоимость участия*&nbsp;&mdash;{' '}
                {!isPersonal ? (
                    isPromocode ? (
                        <>29&nbsp;900&nbsp;₽</>
                    ) : (
                        <>60&nbsp;000&nbsp;₽</>
                    )
                ) : (
                    <>89&nbsp;900&nbsp;₽</>
                )}
                , далее{' '}
                {isPromocode ? (
                    <>2990₽&nbsp;(99₽/день)</>
                ) : (
                    <>
                        <br />
                        6000₽&nbsp;(200₽/день)
                    </>
                )}
                &nbsp;&nbsp;&mdash; в&nbsp;месяц
            </h2>
            <p className={styles.miniCaption}>
                Используй промокод от&nbsp;RealtyCalendar и&nbsp;получи&nbsp;
                <b>скидку&nbsp;50%</b>. <br /> <br />
                Стоимость входа в&nbsp;чат&nbsp;&mdash; 29 900₽, и&nbsp;далее
                2990₽ в&nbsp;месяц (99₽ в&nbsp;день)
            </p>
            <p className={styles.caption}>
                Осталось в этом месяце:{' '}
                <b>5&nbsp;мест из&nbsp;30&nbsp;на&nbsp;ноябрь</b>
            </p>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <input
                    onChange={promocodeChangeHandler}
                    className={styles.input}
                    name='promocode'
                    placeholder='Промокод от RealtyCalendar'
                    minLength='2'
                />
                <input
                    value={state.phone}
                    onChange={(e) =>
                        setState({ ...state, phone: parseInt(e.target.value) })
                    }
                    className={styles.input}
                    name='phone'
                    type={'number'}
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
                        {!state.loading && 'Оплатить'}
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
                <div className={styles.personal}>
                    <p style={{ fontSize: '1.5em' }}>
                        Индивидуальное ведение бизнеса от Дениса Соловьева
                        — 88.000 ₽<br />
                        (рассматривается индивидуально)
                    </p>
                </div>

                <p style={{ fontSize: '1.5em', gridColumn: '-1/1' }}>
                    Возникли проблемы при оплате?{' '}
                    <a
                        href='https://t.me/nicholasitnikov'
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: 'black' }}
                    >
                        Мы поможем!
                    </a>
                </p>
                <p
                    style={{
                        fontSize: '1em',
                        gridColumn: '-1/1',
                        opacity: '.5',
                    }}
                >
                    <span style={{ marginBottom: '10px', display: 'block' }}>
                        {' '}
                        * в стоимость участия и продления входит комиссия
                        сервиса Robokassa — 2,9%
                    </span>
                    <b>Важно!</b> Подключение к&nbsp;чату производится
                    в&nbsp;течение 24&nbsp;часов после оплаты. В&nbsp;случае
                    неоплаты, стоимость повторного добавления в&nbsp;чат
                    составляет&nbsp;5000₽. Пользователь оплачивает добавление
                    в&nbsp;чат и&nbsp;первые 30&nbsp;дней в&nbsp;чате,
                    дальнейшее продление участия в&nbsp;чате оплачивается
                    отдельно согласно тарифу.
                </p>
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
