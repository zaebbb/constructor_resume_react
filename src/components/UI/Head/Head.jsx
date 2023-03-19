import React from 'react';
import styles from './Head.module.css'

const Head = ({children}) => {
    return (
        <h1 className={styles.head}>{children}</h1>
    );
};

export default Head;
