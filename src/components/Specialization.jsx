import React, {useEffect, useState} from 'react';
import Head from "./UI/Head/Head";
import SubHead from "./UI/SubHead/SubHead";
import Flex from "./UI/Flex/Flex";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";
import config from './../utils/config'
import SkillsList from "./modules/SkillsList/SkillsList";
import InputCheck from "./UI/InputCheck/InputCheck";
import NextLink from "./modules/NextLink/NextLink";
import Resume from './../store/Resume'
import FooterStore from './../store/footer'
import {ROUTES} from "../utils/routes";

const Specialization = () => {

    const [special, setSpecial] = useState(Resume.competence.specialization)
    const [isReadMove, setIsReadMove] = useState(Resume.competence.readToMove)
    const [isDistanceWork, setIsDistanceWork] = useState(Resume.competence.distanceWork)
    const [qualification, setQualification] = useState(Resume.competence.qualification)

    const [skills, setSkills] = useState(Resume.competence.skills)
    const [skill, setSkill] = useState('')

    const [isBtn, setIsBtn] = useState(false)

    function addSkill() {
        if(skill){
            setSkills([...skills, {id: Date.now(), skill}])
            setSkill('')
        }
    }

    function deleteSkill(id) {
        setSkills(skills.filter(skill => skill.id !== id))
    }

    useEffect(() => {
        setIsBtn(!!(skills.length > 0 && special && qualification))
    }, [skills, special, qualification, isReadMove, isDistanceWork])

    useEffect(() => Resume.setSkills(skills), [skills])
    useEffect(() => Resume.setSpecialization(special), [special])
    useEffect(() => Resume.setQualification(qualification), [qualification])
    useEffect(() => Resume.setReadToMove(isReadMove), [isReadMove])
    useEffect(() => Resume.setDistanceWork(isDistanceWork), [isDistanceWork])

    useEffect(() => FooterStore.switchFooter(skills.length < 15), [skills])

    return (
        <Flex flexDirection={'column'}>
            <Head>Навыки и условия</Head>
            <SubHead>Профессиональные умения</SubHead>

            <Input placeholder={'Введите должность'} onChange={(e) => setSpecial(e.target.value)} value={special} />
            <Select data={config.level_worker} text={'ваш уровень'} onChange={(e) => setQualification(e.target.value)} />

            <SkillsList
                placeholder={'Введите навык'}
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                onClickAdd={addSkill}
                items={skills}
                keyId={'id'}
                keyName={'skill'}
                onClickDelete={deleteSkill}
            />

            <div style={{marginBottom: '10px'}}>
                <InputCheck type={'checkbox'} text={'Готов к переезду'} onChange={() => setIsReadMove(!isReadMove)} />
            </div>
            <InputCheck type={'checkbox'} text={'Готов к удаленной работе'} onChange={() => setIsDistanceWork(!isDistanceWork)} />

            <NextLink link={ROUTES.EXPERIENCE} visible={isBtn} />

        </Flex>
    );
};

export default Specialization;
