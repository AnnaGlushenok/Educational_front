import s from "./style.module.css";
import {StringItem} from "@/interfaces/StringItem";
import React, {ChangeEvent, useState} from 'react';

export default function CheckBox({topic, onCheckboxChange}: {
    topic: StringItem,
    onCheckboxChange: (isChecked: boolean, id: number) => void
}) {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        onCheckboxChange(isChecked, topic.id);
    };

    return (
        <label htmlFor={topic.id.toString()} className={s.item}>
            <input
                type="checkbox"
                style={{display: 'none'}}
                id={topic.id.toString()}
                className={s.hidden_checkbox}
                onChange={handleCheckboxChange}/>
            <div className={s.check_box}></div>
            <p className={s.text}>{topic.name}</p>
        </label>
    )
}
