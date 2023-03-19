import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";

const NextLink = ({link = '', visible = false, text = 'Дальше'}) => {

    if(!visible){
        return <></>
    }

    return (
        <Link to={link}>
            <Button>
                {text}
            </Button>
        </Link>
    );
};

export default NextLink;
