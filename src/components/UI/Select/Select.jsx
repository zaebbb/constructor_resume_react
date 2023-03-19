import React from 'react';
import {upperLetter} from "../../../utils/utils";
import styles from './Select.module.css'

const Select = ({
    data = [],
    text = '',
    onChange = () => {}
}) => {
    return (
        <select onChange={onChange} className={styles.select}>
            <option selected disabled>Выберите из списка: {text}</option>
            {data.map((option, i) =>
                <option key={i} value={option}>{upperLetter(option)}</option>
            )}
        </select>
    );
};

export default Select;
