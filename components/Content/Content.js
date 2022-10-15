import styles from './Content.module.css';

const Content = () => {
    return (
        <section className={styles.base}>
            <div className={styles.content}>
                <h2 className={`heading-2 ${styles.heading}`}>
                    Что вы&nbsp;получите в&nbsp;чате?
                </h2>
                {/* <p className={`text ${styles.text}`}>
                    Многодетный отец. Бизнесмен. Инвестор. Ваш&nbsp;путеводитель
                    в&nbsp;мире реального бизнеса
                </p> */}

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Все участники могут приехать к&nbsp;нам
                            на&nbsp;1&nbsp;день БЕСПЛАТНО, прожить
                            в&nbsp;квартире, посмотреть работу сотрудников
                            и&nbsp;провести встречу с&nbsp;Денисом
                        </h3>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Ваши квартиры будут на&nbsp;нашем сайте,с вашим
                            номером телефона
                        </h3>
                        <p className={styles.itemText}>
                            (сделать такой сайт самостоятельно стоит порядка
                            200.000-500.000₽ и&nbsp;поддерживать ежемесячно
                            10-50.000₽)
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Одна часовая консультация с&nbsp;Денисом
                            по&nbsp;видео
                        </h3>
                        <p className={styles.itemText}>
                            (для тех,кто не&nbsp;состоит в&nbsp;чате
                            консультации предлагаются от&nbsp;5000₽
                            до&nbsp;30000₽)
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Получение оперативных консультаций по&nbsp;ЛЮБЫМ
                            проблемам и&nbsp;вопросам от&nbsp;нашей команды
                        </h3>
                        <p className={styles.itemText}>
                            (вы&nbsp;экономите свое время для решения проблемы)
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Возможность оформления коллективных закупок
                            Расходных материалов/Текстиля
                            и&nbsp;т.д.&nbsp;по&nbsp;оптовым ценам
                        </h3>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Возможность оперативно делиться с&nbsp;гостями по
                            отдельной удобной форме
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Выборочный приезд Дениса лично к&nbsp;участникам и
                            проведение консультации по&nbsp;месту
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Выборочный приезд Дениса лично к&nbsp;участникам и
                            проведение консультации по&nbsp;месту
                        </h3>
                        <p className={styles.itemText}>
                            (для тех,кто не&nbsp;состоит в&nbsp;чате этот пункт
                            предлагается от&nbsp;50.000₽)
                        </p>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Участие в&nbsp;дальнейшем развитии компании путем
                            инвестиций в&nbsp;приложение и&nbsp;долевое участие
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Получение полной информации по&nbsp;теории
                            от&nbsp;команды и объяснение непонятных моментов
                            из&nbsp;Списка презентаций
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Проведение 4-8 прямых эфиров для обсуждения текущей
                            ситуации,а также ответы на&nbsp;вопросы лично
                            от&nbsp;Дениса
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Показ и&nbsp;рассказ о&nbsp;таблицах
                            и&nbsp;программах,которые использует команда для
                            оперативной и&nbsp;удобно работы
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Скидочная стоимость 990₽ в&nbsp;месяц
                        </h3>
                        <p className={styles.itemText}>
                            (вы&nbsp;не&nbsp;ничего доплачивать для того,чтобы
                            оставаться в&nbsp;данном чате)
                        </p>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Поиск квартир в&nbsp;субаренду нашим выделенным
                            сотрудником в&nbsp;вашем городе
                        </h3>
                        <p className={styles.itemText}>
                            (Вам останется только подписать договор с
                            собственником при приезде,принять ключи
                            и&nbsp;вы&nbsp;уже можете сдавать квартиру!.
                            Вы&nbsp;экономите комиссию риелтора по&nbsp;каждой
                            найденной квартире!)
                        </p>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Живые встречи в&nbsp;Москве/Питере и&nbsp;других
                            городах при должном интересе к&nbsp;данному
                            направлению
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Получение оперативной информации,как наша команда
                            реагирует на&nbsp;те&nbsp;или иные изменения
                            в&nbsp;мире Посуточной аренды,чтобы вы&nbsp;могли
                            принять правильное решение в критические ситуации
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Вы&nbsp;можете получить бонус в&nbsp;10000₽!
                        </h3>
                        <p className={styles.itemText}>
                            (в&nbsp;тот&nbsp;же день вам направляется данная
                            сумма) если вы&nbsp;пригласите нового
                            заинтересованного участника в данный чат
                        </p>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Вы&nbsp;можете устроиться на&nbsp;работу в&nbsp;нашу
                            компанию,и в дальнейшем взять под руководство новый
                            город для развития
                        </h3>
                        <p className={styles.itemText}>
                            (при должном качестве вашей работы)
                        </p>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Постоянно пополняющаяся база знаний в&nbsp;виде бота
                            (все ваши вопросы и&nbsp;наши ответы сохраняются
                            и&nbsp;все имеют быстрый доступ ко&nbsp;ВСЕЙ важной
                            информации от&nbsp;общения)
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Вы&nbsp;первыми получите информацию и&nbsp;доступ к
                            нововведениям компании
                        </h3>
                        <p className={styles.itemText}>
                            (в&nbsp;случае развития и&nbsp;сотрудничества
                            с&nbsp;другими компаниями)
                        </p>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            К&nbsp;примеру-мы начинаем напрямую сотрудничать с
                            сервисами,вы получаете дополнительные скидки
                            на&nbsp;их продукцию!
                        </h3>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Content;
