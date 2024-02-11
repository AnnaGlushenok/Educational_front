import s from "./style.module.css"
import {ImageButton} from "@/components/Buttons/ImageButton";
import React from "react";

export function TestBlock() {
    return (
        <div className={s.block__card} id="0">
            <div className={s.card__question_title}>
                <input type="text" className={s.question_title__question} name="question" placeholder="Вопрос"/>
                <select name="question_types" className={s.question_title__combobox} id="question_type">
                    <option className={s.option}>1 выбор</option>
                    <option className={s.option}>Чек боксы</option>
                    <option className={s.option}>Самому написать</option>
                </select>
            </div>
            <div className={s.questions__question}></div>
            <div className={s.questions}>
                <ImageButton name={"../plus.svg"} onClick={() => {
                }}/>
            </div>
        </div>
    )
}