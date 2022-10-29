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
                            Не более 20-30 новых участников каждый месяц
                            <p className={styles.itemText}>
                                (ограниченный набор связан с тем, чтобы больше
                                уделить времени каждому участнику чата)
                            </p>
                        </h3>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Все участники могут приехать к&nbsp;нам
                            на&nbsp;1&nbsp;день, прожить в&nbsp;квартире,
                            посмотреть работу сотрудников и&nbsp;провести
                            встречу с&nbsp;Денисом Соловьевым
                            <p className={styles.itemText}>
                                (экономия 10.000₽—20.000₽)
                            </p>
                        </h3>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Ваши квартиры будут на&nbsp;нашем сайте,с Вашим
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
                            Одна часовая консультация с&nbsp;Денисом Соловьевым
                            по&nbsp;видео
                        </h3>
                        <p className={styles.itemText}>
                            (для тех,кто не&nbsp;состоит в&nbsp;чате
                            консультации предлагаются от&nbsp;5.000₽
                            до&nbsp;30.000₽)
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Получение оперативных консультаций по&nbsp;ЛЮБЫМ
                            проблемам и&nbsp;вопросам у&nbsp;наших специалистов
                            (неоценимо ₽)
                        </h3>
                        <p className={styles.itemText}>
                            (вы&nbsp;экономите свое время и&nbsp;деньги для
                            решения проблемы)
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
                        <p className={styles.itemText}>
                            Скидки от&nbsp;20&nbsp;до&nbsp;30%
                            в&nbsp;зависимости от&nbsp;объёма
                        </p>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Возможность оперативно делиться гостями
                        </h3>
                    </div>
                </article>

                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Приезд Дениса Соловьева лично к&nbsp;участникам и
                            проведение консультации по&nbsp;месту
                        </h3>
                        <p className={styles.itemText}>
                            (для тех,кто не&nbsp;состоит в&nbsp;чате этот пункт
                            предлагается от&nbsp;100.000₽)
                        </p>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Участие в&nbsp;дальнейшем развитии компании путем
                            инвестиций в&nbsp;приложение и&nbsp;долевое участие
                        </h3>
                        <p className={styles.itemText}>
                            От&nbsp;22&nbsp;до&nbsp;50% годовых,
                            в&nbsp;зависимости от&nbsp;выбранного направления
                            инвестирования
                        </p>
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
                            Проведение 4-8 прямых эфиров в месяц для обсуждения
                            текущей ситуации,а также ответы на&nbsp;вопросы
                            лично от&nbsp;Дениса Соловьева
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
                            Поиск квартир в&nbsp;субаренду
                            (от&nbsp;300&nbsp;участиков чата) нашим выделенным
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
                            Встречи Offline в&nbsp;Москве/Питере и&nbsp;других
                            городах, когда Денис Соловьёв приезжает в&nbsp;этот
                            город
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Получение оперативной информации о&nbsp;изменениях
                            на юридическом и&nbsp;закономательном поле, чтобы
                            принять правильное решение
                        </h3>
                    </div>
                </article>
                <article className={styles.item}>
                    <div className={styles.itemContent}>
                        <h3 className={styles.itemHeading}>
                            Вы&nbsp;можете получить бонус в&nbsp;5.000₽–10.000₽!
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
                        <p className={styles.itemText}>
                            К&nbsp;примеру — мы начинаем напрямую сотрудничать с
                            сервисами,вы получаете дополнительные скидки
                            на&nbsp;их&nbsp;продукцию!
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Content;
