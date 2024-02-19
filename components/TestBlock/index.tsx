import s from "./style.module.css"
import {ImageButton} from "@/components/Buttons/ImageButton";
import React, {ChangeEvent, useState} from "react";
import {Input} from "@/components/TestBlock/Input";
import {TestItem} from "@/interfaces/TestItem";
import {StringItem} from "@/interfaces/StringItem";
import {Questions} from "@/enum/Questions";
import {QuestionItem} from "@/interfaces/QuestionItem";

export function TestBlock({id, onDelete, onContentChange}: {
    id: number,
    onContentChange: (newData: TestItem) => void,
    onDelete: () => void
}) {
    const [blocks, setBlocks] = useState<QuestionItem[]>([]);
    const [blockCount, setBlockCount] = useState(0)
    const [titleName, setTitleName] = useState("")
    const [questionType, setQuestionType] = useState(Questions.RADIO.toString())

    let handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value);
        sendChanges({
            id: id,
            question: e.target.value,
            type: questionType,
            answers: blocks.map(b => b.name),
            correctAnswers: ["", ""]
        })
    }

    let handleQuestionType = (e: ChangeEvent<HTMLSelectElement>) => {
        setQuestionType(e.target.value);
        sendChanges({
            id: id,
            question: titleName,
            type: e.target.value,
            answers: blocks.map(b => b.name),
            correctAnswers: ["", ""]
        })
    }

    let handleAddBlock = () => {
        setBlockCount(blockCount + 1)
        let block = {
            id: blockCount,
            name: "",
            type: questionType
        }
        setBlocks([...blocks, block]);
    }

    const handleAnswersChange = (content: StringItem) => {
        let index = blocks.findIndex(b => content.id === b.id);
        if (index !== -1)
            blocks[index].name = content.name;

        sendChanges({
            id: id,
            question: titleName,
            type: questionType,
            answers: blocks.map(b => b.name),
            correctAnswers: ["", ""]
        })
    };

    let sendChanges = (testItem: TestItem) => onContentChange(testItem)

    let handleDeleteAnswerBlock = (index: number) => {
        let newBlocks = [...blocks].filter(b => b.id != index);
        setBlocks(newBlocks);
        sendChanges({
            id: id,
            question: titleName,
            type: questionType,
            answers: newBlocks.map(b => b.name),
            correctAnswers: ["", ""]
        })
    }

    return (
        <div id={id.toString()} className={s.block}>
            <div className={s.block__card}>
                <div className={s.card__question_title}>
                    <input type="text" className={s.question_title__question}
                           value={titleName}
                           name="question"
                           onChange={handleTitleChange}
                           placeholder="Вопрос"/>
                    <select name="question_types"
                            className={s.question_title__combobox}
                            value={questionType}
                            onChange={handleQuestionType}>
                        <option value={Questions.RADIO} className={s.option}>1 выбор</option>
                        <option value={Questions.CHECKBOX} className={s.option}>Чек боксы</option>
                        <option value={Questions.TEXTBOX} className={s.option}>Самому написать</option>
                    </select>
                </div>
                {blocks.map(block =>
                    <Input key={block.id}
                           id={block.id}
                           type={block.type}
                           onBlur={handleAnswersChange}
                           onDelete={() => handleDeleteAnswerBlock(block.id)}
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
