import ym from 'react-yandex-metrika';
import { useState } from 'react';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import loadingIcon from '../../public/icons/loading.svg';
import { sendLead } from '../../utils/telegram.js';

const Header = () => {
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
                ym(86911334, 'reachGoal', 'header__lead');
                router.push('/success');
            })
            .catch((err) => {
                console.log('Err:' + err);
            });
    };

    return (
        <header className={styles.header}>
            <img src='/images/logo.svg' className={styles.logo} />
            {/* <ul className={styles.info}>
                <li className={styles.infoItem}><img src="/icons/date.svg" />23 и 24 декабря</li>
                <li className={styles.infoItem}><img src="/icons/time.svg" />19:00 по МСК</li>
            </ul> */}
            <div className={styles.content}>
                <h1 className={`heading-1 ${styles.heading}`}>
                    Присоединитесь к&nbsp;сообществу профессионалов в&nbsp;сфере
                    краткосрочной аренды
                    <span className='heading-1-light'>
                        {' '}
                        и&nbsp;увеличьте свой доход уже через месяц
                    </span>
                </h1>
                <h2 className={styles.listHeading}>Вы получите:</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        Поддержку и советы от эксперта и его команды
                    </li>
                    <li className={styles.listItem}>
                        Решение как построить бизнес без участия в операционной
                        деятельности
                    </li>
                    <li className={styles.listItem}>
                        Личную консультацию от Дениса Соловьева
                    </li>
                    <li className={styles.listItem}>
                        Вся школа Orange Practicum <br />— сразу в одном месте
                    </li>
                </ul>
            </div>
            <form
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    window.location = '#number';
                }}
            >
                {/* <input
                    value={state.name}
                    onChange={inputHandler}
                    name='name'
                    className={styles.input}
                    placeholder='Ваше имя'
                    required
                    minLength='2'
                /> */}
                {/* <input
                    value={state.phone}
                    onChange={inputHandler}
                    name='phone'
                    className={styles.input}
                    placeholder='Номер телефона'
                    required
                    minLength='2'
                /> */}
                <button className={`${styles.button}`}>Подбронее</button>
            </form>
            {/* <div className={styles.caption}>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.instagram.com/dv_solovev/'
                >
                    <img src='/icons/instagram.svg' />
                </a>
                <p className={styles.captionText}>
                    <span className={styles.captionHeading}>
                        Денис Соловьёв,
                    </span>{' '}
                    основатель сети апарт&nbsp;-отелей Orange Apartments&nbsp;24
                </p>
            </div> */}
        </header>
    );
};

export default Header;
