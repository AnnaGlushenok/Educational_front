"use client"
import s from "./style.module.css";
import {StringItem} from "@/interfaces/StringItem";

export function LessonLink(lesson: StringItem) {
    return (
        <div className={s.links}>
            <a className={s.links__link} href={"lessons/" + lesson.id}>{lesson.name}</a>
        </div>
    )
}