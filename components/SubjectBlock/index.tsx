"use client"

import s from "./style.module.css"
import {useState} from "react";
import {SubjectItem} from "@/interfaces/SubjectItem";
import {NumberClass} from "@/components/SubjectBlock/NumberClass";
import Image from "next/image";

export function SubjectBlock(subject: SubjectItem) {
    let [isAuth, setIsAuth] = useState(true);

    if (!isAuth) {
        return (
            <a href="#" className={s.block}>
                <p className={s.caption}>{subject.title}</p>
                <Image
                    width={300}
                    height={300}
                    src={subject.img}
                    alt={subject.imgAlt}
                    className={s.img}/>
            </a>
        );
    } else {
        return (
            <div className={s.block}>
                <p className={s.caption}>{subject.title}</p>
                <Image width={300} height={300} src={subject.img} alt={subject.imgAlt} className={s.img}/>
                <div className={s.classes}>
                    {subject.classes.map(c =>
                        <NumberClass
                            key={c.id}
                            id={c.id}
                            name={c.name}
                            subjectId={subject.id}/>)}
                </div>
            </div>
        );
    }
}

