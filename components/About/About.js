
import styles from './About.module.css';

const About = () => {
    return(
        <section className={styles.about}>
            <h2 className={`heading-2 ${styles.heading}`}>Для кого вебинар?</h2>

            <article className={styles.item}>
                <img src='/icons/search.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>работаете в найме, но хотите запустить свой бизнес</h3>
                <p className={`text ${styles.itemText}`}>Тем, кто сдают квартиры в долгосрочную или краткосрочную аренду, но сталкиваются с вопросами масштабирования, делегирования и выхода из »операционки» — дадим пошаговый план автоматизации процессов.</p>
            </article>

            <article className={styles.item}>
                <img src='/icons/location.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>уже занимаетесь краткосрочной арендой</h3>
                <p className={`text ${styles.itemText}`}>Если вы еще никогда не занимались бизнесом, но давно мечтали открыть свой бизнес — рекомендуем начать именно сейчас с краткосрочной аренды. Учитесь у тех, кто на практике даказывает, что может сам.</p>
            </article>

            <article className={styles.item}>
                <img src='/icons/business.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>для бизнесменов</h3>
                <p className={`text ${styles.itemText}`}>Для бизнесменов, которые рассматривает краткосрочную аренду как вид бизнеса и интересуются пошаговым планом и «математикой». При рентабельности 400 — 500% годовых, окупаемость всего 3-4 месяца и нет сезонности.</p>
            </article>

            <article className={styles.item}>
                <img src='/icons/money.svg' className={styles.itemIcon} />
                <h3 className={styles.itemHeading}>для инвесторов</h3>
                <p className={`text ${styles.itemText}`}>Инвестиции в недвижимость с рентабильность от 400 до 500% годовых. Всегда инвестируйте в то, что понятно, прозрачно и безопасно.</p>
            </article>

        </section>
    )
}

export default About;