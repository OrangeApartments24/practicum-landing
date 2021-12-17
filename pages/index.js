import Header from '../components/Header/Header';
import Number from '../components/Number/Number';
import About from '../components/About/About';
import Welcome from '../components/Welcome/Welcome';
import Invitement from '../components/Invitement/Invitement';
import Call from '../components/Call/Call';
import Footer from '../components/Footer/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Как построить бизнес в 2022 году с помощью краткосрочной аренды</title>
        <meta name="description" content="Как перестать жить от зарплаты до зарплаты и получать ежедневный доход до 33 000 ₽ / день; Как выйти на окупаемость за 3-4 месяца и не зависеть от «сезонности»; Как выйти из «оперативки» и на 3-й месяц получать стабильный доход от 100 000 ₽; Как не ограничивать свои амбиции и дойти до того финансового результата, который нужен именно Вам"></meta>
      </Head>
      <Header />
      <Number />
      <About />
      <Welcome />
      <Invitement />
      <Call />
      <Footer />
    </>
  )
}
