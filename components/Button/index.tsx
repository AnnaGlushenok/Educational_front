'use client'
import s from "./style.module.css";
import {ButtonItem} from "@/interfaces/ButtonItem";

export function Button(btn: ButtonItem) {
    return (
        <div className={s.container__button}>
            <button className={`${s.container__button} ${s.button}`}
                    onClick={btn.onClick}>{btn.name}</button>
        </div>
    )
}