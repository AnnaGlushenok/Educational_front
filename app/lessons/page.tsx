import {ListItem} from "@/interfaces/ListItem";
import s from "../mainstyle.module.css";
import {DropDownList} from "@/components/DropDownList";
import {Cards} from "@/enum/Cards";

export const metadata = {
    title: 'Уроки'
}

export default function Lessons() {
    let lessons: ListItem[] = [
        {
            title: "Первоначальные химические понятия и теоретические представления",
            list: [{
                id: 1,
                name: "Предмет химии"
            }, {
                id: 2,
                name: "Физические тела и вещества"
            }, {
                id: 3,
                name: "Чистые вещества и их смеси"
            }, {
                id: 4,
                name: "Предмет химии"
            }, {
                id: 5,
                name: "Физические тела и вещества"
            }, {
                id: 6,
                name: "Чистые вещества и их смеси"
            }, {
                id: 7,
                name: "Предмет химии"
            }, {
                id: 8,
                name: "Физические тела и вещества"
            }, {
                id: 9,
                name: "Чистые вещества и их смеси"
            }]
        },
        {
            title: "Классы неорганических веществ",
            list: [{
                id: 1,
                name: "Предмет химии"
            }, {
                id: 2,
                name: "Физические тела и вещества"
            }, {
                id: 3,
                name: "Чистые вещества и их смеси"
            }]
        },
        {
            title: "Периодический закон и строение атомов",
            list: [{
                id: 1,
                name: "Предмет химии"
            }, {
                id: 2,
                name: "Физические тела и вещества"
            }, {
                id: 3,
                name: "Чистые вещества и их смеси"
            }]
        }
    ]
    return (
        <main className={s.main}>
            {lessons.map(l => <DropDownList key={l.title} listItem={l} type={Cards.LESSON}/>)}
        </main>
    )
}