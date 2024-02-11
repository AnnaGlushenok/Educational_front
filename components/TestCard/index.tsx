"use client"
import {GreenButton} from "@/components/Buttons/GreenButton";
import React, {useState} from "react";
import {TestBlock} from "@/components/TestBlock";

interface TestItem {
    id: number
}

export function TestCard() {
    const [blocks, setBlocks] = useState<TestItem[]>([]);
    let handleAddBlock = () => {
        let block = {
            id: blocks.length + 1,
        }
        setBlocks([...blocks, block]);
    }
    // TODO добавь удаление блока
    return (
        <div>
            <TestBlock/>
            {blocks.map(b => <TestBlock/>)}
            <GreenButton name={"Добавить"} onClick={handleAddBlock}/>
            <GreenButton name={"Сохранить"} onClick={() => {
            }}/>
        </div>
    )
}
