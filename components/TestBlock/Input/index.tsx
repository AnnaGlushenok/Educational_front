import s from "./style.module.css";
import React, {ChangeEvent} from "react";
import {ImageButton} from "@/components/Buttons/ImageButton";
import {StringItem} from "@/interfaces/StringItem";

export function Input({id, type, onDelete, onBlur}: {
    id: number,
    type: string,
    onBlur: (newData: StringItem) => void
    onDelete: () => void
}) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onBlur({
            id: id,
            name: e.target.value
        });
    }

    return (
        <div id={id.toString()} className={s.questions__question}>
            <input type={type} className={s.question} name="question" onBlur={handleChange} placeholder="Вопрос"/>
            <ImageButton name={"../cross_teacher.svg"} onClick={onDelete}/>
        </div>
    )
}
