import {StringItem} from "@/interfaces/StringItem";

export function Excercise(text: StringItem) {
    return (
        <p dangerouslySetInnerHTML={{__html: text.name}}></p>
    )
}