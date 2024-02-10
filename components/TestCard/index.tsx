"use client"
import s from "./style.module.css"
import Image from "next/image";
import {GreenButton} from "@/components/Buttons/GreenButton";

export function TestCard() {
    return (
        <div>
            <div className={s.block__card} id="0">
                <div className={s.card__question_title}>
                    <input type="text" className={s.question_title__question} name="question" placeholder="Вопрос"/>
                    <select name="question_types" className={s.question_title__combobox} id="question_type">
                        <option>1 выбор</option>
                        <option>Чек боксы</option>
                        <option>Самому написать</option>
                    </select>
                </div>
                <div className={s.questions__question}></div>
                <div className={s.questions}>
                    {/*TODO вынести кнопки-картинки*/}
                    <button className={s.questions__add_btn} onClick={() => {
                    }}>
                        <Image width={30} height={30} src={"../../images/plus.svg"} alt={"plus"}/>
                    </button>
                </div>
            </div>
            <GreenButton name={"Добавить"} onClick={() => {
            }}/>
            <GreenButton name={"Сохранить"} onClick={() => {
            }}/>
        </div>
    )
}
