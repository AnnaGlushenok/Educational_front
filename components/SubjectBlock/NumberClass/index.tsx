import {ClassItem} from "@/interfaces/ClassItem";
import s from "./style.module.css"

export function NumberClass(classItem: ClassItem) {
    return (
        <a href={`menu?subject_id=${classItem.subjectId}&class_id=${classItem.id}`}
           className={s.item}>{classItem.name}</a>
    )
}
