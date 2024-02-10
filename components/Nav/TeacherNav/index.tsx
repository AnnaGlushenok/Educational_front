"use client"
import {NavItems} from "@/interfaces/NavItems";
import s from "../style.module.css";
import Link from "next/link";
import {DropdownLink} from "@/components/DropdownLink";
import {TeacherNavItem} from "@/interfaces/TeacherNavItem";

export function TeacherNav({items, btn}: { items: TeacherNavItem[], btn: NavItems }) {
    return (
        <nav className={s.navbar}>
            <div className={s.wrapper}>
                {items.map(i => <DropdownLink key={i.id} id={i.id} title={i.title} classes={i.classes}/>)}
                <Link key={btn.title} href={btn.path} className={s.enterBtn}>{btn.title}</Link>
            </div>
        </nav>
    )
}