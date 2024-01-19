"use client"
import {useEffect, useRef, useState} from "react";
import s from "./style.module.css";
import Image from "next/image";
import {ListItem} from "@/interfaces/ListItem";
import {Cards} from "@/enum/Cards";
import {LessonLink} from "./LessonLink";
import {HTMLText} from "./Excercise";
import CheckBox from "@/components/CheckBox";

interface DropDownList {
    type: Cards,
    listItem: ListItem
}

export function DropDownList(list: DropDownList) {
    const [isActive, setIsActive] = useState(false)
    const block = useRef(null);
    const [blockHeight, setBlockHeight] = useState('0px');
    const toggle = () => setIsActive(!isActive)

    useEffect(() => {
        setBlockHeight(isActive ? `100px` : '0px');
    }, [isActive]);

    return (
        <div>
            <div className={`${s.title} ${s.title__title} ${isActive ? s.title__active : ''}`} onClick={toggle}>
                <Image width={40} height={40} className={s.title__arrow} src="./arrow.svg" alt="arrow"/>
                <p className={s.title__title}>{list.listItem.title}</p>
            </div>
            {isActive && (
                <div ref={block} className={s.container__block}>
                    {(() => {
                        switch (list.type) {
                            case Cards.LESSON:
                                return list.listItem.list.map(e => <LessonLink key={e.id} id={e.id} name={e.name}/>);
                            case Cards.TASK:
                                return list.listItem.list.map(e => <HTMLText key={e.id} id={e.id} name={e.name}/>);
                            // case Cards.CONTROL:
                            //     return list.listItem.list.map(e => <CheckBox key={e.id} id={e.id} name={e.name}
                            //                                                  onCheckboxChange={}/>);
                        }
                    })()}
                </div>
            )}
        </div>
    )
}