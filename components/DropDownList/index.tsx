"use client"
import {useEffect, useRef, useState} from "react";
import s from "./style.module.css";
import Image from "next/image";
import {ListItem} from "@/interfaces/ListItem";
import {LessonLink} from "./LessonLink";
import {Excercise} from "./Excercise";

interface DropDownList {
    type: string,
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
                    {
                        list.type === "lesson" ?
                            list.listItem.list.map(e => <LessonLink key={e.id} id={e.id} name={e.name}/>) :
                            list.listItem.list.map(e => <Excercise key={e.id} id={e.id} name={e.name}/>)
                    }
                </div>
            )
            }
        </div>
    )
}