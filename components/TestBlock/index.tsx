import s from "./style.module.css"
import {ImageButton} from "@/components/Buttons/ImageButton";
import React, {ChangeEvent, useState} from "react";
import {Input} from "@/components/TestBlock/Input";
import {TestItem} from "@/interfaces/TestItem";
import {StringItem} from "@/interfaces/StringItem";
import {Questions} from "@/enum/Questions";

export function TestBlock({id, onDelete, onContentChange}: {
    id: number,
    onContentChange: (newData: TestItem) => void,
    onDelete: () => void
}) {
    const [blocks, setBlocks] = useState<StringItem[]>([]);
    const [blockCount, setBlockCount] = useState(0)
    const [titleName, setTitleName] = useState("")
    const [questionType, setQuestionType] = useState(Questions.RADIO.toString())

    let handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitleName(e.target.value)
    let handleQuestionType = (e: ChangeEvent<HTMLSelectElement>) => setQuestionType(e.target.value)

    let handleAddBlock = () => {
        setBlockCount(blockCount + 1)
        let block = {
            id: blockCount,
            name: ""
        }
        setBlocks([...blocks, block]);
    }

    const handleChange = (content: StringItem) => {
        let el = [...blocks].find(c => c.id == content.id)
        el != null ?
            blocks[el.id] = content :
            setBlocks([...blocks, content])
        // onContentChange({
        //     id: id,
        //     question: titleName,
        //     type: questionType,
        //     answers: blocks.map(b => b.name),
        //     correctAnswers: ["", ""]
        // })
    };

    let handleDeleteBlock = (index: number) => {
        setBlocks(blocks.filter(b => b.id != index));
        console.log("blocks", blocks)
    };

    return (
        <div id={id.toString()} className={s.block}>
            <div className={s.block__card} id="0">
                <div className={s.card__question_title}>
                    <input type="text" className={s.question_title__question}
                           value={titleName}
                           name="question"
                           onChange={handleTitleChange}
                           placeholder="Вопрос"/>
                    <select name="question_types"
                            className={s.question_title__combobox}
                            id="question_type"
                            onBlur={handleQuestionType}>
                        <option value={Questions.RADIO} className={s.option}>1 выбор</option>
                        <option value={Questions.CHECKBOX} className={s.option}>Чек боксы</option>
                        <option value={Questions.TEXTBOX} className={s.option}>Самому написать</option>
                    </select>
                </div>
                {blocks.map(block =>
                    <Input key={block.id}
                           id={block.id}
                           onBlur={handleChange}
                           onDelete={() => handleDeleteBlock(block.id)}
                    />)
                }
                <div className={s.questions}>
                    <ImageButton name={"../plus.svg"} onClick={handleAddBlock}/>
                </div>
            </div>
            <ImageButton name={"../cross_teacher.svg"} onClick={onDelete}/>
        </div>
    )
}