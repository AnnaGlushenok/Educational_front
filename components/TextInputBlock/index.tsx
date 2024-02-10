import s from "./style.module.css"
import React from "react";
import Image from "next/image";
import {Questions} from "@/enum/Questions";
import {Lessons} from "@/enum/Lessons";

export function TextInputBlock({role, type, onDelete}: {
    role: Lessons,
    type: Questions,
    onDelete: () => void
}) {
    return (
        <div id={role.toString()} className={s.block}>
            {/*<input role={type} className={s.content} contentEditable="true"></input>*/}
            <span role={type} className={s.content} contentEditable="true"></span>
            <button className={s.button} onClick={onDelete}>
                <Image width={30}
                       height={30}
                       src={"../cross_teacher.svg"}
                       alt={"cross"}/>
            </button>
        </div>
    )
}