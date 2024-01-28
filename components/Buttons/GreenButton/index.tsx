'use client'
import s from "./style.module.css";
import commonStyle from "../commonStyle.module.css";
import {ButtonItem} from "@/interfaces/ButtonItem";

export function GreenButton(btn: ButtonItem) {
    return (
        <div className={commonStyle.container__button}>
            <button className={`${s.green} ${commonStyle.button}`} onClick={btn.onClick}>{btn.name}</button>
        </div>
    )
}