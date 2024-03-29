import styles from './About.module.css';
const About = () => {
    return (
        <section className={styles.about} id='about'>
            <div style={{ width: '100%' }}>
                <h2 className={`heading-2 ${styles.heading}`}>
                    Для кого это чат?
                </h2>
                <p
                    className={`${styles.text}`}
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        fontSize: '18px',
                    }}
                >
                    Польза чата «По делу»
                </p>
            </div>

            <article className={styles.item}>
                {/* <img src='/icons/search.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Вы хотите запустить бизнес по краткосрочной аренде
                </h3>
            </article>
            <article className={styles.item}>
                {/* <img src='/icons/search.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Для тех, кто хочет построить эффективный и стабильный
                    коллектив
                </h3>
            </article>
            <article className={styles.item}>
                {/* <img src='/icons/search.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Кто НЕ хочет участвовать в операционной деятельности СОВСЕМ
                </h3>
            </article>
            <article className={styles.item}>
                {/* <img src='/icons/search.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Вы&nbsp;уже запустили бизнес, но&nbsp;столкнулись
                    с&nbsp;проблемой масштабирования
                </h3>
            </article>
            <article className={styles.item}>
                {/* <img src='/icons/location.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Вы&nbsp;хотите эффективно размещать рекламу
                </h3>
            </article>
            <article className={styles.item}>
                {/* <img src='/icons/search.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Как из однодневного гостя получить постоянного
                </h3>
            </article>
            <article className={styles.item}>
                {/* <img src='/icons/search.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Как заселять 95% апартаментов в НЕ сезон
                </h3>
            </article>

            <article className={styles.item}>
                {/* <img src='/icons/search.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Разбор каждой проблемы оперативно и отдельно
                </h3>
            </article>

            <article className={styles.item}>
                {/* <img src='/icons/business.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Сэкономить время и деньги, получая наш опыт
                </h3>
            </article>

            <article className={styles.item}>
                {/* <img src='/icons/money.svg' className={styles.itemIcon} /> */}
                <h3 className={styles.itemHeading}>
                    Совместная оптовая закупка расходников со скидкой
                </h3>
            </article>
        </section>
    );
};

export default About;
