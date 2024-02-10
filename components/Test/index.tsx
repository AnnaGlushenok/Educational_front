"use client"
import s from "./style.module.css";
import {GreenButton} from "@/components/Buttons/GreenButton";
import React, {useState} from "react";
import TestController from "@/api/testController";
import Items from "@/components/CheckBox";
import {StringItem} from "@/interfaces/StringItem";

export let mark = 0

export function addMark(answers: StringItem[], correctAnswers: string[]) {
    if (answers.length == 1 && correctAnswers[0] == answers[0].name) {
        mark += 1
    } else {
        let countCorrectAnswers = 0;
        mark += 1;
        for (const answer of answers)
            if (correctAnswers.includes(answer.name))
                countCorrectAnswers += correctAnswers.length
// TODO
        //должно работать
        mark -= Math.abs(correctAnswers.length - countCorrectAnswers) / correctAnswers.length;
    }
}

export function Test() {
    const [index, setIndex] = useState(-1);
    const [selectedItems, setSelectedItems] = useState<StringItem[]>([]);
    const [startTime, setStartTime] = useState(new Date().getTime());
    const [totalSeconds, setTotalSeconds] = useState(0);

    let resp = TestController.get()
    const questions = resp.questions;

    const handleCheckboxChange = (isChecked: boolean, id: number, name: string) => {
        setSelectedItems((selectedItems) =>
            isChecked ?
                [...selectedItems, {id, name}] :
                selectedItems.filter(item => item.id !== id)
        )
    }

    const handleNextQuestion = () => {
        setIndex(index + 1)
        addMark(selectedItems, questions[index].correctAnswers)
        if (index == questions.length - 1)
            setTotalSeconds(Math.floor((new Date().getTime() - startTime) / 1000))
    };

    const startTimer = () => {
        setIndex(index + 1)
        setStartTime(new Date().getTime());
    }

    switch (index) {
        case -1:
            return (
                <div className={`${s.block__card} ${s.card}`}>
                    <p className={s.card__title}>Тест</p>
                    <p className={s.card__question_caption}>{resp.name}</p>
                    <p className={s.datetime__text}>Количество вопросов: {questions.length}</p>
                    <GreenButton name={"Начать"} onClick={startTimer}/>
                </div>)
        case questions.length:
            return (
                <div className={`${s.block__card} ${s.card}`}>
                    <p className={s.card__title}>Тест</p>
                    <p className={s.card__question_caption}>{resp.name}</p>
                    <p className={s.card__title}>Оценка:</p>
                    <p className={s.card__mark}>{(mark * 10) / questions.length}</p>
                    <div className={s.datetime}>
                        <div className={s.datetime__left_block}>
                            <p className={s.datetime__text}>Дата:<br/>Время выполнения:</p>
                        </div>
                        <div className={s.datetime__right_block}>
                            <p className={s.datetime__text}>{new Date().toLocaleDateString()}<br/>
                                {Math.floor(totalSeconds / 60)}:{totalSeconds % 60}
                            </p>
                        </div>
                    </div>
                    <GreenButton name={"Далее"} onClick={handleNextQuestion}/>
                </div>)
        default:
            return (
                <div className={`${s.block__card} ${s.card}`}>
                    <p className={s.card__question_number}>{index + 1}/{questions.length}</p>
                    <p className={s.card__question_caption}>{questions[index].question}</p>
                    <div className={s.card__questions}>
                        {
                            resp.questions[index].answers.map(a =>
                                <Items key={a.id}
                                       topic={a}
                                       type={questions[index].type}
                                       onCheckboxChange={handleCheckboxChange}
                                       image={false}/>
                            )
                        }
                    </div>
                    <GreenButton name={"Далее"} onClick={handleNextQuestion}/>
                </div>)
    }
}
