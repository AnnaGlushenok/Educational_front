import s from "./style.module.css";
import Image from "next/image";
import {ButtonItem} from "@/interfaces/ButtonItem";

export function ImageButton(btn: ButtonItem) {
    let alt = btn.name.split("../")
    return (
        <button className={s.questions__add_btn} onClick={btn.onClick}>
            <Image width={30} height={30} src={btn.name} alt={alt[alt.length]}/>
        </button>
    )
}