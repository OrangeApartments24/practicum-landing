import styles from '../styles/success.module.css';

const Success = () => {
    return(
        <section className={styles.success}>
            <h1 className={`heading-1 ${styles.heading}`}>Вы записались на вебинар!</h1>
            <p className={`text ${styles.text}`}>Чтобы получить бесплатный чек лист, выполнител три простых шага</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <img className={styles.step} src='/images/step1.png' />
                    <p className='text'>Зайдите в телеграм бот <a href='' className='link'>@orange.practicum.bot</a></p>
                </li>
                <li className={styles.listItem}>
                    <img className={styles.step} src='/images/step1.png' />
                    <p className='text'>Нажмите на кнопку <span className='text-bold'>/start</span></p>
                </li>
                <li className={styles.listItem}>
                    <img className={styles.step} src='/images/step1.png' />
                    <p className='text'>Получите чек-лист <span className='text-bold'>«Как начать бизнес на посуточной аренде»</span></p>
                </li>
            </ul>
        </section>
    )
}

export default Success;