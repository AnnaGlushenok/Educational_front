import {StringItem} from "@/interfaces/StringItem";
import {Controls} from "@/enum/Controls";

export interface ControlItem {
    id: number,
    title: string,
    titles: StringItem[],
    examples: {
        id: number,
        type: Controls
        question: string,
        answers: string[],
        answer: string
    }[],
}