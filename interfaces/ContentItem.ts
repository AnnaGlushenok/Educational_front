import {Lessons} from "@/enum/Lessons";

export interface ContentItem {
    id: number,
    type: Lessons,
    content: string
}