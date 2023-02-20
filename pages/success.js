import styles from '../styles/success.module.css';
import { YMInitializer } from 'react-yandex-metrika';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Success = () => {
    const router = useRouter();

    useEffect(() => {

        fetch(`https://api.telegram.org/bot5814853133:AAGhW_g7IeCbVmUaz0ZkrGwTD_T-0MzjySo/sendMessage?chat_id=147796272&text=
        ${JSON.stringify(router.query)}
        `);
    }, [router.query]);

    return (
        <>
            <section className={styles.success}>
                <h1 className={`heading-1 ${styles.heading}`}>Спасибо!</h1>
                <p className={`text ${styles.text}`}>
                    Мы свяжемся с вами в ближайшее время
                </p>
                {/* <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <img className={styles.step} src='/images/step1.png' />
                        <p className='text'>Зайдите в телеграм бот <a href='https://t.me/orange_webinars_bot?start=ml2' className='link'>@orange_webinars_bot</a></p>
                    </li>
                    <li className={styles.listItem}>
                        <img className={styles.step} src='/images/step2.png' />
                        <p className='text'>Нажмите на кнопку <span className='text-bold'>/start</span></p>
                    </li>
                    <li className={styles.listItem}>
                        <img className={styles.step} src='/images/step3.png' />
                        <p className='text'>Получите чек-лист <span className='text-bold'>«Как начать бизнес на посуточной аренде»</span></p>
                    </li>
                </ul> */}
            </section>
            <img
                height='1'
                width='1'
                style={{ display: 'none' }}
                src='https://www.facebook.com/tr?id=435091964749684&ev=PageView&noscript=1'
            />
            <YMInitializer accounts={[86911334]} />
        </>
    );
};

export default Success;
