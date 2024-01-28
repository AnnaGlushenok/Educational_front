'use client'
import s from "./style.module.css";
import {ButtonItem} from "@/interfaces/ButtonItem";
import commonStyle from "../commonStyle.module.css";

export function WhiteButton(btn: ButtonItem) {
    return (
        <div className={commonStyle.container__button}>
            <button className={`${commonStyle.button} ${s.red}`}
                    onClick={btn.onClick}>{btn.name}</button>
        </div>
    )
}