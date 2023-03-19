import React, {useState} from 'react';
import Flex from "../Flex/Flex";
import Input from "../Input/Input";
import styles from './InputCheck.module.css'

const InputCheck = ({
    type = 'checkbox',
    text = '',
    name = '',
    onChange = () => {}

}) => {

    return (
        <Flex alignItems={'center'}>
            <Input type={type} name={name} onChange={onChange} />
            <p className={styles.input__description}>{text}</p>
        </Flex>
    );
};

export default InputCheck;
