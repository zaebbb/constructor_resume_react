import React, {useEffect, useRef, useState} from 'react';
import Flex from "../../UI/Flex/Flex";
import Resume from "../../../store/Resume";
import SubHead from "../../UI/SubHead/SubHead";
import Paragraph from "../../UI/Paragraph/Paragraph";
import NextLink from "../../modules/NextLink/NextLink";
import {ROUTES} from "../../../utils/routes";
import styles from './CompleteResume.module.css'
import Head from "../../UI/Head/Head";
import {formatDate, formatSalary, upperLetter} from "../../../utils/utils";
import SkillsList from "../../modules/SkillsList/SkillsList";
import FooterStore from "../../../store/footer";
import ExperienceList from "../../modules/ExperienceList/ExperienceList";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlinePhone} from "react-icons/ai";
import SocialLinksList from "../../modules/SocialLinksList/SocialLinksList";
import A from "../../UI/A/A";
import Button from "../../UI/Button/Button";
import html2pdf from "html2pdf.js/src";
import Copyright from "../../modules/Copyright/Copyright";

const CompleteResume = ({printRef}) => {

    const {
        photo,
        basicInfo,
        details,
        description,
        salary,
        competence,
        workExperience,
        education,
        contacts
    } = Resume

    const [isBtn, setIsBtn] = useState(true)

    const downloadPdf = () => {
        setIsBtn(false)

        const element = printRef.current
        const worker = html2pdf()
            .set({
                margin: 10,
                image: {type: 'jpeg', quality: 1},
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'], before: '.page__break'}
            })
            .from(element).save('resume.pdf')
            .finally(() => {
                setIsBtn(true)
            })
    }

    useEffect(() => FooterStore.switchFooter(false), [])

    if(!Resume.isCompleted()){
        return (
            <Flex flexDirection={'column'}>
                <SubHead>Невозможно создать резюме</SubHead>
                <Paragraph>Похоже вы заполнили не все данные</Paragraph>
                <Paragraph>Попробуйте еще раз</Paragraph>
                <NextLink link={ROUTES.MAIN} visible={true} text={'Еще раз'} />
            </Flex>
        )
    }

    return (
        <div className={styles.resume} ref={printRef}>
            <Flex flexDirection={'column'}>
                <Head>Резюме</Head>

                <Flex alignItems={'center'}>
                    <img className={styles.photo} src={photo} alt=""/>
                    <Flex flexDirection={'column'}>
                        <SubHead>{basicInfo.surname} {basicInfo.name} {basicInfo.patronymic}</SubHead>
                        <Paragraph><b>Пол:</b> {details.gender === 'М' ? "Мужской" : 'Женский'}</Paragraph>
                        <Paragraph><b>Дата рождения:</b> {formatDate(details.birthday)}</Paragraph>
                        <Paragraph><b>Город:</b> {upperLetter(details.city)}</Paragraph>
                        <div className="contacts">
                            <div className={styles.contacts__item}>
                                <Flex alignItems={'center'}>
                                    <HiOutlineMail />
                                    <div className={styles.contacts__text}>{contacts.email}</div>
                                </Flex>
                            </div>
                            <div className={styles.contacts__item}>
                                <Flex alignItems={'center'}>
                                    <AiOutlinePhone />
                                    <div className={styles.contacts__text}>{contacts.phone}</div>
                                </Flex>
                            </div>
                        </div>
                    </Flex>
                </Flex>

                <div className={styles.content__resume}>
                    <Flex flexDirection={'column'}>
                        <SubHead>Обо мне</SubHead>
                        <Paragraph>{upperLetter(description)}</Paragraph>
                    </Flex>
                </div>

                <div className="page__break" />
                <div className={styles.content__resume}>
                    <Flex flexDirection={'column'}>
                        <SubHead>{upperLetter(competence.specialization)}</SubHead>
                        <Paragraph><b>Уровень: </b> {upperLetter(competence.qualification)}</Paragraph>
                        <Paragraph><b>Ожидаемая з/п: </b> {formatSalary(salary)} руб.</Paragraph>
                        <Paragraph><b>Навыки: </b></Paragraph>
                        <SkillsList
                            items={competence.skills}
                            isBtn={false}
                            isAdd={false}
                            keyId={'id'}
                            keyName={'skill'}
                        />
                        <Paragraph>{competence.readToMove ? 'Готов к переезду' : 'Не готов к перезду'}</Paragraph>
                        <Paragraph>{competence.distanceWork ? 'Готов к удаленной работе' : 'Не готов к удаленной работе'}</Paragraph>
                    </Flex>
                </div>

                <div className="page__break" />
                <div className={styles.content__resume}>
                    <SubHead>Опыт работы</SubHead>
                    <ExperienceList isBtn={false} experienceList={workExperience} />
                </div>

                <div className="page__break" />
                <div className={styles.content__resume}>
                    <SubHead>Образование</SubHead>
                    <Paragraph><b>Уровень: </b>{upperLetter(education.type)}</Paragraph>
                    <Paragraph><b>Организация: </b>{upperLetter(education.institute)}</Paragraph>
                    <Paragraph><b>Факультет: </b>{upperLetter(education.faculty)}</Paragraph>
                    <Paragraph><b>Специализация: </b>{upperLetter(education.specialization)}</Paragraph>
                    <Paragraph><b>Начало обучения: </b>{formatDate(education.start)}</Paragraph>
                    <Paragraph><b>Конец обучения: </b>{formatDate(education.end)}</Paragraph>
                </div>

                {
                    contacts.socialLinks.length ?
                        <div className={styles.content__resume}>
                            <SubHead>Социальные сети</SubHead>

                            <div className={styles.social__links}>
                                <Flex flexWrap={'wrap'}>
                                    {
                                        contacts.socialLinks.map(socialLink =>
                                            <div className={styles.social__link} key={socialLink.id}>
                                                <A link={socialLink.link} target={'_blank'}>{upperLetter(socialLink.title)}</A>
                                            </div>
                                        )
                                    }
                                </Flex>
                            </div>
                        </div>
                        : ''
                }


                {isBtn ? <Button onClick={() => downloadPdf()}>Сохранить</Button> : ''}
                {!isBtn ? <Copyright /> : ''}

            </Flex>
        </div>
    );
};

export default CompleteResume;
