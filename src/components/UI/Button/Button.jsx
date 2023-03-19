import React from 'react';
import Flex from "../Flex/Flex";
import styles from './Button.module.css'

const Button = ({
    children,
    onClick = () => {}
}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <Flex alignItems={'center'} justifyContent={'center'}>{children}</Flex>
        </button>
    );
};

export default Button;
