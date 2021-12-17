
import styles from './About.module.css';

const About = () => {
    return(
        <section className={styles.about}>
            <h2 className={`heading-2 ${styles.heading}`}>Для кого вебинар?</h2>

            <article className={styles.item}>
                <img src='/icons/search.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>работаете в&nbsp;найме, но&nbsp;хотите запустить свой бизнес</h3>
                <p className={`text ${styles.itemText}`}>Тем, кто сдают квартиры в&nbsp;долгосрочную или краткосрочную аренду, но&nbsp;сталкиваются с&nbsp;вопросами масштабирования, делегирования и&nbsp;выхода из&nbsp;&laquo;операционки&raquo;&nbsp;&mdash; дадим пошаговый план автоматизации процессов.</p>
            </article>

            <article className={styles.item}>
                <img src='/icons/location.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>уже занимаетесь краткосрочной арендой</h3>
                <p className={`text ${styles.itemText}`}>Если вы&nbsp;еще никогда не&nbsp;занимались бизнесом, но&nbsp;давно мечтали открыть свой бизнес&nbsp;&mdash; рекомендуем начать именно сейчас с&nbsp;краткосрочной аренды. Учитесь у&nbsp;тех, кто на&nbsp;практике даказывает, что может сам.</p>
            </article>

            <article className={styles.item}>
                <img src='/icons/business.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>для бизнесменов</h3>
                <p className={`text ${styles.itemText}`}>Для бизнесменов, которые рассматривает краткосрочную аренду как вид бизнеса и&nbsp;интересуются пошаговым планом и&nbsp;&laquo;математикой&raquo;. При рентабельности 400&nbsp;&mdash; 500% годовых, окупаемость всего 3-4 месяца и&nbsp;нет сезонности.</p>
            </article>

            <article className={styles.item}>
                <img src='/icons/money.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>для инвесторов</h3>
                <p className={`text ${styles.itemText}`}>Инвестиции в&nbsp;недвижимость с&nbsp;рентабильность от&nbsp;400 до&nbsp;500% годовых. Всегда инвестируйте в&nbsp;то, что понятно, прозрачно и&nbsp;безопасно.</p>
            </article>

        </section>
    )
}

export default About;