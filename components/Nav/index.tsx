import {NavItems} from "@/interfaces/NavItems";
import s from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/menu_logo.svg"

export function Nav({items, btn}: {
    items: NavItems[],
    btn: NavItems
}) {// target="_blank"
    return (
        <nav className={s.navbar}>
            <div className={s.wrapper}>
                <div className={`${s.items}`}>
                    <Image
                        key={"menu"}
                        width={30}
                        height={30}
                        className={s.menu}
                        src={img}
                        alt={"menu_logo"}/>
                    {items.map(i =>
                        <div className={s.item} key={i.title}>
                            <Link key={i.title} href={i.path}>{i.title}</Link>
                        </div>)
                    }
                </div>
                <Link key={btn.title} href={btn.path} className={s.enterBtn}>{btn.title}</Link>
            </div>
        </nav>
    );
}