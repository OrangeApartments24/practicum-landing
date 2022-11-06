import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={`text ${styles.text}`}>
                ИП&nbsp;Соловьёв Денис Владимирович ОГРН 320508100372634
            </p>
            <div className={styles.links}>
                <Link href='/oferta.pdf'>
                    <a target='_blank' rel='norefferer' className='link'>
                        Публичная оферта
                    </a>
                </Link>
                <Link href='https://practicum.orangeapart24.ru/policy'>
                    <a target='_blank' rel='norefferer' className='link'>
                        Политика конфиденциальности
                    </a>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
