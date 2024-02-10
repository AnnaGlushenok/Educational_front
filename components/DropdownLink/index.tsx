"use client"
import s from "./style.module.css"
import {TeacherNavItem} from "@/interfaces/TeacherNavItem";
import {useState} from "react";
import Link from "next/link";

export function DropdownLink(item: TeacherNavItem) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(0);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleSubMouseEnter = (type: number) => {
        setActiveSubmenu(type)
    };


    return (
        <div className={`${s.navbar__item} ${s.dropdown}`}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <a href="#" className={s.dropdown__title}>{item.title}</a>
            <div>
                {isDropdownOpen &&
                    item.classes.map(i =>
                        <div key={i.id} className={s.dropdown__item}
                             onMouseEnter={() => handleSubMouseEnter(i.id)}>
                            <Link href="#">{i.name}</Link>
                            {activeSubmenu === i.id &&
                                <div className={`${s.dropdown__subitem} ${s.dropdownHidden}`}>
                                    <div className={`${s.dropdown__item} ${s.item}`}>
                                        <Link href={`createLesson?subject_id=${i.id}&class_id=${i.id}`}>Уроки</Link>
                                    </div>
                                    <div className={`${s.dropdown__item} ${s.item}`}>
                                        <Link href={`createTask?subject_id=${i.id}&class_id=${i.id}`}>Задания</Link>
                                    </div>
                                    <div className={`${s.dropdown__item} ${s.item}`}>
                                        <Link href={`createTest?subject_id=${i.id}&class_id=${i.id}`}>Тест</Link>
                                    </div>
                                    <div className={`${s.dropdown__item} ${s.item}`}>
                                        <Link
                                            href={`createControl?subject_id=${i.id}&class_id=${i.id}`}>Контрольные</Link>
                                    </div>
                                </div>}
                        </div>
                    )}
            </div>
        </div>
    )
}