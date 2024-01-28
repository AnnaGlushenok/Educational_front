"use client"

import s from "./style.module.css"
import {TaskCardItem} from "@/interfaces/TaskCardItem";
import Image from "next/image";

export function TaskCard(taskCardItem: TaskCardItem) {//target="_blank"
    return (
        <a className={s.block} href={taskCardItem.path}>
            <p className={s.caption}>{taskCardItem.title}</p>
            <Image
                width={300}
                height={300}
                src={taskCardItem.image}
                alt={taskCardItem.title}
                className={s.img}/>
        </a>
    )
}