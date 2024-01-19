"use client"
import React, {useState} from 'react';
import mainstyle from "../mainstyle.module.css";
import s from "./style.module.css";
import {ListItem} from "@/interfaces/ListItem";
import {Button} from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import {StringItem} from "@/interfaces/StringItem";
import {HTMLText} from "@/components/DropDownList/Excercise";

export default function Control() {
    let topic: ListItem = {
        title: "Окислительно-восстановительные реакции",
        list: [{
            id: 1,
            name: "Физические тела и вещества"
        }, {
            id: 2,
            name: "Чистые вещества и их смеси"
        }, {
            id: 3,
            name: "Разделение смесей. Методы очистки веществ"
        }]
    }
    //придумать что-то с картинками, таблицами
    let tasks: StringItem[] = [
        {
            id: 1,
            name: "Укажите формулу органического вещества:<br>\n" +
                "                        а) Na<sub>2</sub>CO<sub>3</sub>;<br>\n" +
                "                        б) NH<sub>4</sub>Cl;<br>\n" +
                "                        в) HNO<sub>3</sub>;<br>\n" +
                "                        г) C<sub>6</sub>H<sub>6</sub>.<br>\n" +
                "                        Органическое вещество определяется наличием углерода (С), значит вариант г.<br>"
        },
        {
            id: 2,
            name: "2. Укажите молекулярную формулу ароматического углеводорода:<br>\n" +
                "                        а) C<sub>6</sub>H<sub>6</sub>;<br>\n" +
                "                        б) C<sub>2</sub>H<sub>2</sub>;<br>\n" +
                "                        в) C<sub>2</sub>H<sub>4</sub>;<br>\n" +
                "                        г) C<sub>3</sub>H<sub>6</sub>.<br>\n" +
                "                        Молярная масса ищется по формуле .... , и какой-то ароматический углерод<br>"
        }, {
            id: 3,
            name: "3. Этанол и уксусную (этановую) кислоту можно качественно различить при помощи реактива:<br>\n" +
                "                        а) NaCl;<br>\n" +
                "                        б) NaHCO<sub>3</sub>;<br>\n" +
                "                        в) K<sub>2</sub>SO<sub>4</sub>;<br>\n" +
                "                        г) CuSO<sub>4</sub>.<br>"
        }, {
            id: 4,
            name: "4. Массовая доля водорода в молекуле увеличивается в ряду соединений:<br>\n" +
                "                        а) пропан, пропен, пропин;<br>\n" +
                "                        б) пропен, пропан, пропин;<br>\n" +
                "                        в) пропин, пропен, пропан;<br>\n" +
                "                        г) пропин, пропан, пропен.<br>\n" +
                "                        Помню только формулу спирта<br>"
        }, {
            id: 5,
            name: "5. Укажите пару, в которой приведены названия веществ, принадлежащих одному гомологическому\n" +
                "                        ряду:<br>\n" +
                "                        а) метановая кислота и метанол;<br>\n" +
                "                        б) бутан и пропен;<br>\n" +
                "                        в) этанол и этан;<br>\n" +
                "                        г) бутен и пропен.<br>"
        }, {
            id: 6,
            name: "6. Укажите название органического вещества, которое образуется при гидрировании этина:<br>\n" +
                "                        а) пропен;<br>\n" +
                "                        в) этан;<br>\n" +
                "                        б) бутан;<br>\n" +
                "                        г) пропан.<br>"
        }, {
            id: 7,
            name: "7. Укажите объем (дм3, н. у.) водорода, который выделится при взаимодействии 19,2 г метанола с\n" +
                "                        избытком натрия:<br>\n" +
                "                        а) 6,72;<br>\n" +
                "                        б) 10,08;<br>\n" +
                "                        в) 13,44;<br>\n" +
                "                        г) 22,4.<br>"
        }, {
            id: 8,
            name: "8. Укажите формулу углевода:<br>\n" +
                "                        а) C<sub>4</sub>H<sub>10</sub>;<br>\n" +
                "                        б) C<sub>6</sub>H<sub>6</sub>;<br>\n" +
                "                        в) (C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>;<br>\n" +
                "                        г) C<sub>3</sub>H<sub>8</sub>.<br>"
        }, {
            id: 9,
            name: "9. Укажите пару, в которой приведены название вещества и структурная формула его изомера.\n" +
                "                        Название вещества "
        }
    ]

    const [selectedItems, setSelectedItems] = useState<StringItem[]>([]);
    const handleCheckboxChange = (isChecked: boolean, id: number) => {
        setSelectedItems((selectedItems) =>
            isChecked ?
                [...selectedItems, {id, name: ""}] :
                selectedItems.filter(item => item.id !== id)
        )
    }

    const handleButtonClick = () => {
        console.log('Выбранные пункты:', selectedItems);
        // Здесь можно выполнять дополнительные действия с выбранными пунктами
    };

    return (
        <main className={mainstyle.main}>
            {
                topic.list.map(t =>
                    <CheckBox key={t.id} onCheckboxChange={handleCheckboxChange} topic={t}/>
                )
            }
            <Button name={"Повторить"} onClick={handleButtonClick}/>
            <div className={s.container__caption}>
                <p className={s.caption}>Пример решения варианта контрольной:</p>
            </div>
            {tasks.map(t => <HTMLText key={t.id} id={t.id} name={t.name}/>)}
        </main>
    )
}