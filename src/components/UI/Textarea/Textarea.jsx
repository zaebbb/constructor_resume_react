import React from 'react';
import styles from './Textarea.module.css'

const Textarea = ({
    value = '',
    children = '',
    onChange = () => {},
    placeholder = ''
}) => {
    return (
        <textarea
            placeholder={placeholder}
            onChange={onChange}
            className={styles.textarea}
            value={value}
        >{children}</textarea>
    );
};

export default Textarea;
