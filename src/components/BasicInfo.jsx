import React, {useEffect, useState} from 'react';
import SubHead from "./UI/SubHead/SubHead";
import Head from "./UI/Head/Head";
import Input from "./UI/Input/Input";
import {observer} from "mobx-react-lite";
import Resume from '../store/Resume'
import Flex from "./UI/Flex/Flex";
import Paragraph from "./UI/Paragraph/Paragraph";
import InputCheck from "./UI/InputCheck/InputCheck";
import Button from "./UI/Button/Button";
import {Link} from "react-router-dom";
import {ROUTES} from "../utils/routes";
import NextLink from "./modules/NextLink/NextLink";

const BasicInfo = observer(() => {

    const [name, setName] = useState(Resume.basicInfo.name)
    const [surname, setSurname] = useState(Resume.basicInfo.surname)
    const [patronymic, setPatronymic] = useState(Resume.basicInfo.patronymic)

    const [city, setCity] = useState(Resume.details.city)
    const [date, setDate] = useState(Resume.details.birthday)
    const [gender, setGender] = useState(Resume.details.gender)

    const [isBtn, setIsBtn] = useState(false)

        useEffect(() => Resume.setName(name), [name])
        useEffect(() => Resume.setSurname(surname), [surname])
        useEffect(() => Resume.setPatronymic(patronymic), [patronymic])
        useEffect(() => Resume.setBirthday(date), [date])
        useEffect(() => Resume.setCity(city), [city])
        useEffect(() => Resume.setGender(gender), [gender])

        useEffect(() => setIsBtn(!!(name && surname && city && date && gender)), [name, surname, date, city, gender])

        return (
            <>
                <Head>Основная информация</Head>
                <div className="block__content">
                    <Flex flexDirection={'column'}>
                        <SubHead>Ваше ФИО</SubHead>

                        <Input onChange={(e) => setName(e.target.value)} value={name} placeholder={'Введите ваше имя'}/>
                        <Input onChange={(e) => setSurname(e.target.value)} value={surname}
                               placeholder={'Введите вашу фамилию'}/>
                        <Input onChange={(e) => setPatronymic(e.target.value)} value={patronymic}
                               placeholder={'Введите ваше отчество'}/>
                    </Flex>
                </div>

                <div className="block__content">
                    <Flex flexDirection={'column'}>
                        <SubHead>Ваше личные данные</SubHead>

                        <Input onChange={(e) => setCity(e.target.value)} value={city} placeholder={'Введите ваш город'}/>

                        <Paragraph>Дата рождения</Paragraph>
                        <Input type={'date'} onChange={(e) => setDate(e.target.value)} value={date}
                               placeholder={'Введите вашу дату рождения'}/>

                        <Paragraph>Ваш пол</Paragraph>
                        <Flex justifyContent={'space-between'}>
                            <InputCheck type={'radio'} name={'radio'} onChange={() => setGender('М')} text={'Мужской'}/>
                            <InputCheck type={'radio'} name={'radio'} onChange={() => setGender('Ж')} text={'Женский'}/>
                        </Flex>

                        <NextLink link={ROUTES.ABOUT} visible={isBtn} />
                    </Flex>
                </div>

            </>
        );
    }
);

export default BasicInfo;
