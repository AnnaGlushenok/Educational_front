import mainStyle from "../mainstyle.module.css";
import {TestCard} from "@/components/TestCard";

export const metadata = {
    title: 'Создать тест'
}

export default function CreateTest() {
    return (
        <main className={mainStyle.main}>
            <TestCard/>
        </main>
    )
}