import React from 'react';
import Flex from "../../UI/Flex/Flex";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import styles from './SkillsList.module.css'

const SkillsList = ({
    placeholder = '',
    onChange = () => {},
    value = '',
    onClickAdd = () => {},
    onClickDelete = () => {},
    items = [],
    keyId = '',
    keyName = '',
    isBtn = true,
    isAdd = true
}) => {
    return (
        <div className={styles.skill__list}>
            <Flex flexDirection={'column'}>
                {
                    isAdd ? <div className={styles.skill__form}>
                                <Flex alignItems={'center'}>
                                    <div className={styles.skill__input}>
                                        <Input
                                            type={'text'}
                                            placeholder={placeholder}
                                            onChange={onChange}
                                            value={value}
                                        />
                                    </div>
                                    <div className={styles.skill__add}>
                                        <Button
                                            onClick={onClickAdd}
                                        >+</Button>
                                    </div>
                                </Flex>
                            </div> : ''
                }

                <Flex
                    flexWrap={'wrap'}
                >
                    {items.map(item =>
                        <div
                            className={styles.skill}
                            key={item[keyId]}
                        >
                            <Flex
                                alignItems={'center'}
                            >
                                <div
                                    className={`${styles.skill__text} ${!isBtn ? styles.skill__text__no_btn : ''}`}
                                >{item[keyName]}</div>
                                {
                                    isBtn ? <div
                                        className={styles.skill__btn}
                                        onClick={() => onClickDelete(item[keyId])}
                                    >&times;</div> : ''
                                }

                            </Flex>
                        </div>
                    )}
                </Flex>
            </Flex>
        </div>
    );
};

export default SkillsList;
