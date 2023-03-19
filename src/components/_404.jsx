import React from 'react';
import Head from "./UI/Head/Head";
import Paragraph from "./UI/Paragraph/Paragraph";
import Button from "./UI/Button/Button";
import {ROUTES} from "../utils/routes";
import {Link} from "react-router-dom";

const _404 = () => {

    return (
        <>
            <Head>Запрашиваемая страница не найдена</Head>
            <Paragraph>Вы можете вернуться обратно</Paragraph>
            <Link to={ROUTES.MAIN}>
                <Button>Вернуться</Button>
            </Link>
        </>
    );
};

export default _404;
