import React from 'react';

const A = ({children, target = '_self', link = ''}) => {
    return (
        <a href={link} target={target}>{children}</a>
    );
};

export default A;
