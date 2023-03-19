import React, {useEffect, useHistory} from 'react';
import Head from "./UI/Head/Head";
import Paragraph from "./UI/Paragraph/Paragraph";
import {Link} from "react-router-dom";
import Flex from "./UI/Flex/Flex";
import image from './../shared/image.png'
import Button from "./UI/Button/Button";
import {ROUTES} from "../utils/routes";
import FooterStore from "./../store/footer";

const Main = () => {

    useEffect(() => FooterStore.switchFooter(true), [])
    
    return (
        <>
            <Flex flexWrap={'wrap'}>
                <div className={'main__content'}>
                    <Head>Конструктор резюме</Head>
                    <Paragraph>Создай свое резюме по готовому шаблону!</Paragraph>
                    <Link to={ROUTES.BASIC_INFO}>
                        <Button>Создать резюме</Button>
                    </Link>
                </div>
                <img src={image} alt="logo cv" className="main__image"/>
            </Flex>

        </>
    );
};

export default Main;
