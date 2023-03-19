import React from 'react';
import styles from './Input.module.css'

const Input = ({
     placeholder = '',
     value = '',
     type = 'text',
     name = '',
     onChange = () => {},
     onClick = () => {},
}) => {

    if(type === 'radio' || type === 'checkbox'){
        return (
            <input
                onChange={onChange}
                onClick={onClick}
                type={type}
                name={name}
                className={styles.input__check}
            />
        )
    }

    return (
       <input
           onChange={onChange}
           type={type}
           placeholder={placeholder}
           defaultValue={value}
           className={styles.input}
       />
    );
};

export default Input;
