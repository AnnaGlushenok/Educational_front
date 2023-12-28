import {ClassItem} from "@/interfaces/ClassItem";

export interface SubjectItem {
    id: number,
    title: string,
    img: string,
    imgAlt: string,
    classes: ClassItem[]
}
