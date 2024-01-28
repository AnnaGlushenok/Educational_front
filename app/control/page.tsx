import React from 'react';
import mainstyle from "../mainstyle.module.css";
import {ControlItem} from "@/interfaces/ControlItem";
import {Control} from "@/components/Control";
import {Controls} from "@/enum/Controls";

export const metadata = {
    title: 'Контрольные'
}

export default function ControlPage() {
    let topic: ControlItem[] = [
        {
            id: 1,
            title: "Окислительно-восстановительные реакции",
            titles: [
                {
                    id: 1,
                    name: "Физические тела и вещества"
                }, {
                    id: 2,
                    name: "Чистые вещества и их смеси"
                }, {
                    id: 3,
                    name: "Разделение смесей. Методы очистки веществ"
                }],
            examples: [
                {
                    id: 1,
                    type: Controls.TEXT,
                    question: "Укажите формулу органического вещества:<br>",
                    answers: [
                        "Na<sub>2</sub>CO<sub>3</sub>;",
                        "NH<sub>4</sub>Cl;",
                        "HNO<sub>3</sub>;",
                        "C<sub>6</sub>H<sub>6</sub>"
                    ],
                    answer: "Органическое вещество определяется наличием углерода (С), значит вариант г.<br>"
                },
                {
                    id: 2,
                    type: Controls.TEXT,
                    question: "Укажите молекулярную формулу ароматического углеводорода:<br>",
                    answers: ["C<sub>6</sub>H<sub>6</sub>",
                        "C<sub>2</sub>H<sub>2</sub>",
                        "C<sub>2</sub>H<sub>4</sub>",
                        "C<sub>3</sub>H<sub>6</sub>"],
                    answer: "Молярная масса ищется по формуле .... , и какой-то ароматический углерод<br>"
                },
                {
                    id: 3,
                    type: Controls.TEXT,
                    question: "Этанол и уксусную (этановую) кислоту можно качественно различить при помощи реактива:<br>",
                    answers: [
                        "NaCl;",
                        "NaHCO<sub>3</sub>",
                        "K<sub>2</sub>SO<sub>4</sub>",
                        "CuSO<sub>4</sub>"],
                    answer: ""
                },
                {
                    id: 4,
                    type: Controls.TEXT,
                    question: "Массовая доля водорода в молекуле увеличивается в ряду соединений:<br>\n",
                    answers: [
                        "пропан, пропен, пропин",
                        "пропен, пропан, пропин",
                        "пропин, пропен, пропан",
                        "пропин, пропан, пропен"],
                    answer: "Помню только формулу спирта"
                },
                {
                    id: 9,
                    type: Controls.TABLE,
                    question: "Укажите пару, в которой приведены название вещества и структурная формула его изомера. Название вещества ",
                    answers: [
                        "а) 2-метилпропен;CH<sub>3</sub> — CH = CH — CH<sub>3</sub>",
                        "б) Этен;CH ≡ CH",
                        "в) Бутен-1;CCH<sub>3</sub> — CH = CH<sub>2</sub>",
                        "г) 2-метилпропан;../db/CH3_CH3--CH2.svg",
                    ],
                    answer: ""
                },
                {
                    id: 10,
                    type: Controls.IMG,
                    question: "Для нейтрализации хлороводорода, образовавшегося в результате хлорирования метана объемом 2,24 дм3 (н. у.), потребовался NaOH химическим количеством 0,1 моль. Укажите, какое количество атомов водорода в молекуле метана заместилось на галоген:",
                    answers: [
                        "./db/exercise.svg",
                    ],
                    answer: ""
                }
            ]
        }
    ]

    return (
        <main className={mainstyle.main}>
            {topic.map(t => <Control key={t.id}
                                     id={t.id}
                                     title={t.title}
                                     titles={t.titles}
                                     examples={t.examples}
            />)}
        </main>
    )
}