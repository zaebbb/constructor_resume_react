import React, {useEffect, useState} from 'react';
import Resume from '../store/Resume'
import FooterStore from './../store/footer'
import Flex from "./UI/Flex/Flex";
import Head from "./UI/Head/Head";
import Input from "./UI/Input/Input";
import Textarea from "./UI/Textarea/Textarea";
import Paragraph from "./UI/Paragraph/Paragraph";
import {observer} from "mobx-react-lite";
import Button from "./UI/Button/Button";
import ExperienceList from "./modules/ExperienceList/ExperienceList";
import NextLink from "./modules/NextLink/NextLink";
import {ROUTES} from "../utils/routes";

const Experience = observer(() => {

    const [experience, setExperience] = useState(Resume.workExperience)

    const [post, setPost] = useState('')
    const [organization, setOrganization] = useState('')
    const [work, setWork] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')

    const removeWork = id => setExperience(experience.filter(item => item.id !== id))

    function createExperience(){
        if(post && organization && work && start){
            const obj = {
                id: Date.now(),
                post,
                organization,
                work,
                start,
                end
            }

            setExperience([...experience, obj])

            setPost('')
            setOrganization('')
            setWork('')
            setStart('')
            setEnd('')
        }
    }

    useEffect(() => FooterStore.switchFooter(false), [])
    useEffect(() => Resume.setExperience(experience), [experience])

    return (
        <Flex flexDirection={'column'}>
            <Head>Опыт работы</Head>

            <Input
                type={'text'}
                placeholder={'Должность'}
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />
            <Input
                type={'text'}
                placeholder={'Организация'}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
            />
            <Textarea
                placeholder={'Должносные обязанности, достижения'}
                onChange={(e) => setWork(e.target.value)}
                value={work}
            />

            <Paragraph>Начали работать с</Paragraph>
            <Input type={'date'} onChange={(e) => setStart(e.target.value)} value={start} />

            <Paragraph>По (пропустите если работаете по настоящее время)</Paragraph>
            <Input type={'date'} onChange={(e) => setEnd(e.target.value)} value={end} />
            <Button onClick={createExperience}>Добавить</Button>

            <ExperienceList
                title={'Места работы'}
                experienceList={experience}
                onClick={removeWork}
            />

            <NextLink visible={experience.length > 0} link={ROUTES.EDUCATION} />
        </Flex>
    );
});

export default Experience;
