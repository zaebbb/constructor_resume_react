import React from 'react';
import Head from "../../UI/Head/Head";
import Flex from "../../UI/Flex/Flex";
import SubHead from "../../UI/SubHead/SubHead";
import Paragraph from "../../UI/Paragraph/Paragraph";
import Button from "../../UI/Button/Button";
import styles from './ExperienceList.module.css'
import {formatDate, upperLetter} from "../../../utils/utils";

const ExperienceList = ({
    title = '',
    experienceList = [],
    onClick = () => {},
    isBtn = true
}) => {
    if(!experienceList.length){
        return <></>
    }

    return (
        <div className={styles.experience}>
            <Head>{title}</Head>

            {
                experienceList.map(item =>
                    <div key={item.id} className={styles.experience__item}>
                        <Flex flexDirection={'column'}>
                            <SubHead>{upperLetter(item.post)}</SubHead>
                            <Paragraph>{upperLetter(item.work)}</Paragraph>
                            <Paragraph><b>Организация: </b>{upperLetter(item.organization)}</Paragraph>
                            <Paragraph><b>Работа с: </b>{formatDate(item.start)}</Paragraph>
                            {item.end ? <Paragraph><b>По: </b> {formatDate(item.end)}</Paragraph> : ''}
                            { isBtn ? <Button onClick={() => onClick(item.id)}>Удалить</Button> : '' }
                        </Flex>
                    </div>
                )
            }
        </div>
    );
};

export default ExperienceList;
