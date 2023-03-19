import React from 'react';
import styles from './Copyright.module.css'

const Copyright = () => {
    return (
        <p className={styles.copyright}>Dev-Proger, Конструктор резюме &copy;{new Date().getFullYear()}. Все права защищены</p>
    );
};

export default Copyright;
