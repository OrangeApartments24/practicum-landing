
import styles from './Call.module.css';

const Call = () => {
    return(
        <section className={styles.call}>
            <h2 className={`heading-2 ${styles.heading}`}>Зарегистриуйтесь на бесплатный вебинар и начните свой бизнесв краткосрочной аренде</h2>
            <form className={styles.form}>
                <input className={styles.input} placeholder='Ваше имя' required minLength="2" />
                <input className={styles.input} placeholder='Номер телефона' required minLength="2" />
                <button className={styles.button}>Записаться</button>
            </form>
            <div className={styles.gift}>
                <span className={styles.giftCaption}>
                    <img src='/icons/gift.svg' />
                    получите в подарок
                </span>
                <h3 className={styles.giftHeading}>Чек-лист «Как начать бизнесна посуточной аренде»</h3>
            </div>
        </section>
    )
}

export default Call;