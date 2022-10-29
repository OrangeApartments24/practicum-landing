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
        router.push(
            'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=orangepracticum&OutSum=29900&Description=%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%BA%D1%83%D1%80%D1%81%D0%B0%20Orange%20Practicum.%20%D0%A2%D0%B0%D1%80%D0%B8%D1%84%3A%20%D0%9D%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE&SignatureValue=d3979428a7bad7c566fbd726935eae82&Encoding=UTF-8&InvId=1667010261&OutSumCurrency=RUR&Shp_phone=89122354131'
        );
        // sendLead(state)
        //     .then((res) => {
        //         if (res.ok) {
        //             return res.json();
        //         }
        //     })
        //     .then((data) => {
        //         ym(86911334, 'reachGoal', 'call__lead');
        //         router.push('/success');
        //     })
        //     .catch((err) => {
        //         console.log('Err:' + err);
        //     });
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
                , далее 2990&nbsp;₽&nbsp;&mdash; в&nbsp;месяц
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
                    required
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
                <div
                    className={styles.personal}
                    onClick={() => setIsPersonal(!isPersonal)}
                >
                    <div
                        className={classNames(
                            styles.personal__checkbox,
                            isPersonal && styles.personal__checkbox_active
                        )}
                    ></div>
                    <p>Индивидуальное ведение бизнеса от Дениса Соловьева</p>
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
