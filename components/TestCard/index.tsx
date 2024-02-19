"use client"
import {GreenButton} from "@/components/Buttons/GreenButton";
import React, {useState} from "react";
import {TestBlock} from "@/components/TestBlock";
import {TestItem} from "@/interfaces/TestItem";
import {Questions} from "@/enum/Questions";

export function TestCard() {
    const [blocks, setBlocks] = useState<TestItem[]>([]);
    const [blockCount, setBlockCount] = useState(0)

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
        console.log("content", content);
        let index = blocks.findIndex(b => content.id === b.id);
        if (index !== -1)
            blocks[index] = content;
    };

    let handleSaveClick = () => {
        console.log('content', blocks);
    }

    let handleDeleteBlock = (index: number) => setBlocks([...blocks].filter(b => b.id != index));

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
