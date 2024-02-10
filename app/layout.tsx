import React from "react";
import {Roboto} from 'next/font/google'
import "./globals.css";
import {NavItems} from "@/interfaces/NavItems";
import {Nav} from "@/components/Nav";
import {TeacherNav} from "@/components/Nav/TeacherNav";
import {TeacherNavItem} from "@/interfaces/TeacherNavItem";

const roboto = Roboto({subsets: ['latin', "cyrillic"], weight: '400'});

export const metadata = {
    title: 'Главная',
    description: 'Химия Биология',
    icons: {
        icon: ["./db/biology_logo.svg"],
        shortcut: ["./db/biology_logo.svg"]
    }
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    let links: NavItems[] = [
        {title: "Главная", path: "/"},
        {title: "Об авторе", path: "/about"},
        {title: "Задать вопрос", path: "/"}
    ]
    let btn = {title: "Войти", path: "/login"};
    let titles: TeacherNavItem[] = [
        {
            id: 1,
            title: "Химия",
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
        },
        {
            id: 2,
            title: "Биология",
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
        }
    ]
    return (
        <html lang="en">
        <body className={roboto.className}>
        {/*<Nav items={links} btn={btn}/>*/}
        <TeacherNav items={titles} btn={btn}/>
        {children}
        </body>
        </html>
    )
}
