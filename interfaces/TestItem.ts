import {Questions} from "@/enum/Questions";
import {StringItem} from "@/interfaces/StringItem";

export interface TestItem {
    id: number,
    question: string,
    type: Questions,
    answers: StringItem[],
    correctAnswers: string[]
}