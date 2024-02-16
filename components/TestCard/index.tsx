"use client"
import {GreenButton} from "@/components/Buttons/GreenButton";
import React, {useState} from "react";
import {TestBlock} from "@/components/TestBlock";
import {TestItem} from "@/interfaces/TestItem";
import {Questions} from "@/enum/Questions";

export function TestCard() {
    const [blocks, setBlocks] = useState<TestItem[]>([]);
    const [blockCount, setBlockCount] = useState(0)
    const [contents, setContents] = useState<TestItem[]>([]);

    let handleAddBlock = () => {
        setBlockCount(blockCount + 1)
        let block = {
            id: blockCount,
            question: "",
            type: Questions.RADIO,
            answers: [],
            correctAnswers: []
        }
        setBlocks([...blocks, block]);
    }
    const handleContentChange = (content: TestItem) => {
        let el = [...contents].find(c => c.id == content.id)
        // console.log("el", el);
        el != null ? contents[el.id] = content : setContents([...contents, content])
    };
    let handleSaveClick = () => {
        console.log('content', contents);
    }
    let handleDeleteBlock = (index: number) => {
        setBlocks([...blocks].filter(b => b.id != index));
    };

    return (
        <div>
            {blocks.map(block =>
                <TestBlock key={block.id}
                           id={block.id}
                           onContentChange={handleContentChange}
                           onDelete={() => handleDeleteBlock(block.id)}
                />)}
            <GreenButton name={"Добавить"} onClick={handleAddBlock}/>
            <GreenButton name={"Сохранить"} onClick={handleSaveClick}/>
        </div>
    )
}
