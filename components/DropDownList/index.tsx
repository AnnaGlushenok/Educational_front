"use client"
import React, {useEffect, useRef, useState} from "react";
import s from "./style.module.css";
import Image from "next/image";
import {ListItem} from "@/interfaces/ListItem";
import {Cards} from "@/enum/Cards";
import {LessonLink} from "./LessonLink";
import {HTMLText} from "./Excercise";
import {WhiteButton} from "@/components/Buttons/WhiteButton";

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

    let [isAuth, setIsAuth] = useState(true);
    let [isExist, setIsExist] = useState(true);

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
                                return (
                                    <div>
                                        {list.listItem.list.map(e => <LessonLink key={e.id} id={e.id} name={e.name}/>)}
                                        {(isAuth && isExist) &&
                                            <WhiteButton name={"Пройти тест"} onClick={() => console.log()}/>
                                        }
                                    </div>
                                );
                            case Cards.TASK:
                                return (
                                    <ol>
                                        {list.listItem.list.map(e =>
                                            <li key={e.id}>
                                                <HTMLText key={e.id} text={e.name}/>
                                            </li>)
                                        }
                                    </ol>
                                );
                        }
                    })()}
                </div>
            )}
        </div>
    )
}