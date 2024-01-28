"use client"
import s from "./style.module.css";
import {GreenButton} from "@/components/Buttons/GreenButton";
import {TransparentButton} from "@/components/Buttons/TransparentButton";
import {useState} from "react";

export function Login() {
    let [isRegister, setIsRegister] = useState(false);

    if (isRegister) {
        return (
            <form className={s.form}>
                <input className={s.input} type="text" required pattern="[А-Яа-я]+" placeholder="Фамилия"/>
                <input className={s.input} type="text" required pattern="[А-Яа-я]+" placeholder="Имя"/>
                <input className={s.input} type="text" required pattern="[А-Яа-я]+" placeholder="Отчество"/>
                <input className={s.input} type="text" required pattern="^([1-9]|1[0-1])$" placeholder="Номер класса"/>
                <input className={s.input} type="text" required pattern="[A-Za-z(\d+)?]{4,}"
                       placeholder="Логин (не менее 4 латинских символов)"/>
                <input className={s.input} type="password" required pattern="[A-Za-z(\d+!@#$%^&*:;)?]{6,}"
                       placeholder="Пароль (не менее 6 латинских символов)"/>

                <GreenButton name={"Регистрация"} onClick={() => console.log()}/>
                <TransparentButton name={"Войти"} onClick={() => setIsRegister(false)}/>
            </form>
        )
    } else {
        return (
            <form className={s.form}>
                <input className={s.input} type="text" required pattern="[A-Za-z(\d+)?]{4,}"
                       placeholder="Логин"/>
                <input className={s.input} type="password" required pattern="[A-Za-z(\d+!@#$%^&*:;)?]{6,}"
                       placeholder="Пароль"/>

                <GreenButton name={"Войти"} onClick={() => console.log()}/>
                <TransparentButton name={"Регистрация"} onClick={() => setIsRegister(true)}/>
            </form>
        )
    }
}
