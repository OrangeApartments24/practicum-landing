import styles from '../styles/success.module.css';
import { YMInitializer } from 'react-yandex-metrika';

const Success = () => {

    useEffect(() => {

        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '435091964749684');
        fbq('track', 'PageView');
    
      }, []);

    return(
        <>
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
            <img height="1" width="1" style={{display: "none"}} src="https://www.facebook.com/tr?id=435091964749684&ev=PageView&noscript=1" />
        </>
    )
}

export default Success;