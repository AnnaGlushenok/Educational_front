import {StringItem} from "@/interfaces/StringItem";

export function HTMLText(text: StringItem) {//заменить на просто string?
    return (
        <p dangerouslySetInnerHTML={{__html: text.name}}></p>
    )
}