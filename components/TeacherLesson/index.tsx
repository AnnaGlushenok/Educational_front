"use client"
import s from "./style.module.css";
import React, {ChangeEvent, useState} from "react";
import {TextInputBlock} from "@/components/TextInputBlock";
import {Questions} from "@/enum/Questions";
import {Lessons} from "@/enum/Lessons";

interface BlockItem {
    id: number,
    role: Lessons,
    type: Questions
}

export function TeacherLesson() {
    const [titleName, setTitleName] = useState("")
    const [blocks, setBlocks] = useState<BlockItem[]>([]);

    let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleName(e.target.value)
    }
    let handleImageClick = () => {
        const newBlock = {
            id: blocks.length + 1,
            role: Lessons.IMAGE,
            type: Questions.TEXTBOX
        };

        setBlocks([...blocks, newBlock]);
    }
    let handleTextClick = () => {
        const newBlock = {
            id: blocks.length + 1,
            role: Lessons.TEXT,
            type: Questions.TEXTBOX
        };
        setBlocks([...blocks, newBlock]);
    }
    let handleFactClick = () => {
        const newBlock = {
            id: blocks.length + 1,
            role: Lessons.FACT,
            type: Questions.TEXTBOX
        };
        setBlocks([...blocks, newBlock]);
    }
    let handleFormulaClick = () => {
        const newBlock = {
            id: blocks.length + 1,
            role: Lessons.FORMULA,
            type: Questions.TEXTBOX
        };
        setBlocks([...blocks, newBlock]);
    }
    let handleSaveClick = () => {
        console.log(blocks)
    }
    let handleDeleteBlock = (index: number) => {
        setBlocks([...blocks].filter(b => b.id != index));
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
                                onDelete={() => handleDeleteBlock(block.id)}
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