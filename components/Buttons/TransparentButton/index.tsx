'use client'
import s from "./style.module.css";
import commonStyle from "../commonStyle.module.css";
import {ButtonItem} from "@/interfaces/ButtonItem";

export function TransparentButton(btn: ButtonItem) {
    return (
        <div className={commonStyle.container__button}>
            <button className={`${s.transparent} ${commonStyle.button}`} onClick={btn.onClick}>{btn.name}</button>
        </div>
    )
}