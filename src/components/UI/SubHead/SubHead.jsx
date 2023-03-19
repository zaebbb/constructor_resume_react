import React from 'react';
import styles from './SubHead.module.css'

const SubHead = ({children}) => {
    return (
        <h3 className={styles.sub__head}>
            {children}
        </h3>
    );
};

export default SubHead;
