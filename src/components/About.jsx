import React, {useEffect, useState} from 'react';
import Resume from '../store/Resume'
import SubHead from "./UI/SubHead/SubHead";
import Textarea from "./UI/Textarea/Textarea";
import Input from "./UI/Input/Input";
import Flex from "./UI/Flex/Flex";
import NextLink from "./modules/NextLink/NextLink";
import {ROUTES} from "../utils/routes";

const About = () => {

    const [about, setAbout] = useState(Resume.description)
    const [salary, setSalary] = useState(Resume.salary)

    const [isBtn, setIsBtn] = useState(false)

    useEffect(() => setIsBtn(!!(about && salary)), [about, salary])
    useEffect(() => Resume.setDescription(about), [about])
    useEffect(() => Resume.setSalary(salary), [salary])

    return (
        <div>
            <Flex flexDirection={'column'}>
                <SubHead>Напишите о себе</SubHead>
                <Textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder={'Введите ваше описание (Ваше хобби, интересы и т.п.)'} />
                <Input type={'number'} placeholder={'Ожидаемая з/п'} onChange={(e) => setSalary(e.target.value)} value={salary} />

                <NextLink link={ROUTES.SPECIALIZATION} visible={isBtn} />
            </Flex>

        </div>
    );
};

export default About;
