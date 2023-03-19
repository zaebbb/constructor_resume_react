import React from 'react';
import styles from './Footer.module.css'
import FooterStore from '../../../store/footer'
import {observer} from "mobx-react-lite";

const Footer = observer(() => {
    return (
        <div
            className={FooterStore.getIsFixed ? `${styles.footer} ${styles.footer__fixed}` : styles.footer}>
            <p
                className={styles.footer__copyright}
            >
                Dev Proger Конструктор Резюме, &copy;{new Date().getFullYear()} Все права защищены
            </p>
        </div>
    );
});

export default Footer;
