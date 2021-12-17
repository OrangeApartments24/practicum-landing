import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p className={`text ${styles.text}`}>ИП&nbsp;Соловьёв Денис Владимирович ОГРН 320508100372634</p>
            <Link href='https://practicum.orangeapart24.ru/policy'><a className='link'>Политика конфеденциальности</a></Link>
        </footer>
    )
}

export default Footer;