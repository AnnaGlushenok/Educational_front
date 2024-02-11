import mainStyle from "@/app/mainstyle.module.css";
import React from "react";
import {TeacherTask} from "@/components/TeacherTask";

export const metadata = {
    title: 'Создать задание'
}

export default function CreateTask() {
    return (
        <main className={mainStyle.main}>
            <TeacherTask/>
        </main>
    )
}