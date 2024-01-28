import mainStyle from "@/app/mainstyle.module.css";
import {Test} from "@/components/Test";

export const metadata = {
    title: 'Тест'
}

export default function TestPage() {
    return (
        <main className={mainStyle.main}>
            <Test/>
        </main>
    )
}