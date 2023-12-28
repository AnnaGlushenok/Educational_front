"use client"
import s from "./style.module.css";
import Tasks from "@/components/Tasks";
import {ExcerciseItem} from "@/interfaces/ExcerciseItem";

export default function TasksPage() {
    let tasks: ExcerciseItem[] = [
        {
            title: "Периодический закон и строение атомов",
            excercises: [{
                name: `1. Какие соединения и простые вещества могут проявлять только окислительные свойства. Выберите такие вещества из предложенного перечня: NH<sub>3</sub>, CO, SO<sub>2</sub>, K<sub>2</sub>MnO<sub>4</sub>, Сl<sub>2</sub>, HNO<sub>2</sub>. Составьте уравнение электронного баланса, расставьте коэффициенты в уравнении реакции: HNO<sub>3</sub> + H<sub>2</sub>S = H<sub>2</sub>SO<sub>4</sub> + NO + H<sub>2</sub>O.`
            }, {
                name: `2. Почему азотистая кислота может проявлять как окислительные, так ивосстановительные свойства? Составьте уравнения реакций HNO2: а) с бромной водой; б) с HI; в) сKMnO<sub>4</sub>.Какую функцию выполняет азотистая кислота в этих реакциях?`
            }, {
                name: `3. Определите методом электронного баланса коэффициенты в уравнениях окислительно-восстановительных реакций:<br>Zn + HNO<sub>3</sub> = Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + H<sub>2</sub>O<br>Zn + H<sub>2</sub>SO<sub>4</sub>(конц) = ZnSO<sub>4</sub> + SO<sub>2</sub> + H<sub>2</sub>O`
            }]
        },
        {
            title: "Строение вещества",
            excercises: [{
                name: '4. Какие соединения и простые вещества могут проявлять только окислительные свойства. Выберите такие вещества из предложенного перечня: NH<sub>3</sub>, CO, SO<sub>2</sub>, K<sub>2</sub>MnO<sub>4</sub>, Сl<sub>2</sub>, HNO<sub>2</sub>. Составьте уравнение электронного баланса, расставьте коэффициенты в уравнении реакции: HNO<sub>3</sub> + H<sub>2</sub>S = H<sub>2</sub>SO<sub>4</sub> + NO + H<sub>2</sub>O.'
            }, {
                name: '5. Почему азотистая кислота может проявлять как окислительные, так ивосстановительные свойства? Составьте уравнения реакций HNO2: а) с бромной водой; б) с HI; в) сKMnO<sub>4</sub>.Какую функцию выполняет азотистая кислота в этих реакциях?'
            }, {
                name: '6. Определите методом электронного баланса коэффициенты в уравненияхокислительно-восстановительных реакций:<br>Zn + HNO<sub>3</sub> = Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + H<sub>2</sub>O<br>Zn + H<sub>2</sub>SO<sub>4</sub>(конц) = ZnSO<sub>4</sub> + SO<sub>2</sub> + H<sub>2</sub>O'
            }]
        },
        {
            title: "Окислительно-восстановительные реакции",
            excercises: [{
                name: '7. Какие соединения и простые вещества могут проявлять только окислительные свойства. Выберите такие вещества из предложенного перечня: NH<sub>3</sub>, CO, SO<sub>2</sub>, K<sub>2</sub>MnO<sub>4</sub>, Сl<sub>2</sub>, HNO<sub>2</sub>. Составьте уравнение электронного баланса, расставьте коэффициенты в уравнении реакции: HNO<sub>3</sub> + H<sub>2</sub>S = H<sub>2</sub>SO<sub>4</sub> + NO + H<sub>2</sub>O.'
            }, {
                name: '8. Почему азотистая кислота может проявлять как окислительные, так ивосстановительные свойства? Составьте уравнения реакций HNO2: а) с бромной водой; б) с HI; в) сKMnO<sub>4</sub>.Какую функцию выполняет азотистая кислота в этих реакциях?'
            }, {
                name: '9. Определите методом электронного баланса коэффициенты в уравненияхокислительно-восстановительных реакций:<br>Zn + HNO<sub>3</sub> = Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + H<sub>2</sub>O<br>Zn + H<sub>2</sub>SO<sub>4</sub>(конц) = ZnSO<sub>4</sub> + SO<sub>2</sub> + H<sub>2</sub>O'
            }]
        }
    ]
    return (
        <main className={s.main}>
            {tasks.map(t => <Tasks key={t.title.at(1)} excercises={t.excercises} title={t.title}/>)}
        </main>
    )
}