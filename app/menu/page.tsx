import s from "./style.module.css";
import {TaskCard} from "@/components/TaskCard";

export const metadata = {
    title: 'Меню'
}

export default function Menu() {
    return (
        <main className={s.main}>
            <TaskCard title={"Уроки"} image={"./lessons_logo.svg"} path={"lessons"}/>
            <TaskCard title={"Задания"} image={"./task_logo.svg"} path={"tasks"}/>
            <TaskCard title={"Контрольные"} image={"./task_logo.svg"} path={"control"}/>
        </main>
    )
}
