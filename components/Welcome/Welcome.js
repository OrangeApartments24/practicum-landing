
import styles from './Welcome.module.css';

const Welcome = () => {

    return(
        <section className={styles.welcome}>
            <div className={styles.content}>
                <h2 className={`heading-2 ${styles.heading}`}>Здравствуйте, Я — Денис Соловьёв</h2>
                <p className={`text ${styles.text}`}>Многодетный отец. Бизнесмен. Инвестор. Ваш путеповидетль в мире реального бизнеса</p>

                <article className={styles.item}>
                    <img src='/icons/location-with-circle.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Orange Apartments 24</h3>
                        <p className={styles.itemText}>33 апарт-отеля в 4 городах за 7 месяцев</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/bitcoin.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Фонд криптовалюты</h3>
                        <p className={styles.itemText}>Более 50 инвесторов. 2 фермы по 500 карт</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/investment.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Инвестиции в недвижимость</h3>
                        <p className={styles.itemText}>Выкуп комерческого и жилого фонда</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/land.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Купля/продажа земли</h3>
                        <p className={styles.itemText}>Смена статуса — увеличение стоимости</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/taxi.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Такси «Апельсин»</h3>
                        <p className={styles.itemText}>Более 1000 машин в автопарке</p>
                    </div>
                </article>

                <article className={styles.item}>
                    <img src='/icons/sushi.svg' className={styles.itemIcon} />
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>Доставка суши и пицц «Покенон»</h3>
                        <p className={styles.itemText}>присутсвтие в 7 городах Подмосковья</p>
                    </div>
                </article>

            </div>

            <img src='images/welcome.png' className={styles.image} />
        </section>
    )

}

export default Welcome;