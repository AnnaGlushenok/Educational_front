'use client'
import s from "./style.module.css";
import {useEffect, useState} from "react";
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
        img: "./chemistry_logo.svg",
        imgAlt: "картинка",
        classes: [{
            id: 1,
            name: "6"
        }, {
            id: 2,
            name: "7"
        }, {
            id: 3,
            name: "8"
        }, {
            id: 4,
            name: "9"
        }]
    },
        {
            id: 2,
            title: "Биология",
            img: "./biology_logo.svg",
            imgAlt: "картинка",
            classes: [{
                id: 1,
                name: "6"
            }, {
                id: 2,
                name: "7"
            }, {
                id: 3,
                name: "8"
            }, {
                id: 4,
                name: "10"
            }]
        }]

    return (
        <div className={s.blocks}>
            {/*{cards.map(c =>*/}
            {/*    <SubjectBlock id={c.id} title={c.title} img={c.img} imgAlt={c.imgAlt}*/}
            {/*                  classes={c.classes}/>)}*/}
        </div>
    );
}