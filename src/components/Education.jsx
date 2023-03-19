import React, {useEffect, useState} from 'react';
import Flex from "./UI/Flex/Flex";
import Select from "./UI/Select/Select";
import Head from "./UI/Head/Head";
import config from './../utils/config'
import Input from "./UI/Input/Input";
import Resume from '../store/Resume'
import FooterStore from './../store/footer'
import Paragraph from "./UI/Paragraph/Paragraph";
import NextLink from "./modules/NextLink/NextLink";
import {ROUTES} from "../utils/routes";

const Education = () => {

    const [type, setType] = useState(Resume.education.type)
    const [institute, setInstitute] = useState(Resume.education.institute)
    const [faculty, setFaculty] = useState(Resume.education.faculty)
    const [specialization, setSpecialization] = useState(Resume.education.specialization)
    const [start, setStart] = useState(Resume.education.start)
    const [end, setEnd] = useState(Resume.education.end)

    const [isBtn, setIsBtn] = useState(false)

    useEffect(() => FooterStore.switchFooter(true), [])

    useEffect(() => Resume.setTypeEducation(type), [type])
    useEffect(() => Resume.setInstitute(institute), [institute])
    useEffect(() => Resume.setFaculty(faculty), [faculty])
    useEffect(() => Resume.setEducationSpecialization(specialization), [specialization])
    useEffect(() => Resume.setEducationStart(start), [start])
    useEffect(() => Resume.setEducationEnd(end), [end])

    useEffect(() => {
        setIsBtn(!!(type && institute && faculty && specialization && start && end))
    }, [type, institute, faculty, specialization, start, end])

    return (
        <Flex flexDirection={'column'}>
            <Head>Образование</Head>
            <Paragraph>Желательно указывать образование связанное с вашей деятельностью</Paragraph>
            <Select text={'Тип образования'} data={config.type_education} onChange={e => setType(e.target.value)} />
            <Input placeholder={'Образовательное учреждение'} value={institute} onChange={e => setInstitute(e.target.value)} />
            <Input placeholder={'Факультет'} value={faculty} onChange={e => setFaculty(e.target.value)} />
            <Input placeholder={'Специальность'} value={specialization} onChange={e => setSpecialization(e.target.value)} />
            <Paragraph>Начало обучения</Paragraph>
            <Input type={'date'} value={start} onChange={e => setStart(e.target.value)} />
            <Paragraph>Конец обучения</Paragraph>
            <Input type={'date'} value={end} onChange={e => setEnd(e.target.value)} />

            <NextLink visible={isBtn} link={ROUTES.CONTACTS} />
        </Flex>
    );
};

export default Education;
