import s from "./style.module.css";
import {HTMLText} from "@/components/DropDownList/Excercise";
import Image from "next/image";

export function Table({list}: { list: string[] }) {
    return (
        <div className={s.table_container}>
            <table className={s.table}>
                <tbody>
                {list.map(l =>
                    <tr key={l} className={s.row}>
                        {
                            l.split(";")
                                .map(p =>
                                    <td key={p} className={s.cell}>
                                        {
                                            p.match("^\\.\\.\\/db\\/[A-Za-z0-9_-]+\\.svg$") ?
                                                <Image width={100} height={100} src={"../db/CH3_CH3--CH2.svg"}
                                                       alt={""}/> ://alt!!!!
                                                <HTMLText text={p}/>
                                        }
                                    </td>
                                )
                        }
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}