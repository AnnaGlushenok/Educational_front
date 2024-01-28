import s from "./style.module.css";
import {StringItem} from "@/interfaces/StringItem";
import React, {ChangeEvent} from 'react';
import {Questions} from "@/enum/Questions";

export default function Items({topic, type, onCheckboxChange, image}: {
    topic: StringItem,
    type: Questions,
    onCheckboxChange: (isChecked: boolean, id: number, name: string) => void,
    image: boolean
}) {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        onCheckboxChange(isChecked, topic.id, topic.name);
    };

    return image ? (
            <label htmlFor={topic.id.toString()} className={s.item}>
                <input
                    type={type}
                    style={{display: 'none'}}
                    id={topic.id.toString()}
                    className={s.hidden_checkbox}
                    onChange={handleCheckboxChange}/>
                <div className={s.check_box}></div>
                <p className={s.text}>{topic.name}</p>
            </label>
        ) :
        <div key={topic.name} className={s.card__question}>
            <input
                type={type}
                id={topic.name}
                name={type}
                className={s.question__checkbox}
                onChange={handleCheckboxChange}/>
            <label htmlFor={topic.name}>{topic.name}</label>
        </div>
}
