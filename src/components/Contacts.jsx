import React, {useEffect, useState} from 'react';
import Flex from "./UI/Flex/Flex";
import Head from "./UI/Head/Head";
import Input from "./UI/Input/Input";
import SubHead from "./UI/SubHead/SubHead";
import Button from "./UI/Button/Button";
import Resume from '../store/Resume'
import Paragraph from "./UI/Paragraph/Paragraph";
import SocialLinksList from "./modules/SocialLinksList/SocialLinksList";
import NextLink from "./modules/NextLink/NextLink";
import {ROUTES} from "../utils/routes";
import FooterStore from "../store/footer";

const Contacts = () => {

    const [email, setEmail] = useState(Resume.contacts.email)
    const [phone, setPhone] = useState(Resume.contacts.phone)
    const [socialLinks, setSocialLinks] = useState(Resume.contacts.socialLinks)

    const [titleSocial, setTitleSocial] = useState('')
    const [linkSocial, setLinkSocial] = useState('')

    const [isBtn, setIsBtn] = useState(false)

    useEffect(() => Resume.setEmail(email), [email])
    useEffect(() => Resume.setPhone(phone), [phone])
    useEffect(() => {
        Resume.setSocialLinks(socialLinks)
        FooterStore.switchFooter(socialLinks.length < 4)
    }, [socialLinks])

    useEffect(() => setIsBtn(!!(email && phone)), [email, phone])

    function createSocialLink(){
        if(titleSocial && linkSocial){
            const socialLink = {
                id: Date.now(),
                title: titleSocial,
                link: linkSocial,
            }

            setSocialLinks([...socialLinks, socialLink])
            setTitleSocial('')
            setLinkSocial('')
        }
    }

    function deleteSocialLink(id){
        setSocialLinks(socialLinks.filter(socialLink => socialLink.id !== id))
    }

    return (
        <Flex flexDirection={'column'}>
            <Head>Контакты</Head>
            <SubHead>Основная информация</SubHead>

            <Input type={'email'} placeholder={'Электронная почта'} value={email} onChange={e => setEmail(e.target.value)} />
            <Input type={'tel'} placeholder={'Телефон'} value={phone} onChange={e => setPhone(e.target.value)} />

            <SubHead>Социальные сети</SubHead>

            <div>
                <Flex flexDirection={'column'}>
                    <Paragraph>Добавить ссылку на социальную сеть</Paragraph>
                    <Input
                        type={'text'}
                        placeholder={'Название соцсети'}
                        value={titleSocial}
                        onChange={e => setTitleSocial(e.target.value)}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Ссылка на профиль'}
                        value={linkSocial}
                        onChange={e => setLinkSocial(e.target.value)}
                    />
                    <Button onClick={createSocialLink}>Добавить</Button>
                </Flex>
            </div>

            <SocialLinksList
                items={socialLinks}
                keyId={'id'}
                keyLink={'link'}
                keyTitle={'title'}
                deleteFn={deleteSocialLink}
            />

            <NextLink link={ROUTES.PHOTO} visible={isBtn} />
        </Flex>
    );
};

export default Contacts;
