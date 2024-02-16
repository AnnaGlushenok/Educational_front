"use client"
import s from "./style.module.css";
import React, {ChangeEvent, useState} from "react";
import {TextInputBlock} from "@/components/TextInputBlock";
import {Questions} from "@/enum/Questions";
import {Lessons} from "@/enum/Lessons";
import {ContentItem} from "@/interfaces/ContentItem";

interface BlockItem {
    id: number,
    role: Lessons,
    type: Questions
}

export function TeacherLesson() {
    const [titleName, setTitleName] = useState("")
    const [blocks, setBlocks] = useState<BlockItem[]>([]);
    const [contents, setContents] = useState<ContentItem[]>([]);
    const [blockCount, setBlockCount] = useState(0)

    let handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitleName(e.target.value)

    let handleImageClick = () => {
        setBlockCount(blockCount + 1)
        const newBlock = {
            id: blockCount,
            role: Lessons.IMAGE,
            type: Questions.TEXTBOX
        };

        setBlocks([...blocks, newBlock]);
    }
    let handleTextClick = () => {
        setBlockCount(blockCount + 1)
        const newBlock = {
            id: blockCount,
            role: Lessons.TEXT,
            type: Questions.TEXTBOX
        };
        setBlocks([...blocks, newBlock]);
    }
    let handleFactClick = () => {
        setBlockCount(blockCount + 1)
        const newBlock = {
            id: blockCount,
            role: Lessons.FACT,
            type: Questions.TEXTBOX
        };
        setBlocks([...blocks, newBlock]);
    }
    let handleFormulaClick = () => {
        setBlockCount(blockCount + 1)
        const newBlock = {
            id: blockCount,
            role: Lessons.FORMULA,
            type: Questions.TEXTBOX
        };
        setBlocks([...blocks, newBlock]);
    }
    let handleSaveClick = () => {
        console.log('title', titleName);
        console.log('content', contents);
    }

    const handleContentChange = (content: ContentItem) => {
        let el = [...contents].find(c => c.id == content.id)
        el != null ? contents[el.id - 1] = content : setContents([...contents, content])
    };

    let handleDeleteBlock = (index: number) => {
        setBlocks([...blocks].filter(b => b.id != index));
        setContents([...contents].filter(c => c.id != index))
    };

    return (
        <>
            <div className={s.main__title}>
                <p className={s.title}>Название темы:</p>
                <input type="text" className={s.text} value={titleName}
                       onChange={handleChange}/>
            </div>
            {blocks.map(block => (
                <TextInputBlock key={block.id}
                                id={block.id}
                                onDelete={() => handleDeleteBlock(block.id)}
                                onContentChange={handleContentChange}
                                role={block.role}
                                type={block.type}/>
            ))}
            <div className={s.buttons}>
                <button className={s.button} onClick={handleImageClick}>+ изображение</button>
                <button className={s.button} onClick={handleTextClick}>+ содержание</button>
                <button className={s.button} onClick={handleFormulaClick}>+ формула</button>
                <button className={s.button} onClick={handleFactClick}>+ факт</button>
                <button className={`${s.button} ${s.center}`} onClick={handleSaveClick}>Сохранить</button>
            </div>
        </>
    )
}