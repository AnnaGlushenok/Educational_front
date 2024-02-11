import s from "./style.module.css"
import React, {ChangeEvent} from "react";
import Image from "next/image";
import {Questions} from "@/enum/Questions";
import {Lessons} from "@/enum/Lessons";
import {ContentItem} from "@/interfaces/ContentItem";

export function TextInputBlock({id, role, type, onDelete, onContentChange}: {
    id: number,
    role: Lessons,
    type: Questions,
    onDelete: () => void,
    onContentChange: (newData: ContentItem) => void
}) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onContentChange({id: id, type: role, content: e.target.value});
    };

    return (
        <div id={id.toString()} className={s.block}>
            <input role={type}
                   className={s.content}
                   onBlur={handleChange}
                   contentEditable="true"/>
            {/*<span id={type} role={type} className={s.content}*/}
            {/*      onInput={handleChange}*/}
            {/*      contentEditable="true"></span>*/}
            <button className={s.button} onClick={onDelete}>
                <Image width={30}
                       height={30}
                       src={"../cross_teacher.svg"}
                       alt={"cross"}/>
            </button>
        </div>
    )
}