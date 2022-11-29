import styles from './Welcome.module.css';

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.content}>
                <h2 className={`heading-2 ${styles.heading}`}>
                    Ваш эксперт Денис&nbsp;Соловьёв
                </h2>
                <p className={`text ${styles.text}`}>
                    Многодетный отец. Инвестор. Предприниматель.
                </p>

                <h3
                    className={styles.itemHeading}
                    style={{ gridColumn: '-1/1' }}
                >
                    Реализовано более 6 крупных проектов:
                </h3>

                <article className={styles.item}>
                    <img
                        src='/icons/location-with-circle.svg'
                        className={styles.itemIcon}
                    />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Orange Apartments 24
                        </h3>
                        <p className={styles.itemText}>
                            50&nbsp;апарт-отеля в&nbsp;3&nbsp;городах
                            за&nbsp;1&nbsp;год
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/bitcoin.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Фонд криптовалюты
                        </h3>
                        <p className={styles.itemText}>
                            Более 50&nbsp;инвесторов. 2&nbsp;шахты по&nbsp;500
                            карт
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img
                        src='/icons/investment.svg'
                        className={styles.itemIcon}
                    />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Инвестиции в&nbsp;недвижимость
                        </h3>
                        <p className={styles.itemText}>
                            Выкуп коммерческого и&nbsp;жилого фонда
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/land.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Купля/продажа земли
                        </h3>
                        <p className={styles.itemText}>
                            Смена статуса&nbsp;&mdash; увеличение стоимости.
                            Покупка от&nbsp;20&nbsp;до&nbsp;100&nbsp;гекторов,
                            продажа&nbsp;&mdash; малыми участками
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/taxi.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Такси «Апельсин»</h3>
                        <p className={styles.itemText}>
                            До 3000 привлечённых машин единовременно на линии,
                            до&nbsp;100&nbsp;&mdash; в&nbsp;собственном парке
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/sushi.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Доставка пиццы и суши «Покемон»
                        </h3>
                        <p className={styles.itemText}>
                            присутствие в&nbsp;15&nbsp;городах и&nbsp;населённых
                            пунктах Подмосковья
                        </p>
                    </div>
                </article>
            </div>

            <img src='images/welcome.png' className={styles.image} />
        </section>
    );
};

export default Welcome;
