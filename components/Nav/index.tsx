import {NavItems} from "@/interfaces/NavItems";
import s from "./style.module.css";
import Link from "next/link";


export function Nav({items, btn}: { items: NavItems[], btn: NavItems }) {
    return (
        <nav className={s.navbar}>
            <div className={s.wrapper}>
                <div className={`${s.items}`}>
                    {items.map(i => <div className={s.item} key={i.path}><Link target="_blank"
                                                                               href={i.path}>{i.title}</Link></div>)}
                </div>
                <Link href={btn.path} className={s.enterBtn}>{btn.title}</Link>
            </div>
        </nav>
    );
}