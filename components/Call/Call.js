import styles from './Call.module.css';
import ym from 'react-yandex-metrika';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { sendLead } from '../../utils/telegram';

const Call = () => {
    const [state, setState] = useState({
        name: '',
        phone: '',
        loading: false,
    });
    const router = useRouter();

    const inputHandler = (e) => {
        const prevState = { ...state };
        prevState[e.target.name] = e.target.value;
        setState(prevState);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        setState({ ...state, loading: true });
        sendLead(state)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((data) => {
                ym(86911334, 'reachGoal', 'call__lead');
                router.push('/success');
            })
            .catch((err) => {
                console.log('Err:' + err);
            });
    };

    return (
        <section className={styles.call}>
            <h2 className={`heading-2 ${styles.heading}`}>
                Стоимость участия — 33 000 ₽, <br />
                далее 1000 ₽ — в месяц
            </h2>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                {/* <input
                    value={state.name}
                    onChange={inputHandler}
                    className={styles.input}
                    name='name'
                    placeholder='Ваше имя'
                    required
                    minLength='2'
                /> */}
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
                    {!state.loading && 'Записаться'}
                </button>
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
