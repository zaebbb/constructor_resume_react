import React from 'react';
import styles from './Flex.module.css'

const Flex = ({
        children,
        flexDirection = null,
        alignItems = null,
        flexWrap = null,
        justifyContent = null
    }) => {
    return (
        <div
            className={styles.flex}
            style={{
                flexDirection: flexDirection ? flexDirection : '',
                alignItems: alignItems ? alignItems : '',
                flexWrap: flexWrap ? flexWrap : '',
                justifyContent: justifyContent ? justifyContent : '',
            }}
        >
            {children}
        </div>
    );
};

export default Flex;
