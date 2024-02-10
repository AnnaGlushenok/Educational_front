import mainStyle from "@/app/mainstyle.module.css";
import {TeacherLesson} from "@/components/TeacherLesson";

export const metadata = {
    title: 'Создать урок'
}

export default function CreateLesson() {
    return (
        <main className={mainStyle.main}>
            <TeacherLesson/>
        </main>
    );
}