import React, {useEffect, useState} from 'react';
import Head from "../../UI/Head/Head";
import blank from '../../../shared/blank.png'
import styles from './PhotoResume.module.css'
import FooterStore from "../../../store/footer";
import Paragraph from "../../UI/Paragraph/Paragraph";
import Resume from "../../../store/Resume";
import NextLink from "../../modules/NextLink/NextLink";
import {ROUTES} from "../../../utils/routes";
import Flex from "../../UI/Flex/Flex";
import Button from "../../UI/Button/Button";

const PhotoResume = () => {

    const [src, setSrc] = useState(blank)
    const [drag, setDrag] = useState(false)

    useEffect(() => FooterStore.switchFooter(true), [])
    useEffect(() => {

        Resume.setPhoto(src)
    }, [src])

    function dragStartHandler(e){
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e){
        e.preventDefault()
        setDrag(false)
    }

    function dropHandler(e){
        e.preventDefault()
        setDrag(false)

        let file = e.dataTransfer.files[0]
        let ext = file.name.split('.')
        ext = ext[ext.length - 1].toLowerCase()

        if(ext === 'png' || ext === 'jpg'){
            let reader = new FileReader()

            reader.onload = (event) => {
                console.log(event.target.result)
                console.log(blank)
                setSrc(event.target.result)
            }

            reader.readAsDataURL(file)
        } else {
            setSrc(blank)
        }
    }

    const deleteLoadPhoto = () => setSrc(blank)

    return (
        <Flex flexDirection={'column'}>
            <Head>Изображение</Head>
            <Paragraph>Перетащите файл на изображение для загрузки</Paragraph>
            <Paragraph>Учтите что файл должен быть изображением (PNG, JPG)</Paragraph>
            <Paragraph>При загрузке нескольких файлов, будет принят к обработке только один</Paragraph>

            {src !== blank ? <Button onClick={deleteLoadPhoto}>Удалить</Button> : ''}
            <img
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => dropHandler(e)}
                src={src}
                alt={''}
                className={`${styles.image__profile} ${drag ? styles.image__drag : ''}`}
            />

            <NextLink link={ROUTES.RESUME} visible={true} />
        </Flex>
    );
};

export default PhotoResume;
