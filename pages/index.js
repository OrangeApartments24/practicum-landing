import Header from '../components/Header/Header';
import Number from '../components/Number/Number';
import About from '../components/About/About';
import Welcome from '../components/Welcome/Welcome';
import Invitement from '../components/Invitement/Invitement';
import Call from '../components/Call/Call';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';
import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';

import { useEffect } from 'react';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
    useEffect(() => {
        !(function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s);
        })(
            window,
            document,
            'script',
            'https://connect.facebook.net/en_US/fbevents.js'
        );
        fbq('init', '435091964749684');
        fbq('track', 'PageView');
    }, []);

    return (
        <>
            <Head>
                <title>
                    Присоединитесь к сообществу профессионалов в сфере
                    посуточной арендыи увеличьте свой доход уже через месяц
                </title>
                <meta
                    name='description'
                    content='Как перестать жить от зарплаты до зарплаты и получать ежедневный доход до 33 000 ₽ / день; Как выйти на окупаемость за 3-4 месяца и не зависеть от «сезонности»; Как выйти из «оперативки» и на 3-й месяц получать стабильный доход от 100 000 ₽; Как не ограничивать свои амбиции и дойти до того финансового результата, который нужен именно Вам'
                ></meta>
                <meta
                    name='facebook-domain-verification'
                    content='8k7266pqfq27kno72zoeeagcxod37m'
                ></meta>
            </Head>
            <Header />
            <Number />
            <About />
            <Welcome />
            <Content />
            <Invitement />
            <Reviews />
            <Call />
            <Footer />
            <YMInitializer accounts={[86911334]} options={{ webvisor: true }} />
            <img
                height='1'
                width='1'
                style={{ display: 'none' }}
                src='https://www.facebook.com/tr?id=435091964749684&ev=PageView&noscript=1'
            />
        </>
    );
}
