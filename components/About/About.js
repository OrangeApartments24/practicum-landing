import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            <h2 className={`heading-2 ${styles.heading}`}>Для кого это чат?</h2>

            <article className={styles.item}>
                <img src='/icons/search.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>
                    Вы&nbsp;уже запустили бизнес, но&nbsp;столкнулись
                    с&nbsp;проблемой масштабирования?
                </h3>
            </article>

            <article className={styles.item}>
                <img src='/icons/location.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>
                    У&nbsp;вас не&nbsp;получается эффективно размещать рекламу
                </h3>
            </article>

            <article className={styles.item}>
                <img src='/icons/business.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>
                    Хотите получить опыт других предпренимателей
                </h3>
            </article>

            <article className={styles.item}>
                <img src='/icons/money.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>
                    Интересуетесь оптовой закупкой расходников в&nbsp;вашем
                    городе
                </h3>
            </article>
        </section>
    );
};

export default About;
