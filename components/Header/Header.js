
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {

    // ym(86911334,'reachGoal','header__lead')

    return(
        <header className={styles.header}>
            <img src="/images/logo.svg" className={styles.logo} />
            <ul className={styles.info}>
                <li className={styles.infoItem}><img src="/icons/date.svg" />23 и 24 декабря</li>
                <li className={styles.infoItem}><img src="/icons/time.svg" />19:00 по МСК</li>
            </ul>
            <div className={styles.content}>
                <h1 className={`heading-1 ${styles.heading}`}>Как построить бизнес в&nbsp;2022 году с&nbsp;помощью краткосрочной аренды <span className='heading-1-light'>и&nbsp;получать доход до</span>&nbsp;1&nbsp;000&nbsp;000&nbsp;₽&nbsp;<span className='heading-1-light'>/ мес.</span></h1>
                <h2 className={styles.listHeading}>Вы узнаете:</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        Как перестать жить от&nbsp;зарплаты до&nbsp;зарплаты и&nbsp;получать ежедневный доход до&nbsp;33&nbsp;000&nbsp;₽&nbsp;/ день
                    </li>
                    <li className={styles.listItem}>
                        Как выйти на&nbsp;окупаемость за&nbsp;3-4 месяца и&nbsp;не&nbsp;зависеть от&nbsp;&laquo;сезонности&raquo;
                    </li>
                    <li className={styles.listItem}>
                        Как выйти из&nbsp;&laquo;оперативки&raquo; и&nbsp;на&nbsp;3-й месяц получать стабильный доход от&nbsp;100&nbsp;000&nbsp;₽
                    </li>
                    <li className={styles.listItem}>
                        Как не&nbsp;ограничивать свои амбиции и&nbsp;дойти до&nbsp;того финансового результата, который нужен именно Вам
                    </li>
                </ul>
            </div>
            <form className={styles.form}>
                <input className={styles.input} placeholder='Ваше имя' required minLength="2" />
                <input className={styles.input} placeholder='Номер телефона' required minLength="2" />
                <button className={styles.button}>Записаться</button>
            </form>
            <div className={styles.caption}>
                <img src="/icons/instagram.svg" />
                <p className={styles.captionText}><span className={styles.captionHeading}>Денис Соловьёв,</span> основатель сети апарт&nbsp;-отелей Orange Apartments&nbsp;24</p>
            </div>
        </header>
    )
}

export default Header;