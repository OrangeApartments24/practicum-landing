
import styles from './Call.module.css';

const Call = () => {

    // ym(86911334,'reachGoal','call__lead')

    return(
        <section className={styles.call}>
            <h2 className={`heading-2 ${styles.heading}`}>Зарегистриуйтесь на&nbsp;бесплатный вебинар и&nbsp;начните свой бизнесв краткосрочной аренде</h2>
            <form className={styles.form}>
                <input className={styles.input} placeholder='Ваше имя' required minLength="2" />
                <input className={styles.input} placeholder='Номер телефона' required minLength="2" />
                <button className={styles.button}>Записаться</button>
            </form>
            <div className={styles.gift}>
                <span className={styles.giftCaption}>
                    <img src='/icons/gift.svg' />
                    получите в&nbsp;подарок
                </span>
                <h3 className={styles.giftHeading}>Чек-лист &laquo;Как начать бизнесна посуточной аренде&raquo;</h3>
            </div>
        </section>
    )
}

export default Call;