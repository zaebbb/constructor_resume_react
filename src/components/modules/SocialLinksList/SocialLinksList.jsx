import React from 'react';
import Flex from "../../UI/Flex/Flex";
import styles from './SocialLinks.module.css'
import A from "../../UI/A/A";

const SocialLinksList = ({
    items = [],
    keyId = '',
    keyLink = '',
    keyTitle = '',
    deleteFn = () => {}
}) => {
    return (
        <div className={styles.social__list}>
            <Flex flexDirection={'column'}>
                {
                    items.map(item =>
                        <div key={item[keyId]} className={styles.social__item}>
                            <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Flex>
                                    {item[keyTitle]}
                                    <div className={styles.social__link}>({item[keyLink]})</div>
                                </Flex>
                                <span className={styles.social__btn} onClick={() => deleteFn(item[keyId])}>&times;</span>
                            </Flex>
                        </div>
                    )
                }
            </Flex>
        </div>
    );
};

export default SocialLinksList;
