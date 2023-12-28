import {useEffect, useRef, useState} from "react";
import s from "./style.module.css";
import {Excercise} from "@/components/Tasks/Excercise";
import {ExcerciseItem} from "@/interfaces/ExcerciseItem";
import Image from "next/image";

export default function Tasks(excercises: ExcerciseItem) {
    const [isActive, setIsActive] = useState(false)
    const block = useRef(null);
    const [blockHeight, setBlockHeight] = useState('0px');
    const toggle = () => setIsActive(!isActive)

    useEffect(() => {
        setBlockHeight(isActive ? `100px` : '0px');
    }, [isActive]);

    return (
        <div>
            <div className={`${s.title} ${s.title__title} ${isActive ? s.title__active : ''}`} onClick={toggle}>
                <Image width={40} height={40} className={s.title__arrow} src="./arrow.svg" alt="arrow"/>
                <p className={s.title__title}>{excercises.title}</p>
            </div>
            {isActive && (
                <div ref={block} className={s.container__block}>
                    {excercises.excercises.map(e =>
                        <Excercise key={e.name.at(0)} name={e.name}/>
                    )}
                </div>
            )}
        </div>
    )
}