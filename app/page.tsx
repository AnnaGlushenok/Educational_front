'use client'
import s from "./style.module.css";
import {useState} from "react";
import {SubjectBlock} from "@/components/SubjectBlock";
// import api from "../api.js"

export default function Page() {
    let [data, setData] = useState(null);
    // useEffect(() => {
    //     api.get("/subjects")
    //         .then(res => setData(res.data));
    // });

    let cards = [{
        id: 1,
        title: "Химия",
        img: "./db/chemistry_logo.svg",
        imgAlt: "картинка",
        classes: [{
            id: 1,
            name: "6",
            subjectId: 1
        }, {
            id: 2,
            name: "7",
            subjectId: 1
        }, {
            id: 3,
            name: "8",
            subjectId: 1
        }, {
            id: 4,
            name: "9",
            subjectId: 1
        }]
    },
        {
            id: 2,
            title: "Биология",
            img: "./db/biology_logo.svg",
            imgAlt: "картинка",
            classes: [{
                id: 1,
                name: "6",
                subjectId: 2
            }, {
                id: 2,
                name: "7",
                subjectId: 2
            }, {
                id: 3,
                name: "8",
                subjectId: 2
            }, {
                id: 4,
                name: "10",
                subjectId: 2
            }]
        }]

    return (
        <div className={s.blocks}>
            {cards.map(c =>
                <SubjectBlock
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    img={c.img}
                    imgAlt={c.imgAlt}
                    classes={c.classes}/>)}
        </div>
    );
}