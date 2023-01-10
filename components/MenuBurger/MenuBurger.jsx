import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import ConsultationModal from "../ConsultationModal/ConsultationModal";
import styles from "./MenuBurger.module.css";

const MenuBurger = ({ setOpenMenu }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div className={styles.menu__back}>
            <div className={styles.close} onClick={() => setOpenMenu(false)}>
                <img src="/images/close-mobile.png" alt="" />
            </div>
            {isOpenModal && <ConsultationModal setIsOpen={setIsOpenModal} />}
            <div className={styles.menu__wrap}>
                <div className={styles.menu__logo_mobile}>
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <Link href="/">Главная</Link>
                    </p>
                </div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <Link href="/catalog">Каталог</Link>
                    </p>
                </div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <Link href="/services">Услуги</Link>
                    </p>
                </div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <Link href="/discounts">Акции</Link>
                    </p>
                </div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <Link href="/about">о компании</Link>
                    </p>
                </div>
                <div
                    className={classNames(
                        styles.menu__wrap_item,
                        styles.menu__item_logo
                    )}
                ></div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <Link href="/cooperation">Сотрудничество</Link>
                    </p>
                </div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <Link href="/news">Новости</Link>
                    </p>
                </div>
                <div className={styles.menu__wrap_item}>
                    <p>
                        <span onClick={() => setIsOpenModal(true)}>
                            Заказать звонок
                        </span>
                    </p>
                </div>
                <p
                    className={classNames(
                        styles.menu__top_text,
                        styles.menu__top_text__margin
                    )}
                >
                    <Link href="/payment">Оплата</Link>
                </p>
                <p className={classNames(styles.menu__top_text)}>
                    <Link href="/delivery">Доставка</Link>
                </p>
                <div className={styles.menu__contacts}>
                    <div className={styles.menu__contacts_phone}>
                        <div>
                            <img src="/images/phone.png" alt="" />
                        </div>
                        <p>
                            <a href="tel:+79126852036">+7 (912) 685-20-36</a>
                        </p>
                    </div>
                    <div className={styles.menu__contacts_mail}>
                        <div>
                            <img src="/images/mail.png" alt="" />
                        </div>
                        <p>
                            <a href="mailto:Ensnab@yandex.ru">
                                Ensnab@yandex.ru
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBurger;
