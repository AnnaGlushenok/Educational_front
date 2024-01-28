"use client"
import React, {useEffect, useRef, useState} from "react";
import ds from "../DropDownList/style.module.css";
import s from "./style.module.css";
import Image from "next/image";
import Items from "@/components/CheckBox";
import {StringItem} from "@/interfaces/StringItem";
import {WhiteButton} from "../Buttons/WhiteButton";
import {ControlItem} from "@/interfaces/ControlItem";
import {Controls} from "@/enum/Controls";
import {Table} from "@/components/Table";
import {Questions} from "@/enum/Questions";

export function Control(list: ControlItem) {
    const [isActive, setIsActive] = useState(false)
    const block = useRef(null);
    const [blockHeight, setBlockHeight] = useState('0px');
    const toggle = () => setIsActive(!isActive)

    useEffect(() => {
        setBlockHeight(isActive ? `100px` : '0px');
    }, [isActive]);

    const [selectedItems, setSelectedItems] = useState<StringItem[]>([]);
    const handleCheckboxChange = (isChecked: boolean, id: number, name: string) => {
        setSelectedItems((selectedItems) =>
            isChecked ?
                [...selectedItems, {id, name}] :
                selectedItems.filter(item => item.id !== id)
        )
    }
    const handleButtonClick = () => {
        console.log('Выбранные пункты:', selectedItems);
        // Здесь можно выполнять дополнительные действия с выбранными пунктами
    };
    return (
        <div>
            <div className={`${ds.title} ${ds.title__title} ${isActive ? ds.title__active : ''}`} onClick={toggle}>
                <Image width={40} height={40} className={ds.title__arrow} src="./arrow.svg" alt="arrow"/>
                <p className={ds.title__title}>{list.title}</p>
            </div>
            {isActive && (
                <div ref={block} className={ds.container__block}>
                    <div>
                        {
                            list.titles.map(t => <Items key={t.id}
                                                        type={Questions.CHECKBOX}
                                                        onCheckboxChange={handleCheckboxChange}
                                                        topic={t}
                                                        image={true}
                            />)
                        }
                        <WhiteButton name={"Повторить"} onClick={handleButtonClick}/>
                        <div className={s.container__caption}>
                            <p className={s.caption}>Пример решения варианта контрольной:</p>
                        </div>
                        <ol className={s.item__container}>
                            {
                                list.examples.map(t => {
                                    switch (t.type) {
                                        case Controls.TEXT:
                                            return <li key={t.id} className={s.item}>
                                                <span dangerouslySetInnerHTML={{__html: t.question}}/>
                                                <ol type="a">
                                                    {t.answers.map(a => <li key={a}>
                                                        <span dangerouslySetInnerHTML={{__html: a}}/>
                                                    </li>)}
                                                </ol>
                                                <span dangerouslySetInnerHTML={{__html: t.answer}}/>
                                            </li>
                                        case Controls.TABLE:
                                            return <li key={t.id} className={s.item}>
                                                <p dangerouslySetInnerHTML={{__html: t.question}}/>
                                                <Table key={t.id} list={t.answers}/>
                                                <span dangerouslySetInnerHTML={{__html: t.answer}}/>
                                            </li>
                                        case Controls.IMG:
                                            return <li key={t.id} className={s.item}>
                                                <p dangerouslySetInnerHTML={{__html: t.question}}/>
                                                <Image width={500} height={500} className={s.img} key={t.id}
                                                       src={t.answers[0]}
                                                       alt={t.answer}/>
                                            </li>
                                    }
                                })
                            }</ol>
                    </div>
                </div>
            )}
        </div>
    )
}