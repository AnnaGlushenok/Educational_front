import React from "react";
import {Roboto} from 'next/font/google'
import "./globals.css";
import {NavItems} from "@/interfaces/NavItems";
import {Nav} from "@/components/Nav";

const roboto = Roboto({subsets: ['latin', "cyrillic"], weight: '400'});

export const metadata = {
    title: 'Главная',
    description: 'Химия Биология',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    let links: NavItems[] = [
        {title: "Главная", path: "/"},
        {title: "Об авторе", path: "/"},
        {title: "Задать вопрос", path: "/"}
    ]
    let btn = {title: "Войти", path: "/"};
    return (
        <html lang="en">
        <body className={roboto.className}>
        <Nav items={links} btn={btn}/>
        {children}
        </body>
        </html>
    )
}
