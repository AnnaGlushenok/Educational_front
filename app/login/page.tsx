import mainStyle from "../mainstyle.module.css";
import s from "./style.module.css";
import {Login} from "@/components/Login";

export const metadata = {
    title: 'Войти'
}

export default function LoginPage() {
    return (
        <main className={mainStyle.main}>
            <div className={s.block}>
                <Login/>
            </div>
        </main>
    )
}
