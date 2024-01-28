import mainStyle from "@/app/mainstyle.module.css";
import {DropDownList} from "@/components/DropDownList";
import {ListItem} from "@/interfaces/ListItem";
import {Cards} from "@/enum/Cards";

export const metadata = {
    title: 'Задания'
}

export default function TasksPage() {
    let tasks: ListItem[] = [
        {
            title: "Периодический закон и строение атомов",
            list: [{
                id: 1,
                name: `Какие соединения и простые вещества могут проявлять только окислительные свойства. Выберите такие вещества из предложенного перечня: NH<sub>3</sub>, CO, SO<sub>2</sub>, K<sub>2</sub>MnO<sub>4</sub>, Сl<sub>2</sub>, HNO<sub>2</sub>. Составьте уравнение электронного баланса, расставьте коэффициенты в уравнении реакции: HNO<sub>3</sub> + H<sub>2</sub>S = H<sub>2</sub>SO<sub>4</sub> + NO + H<sub>2</sub>O.`
            }, {
                id: 2,
                name: `Почему азотистая кислота может проявлять как окислительные, так ивосстановительные свойства? Составьте уравнения реакций HNO2: а) с бромной водой; б) с HI; в) сKMnO<sub>4</sub>.Какую функцию выполняет азотистая кислота в этих реакциях?`
            }, {
                id: 3,
                name: `Определите методом электронного баланса коэффициенты в уравнениях окислительно-восстановительных реакций:<br>Zn + HNO<sub>3</sub> = Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + H<sub>2</sub>O<br>Zn + H<sub>2</sub>SO<sub>4</sub>(конц) = ZnSO<sub>4</sub> + SO<sub>2</sub> + H<sub>2</sub>O`
            }]
        },
        {
            title: "Строение вещества",
            list: [{
                id: 1,
                name: 'Какие соединения и простые вещества могут проявлять только окислительные свойства. Выберите такие вещества из предложенного перечня: NH<sub>3</sub>, CO, SO<sub>2</sub>, K<sub>2</sub>MnO<sub>4</sub>, Сl<sub>2</sub>, HNO<sub>2</sub>. Составьте уравнение электронного баланса, расставьте коэффициенты в уравнении реакции: HNO<sub>3</sub> + H<sub>2</sub>S = H<sub>2</sub>SO<sub>4</sub> + NO + H<sub>2</sub>O.'
            }, {
                id: 2,
                name: 'Почему азотистая кислота может проявлять как окислительные, так ивосстановительные свойства? Составьте уравнения реакций HNO2: а) с бромной водой; б) с HI; в) сKMnO<sub>4</sub>.Какую функцию выполняет азотистая кислота в этих реакциях?'
            }, {
                id: 3,
                name: 'Определите методом электронного баланса коэффициенты в уравненияхокислительно-восстановительных реакций:<br>Zn + HNO<sub>3</sub> = Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + H<sub>2</sub>O<br>Zn + H<sub>2</sub>SO<sub>4</sub>(конц) = ZnSO<sub>4</sub> + SO<sub>2</sub> + H<sub>2</sub>O'
            }]
        },
        {
            title: "Окислительно-восстановительные реакции",
            list: [{
                id: 1,
                name: 'Какие соединения и простые вещества могут проявлять только окислительные свойства. Выберите такие вещества из предложенного перечня: NH<sub>3</sub>, CO, SO<sub>2</sub>, K<sub>2</sub>MnO<sub>4</sub>, Сl<sub>2</sub>, HNO<sub>2</sub>. Составьте уравнение электронного баланса, расставьте коэффициенты в уравнении реакции: HNO<sub>3</sub> + H<sub>2</sub>S = H<sub>2</sub>SO<sub>4</sub> + NO + H<sub>2</sub>O.'
            }, {
                id: 2,
                name: 'Почему азотистая кислота может проявлять как окислительные, так ивосстановительные свойства? Составьте уравнения реакций HNO2: а) с бромной водой; б) с HI; в) сKMnO<sub>4</sub>.Какую функцию выполняет азотистая кислота в этих реакциях?'
            }, {
                id: 3,
                name: 'Определите методом электронного баланса коэффициенты в уравненияхокислительно-восстановительных реакций:<br>Zn + HNO<sub>3</sub> = Zn(NO<sub>3</sub>)<sub>2</sub> + NH<sub>4</sub>NO<sub>3</sub> + H<sub>2</sub>O<br>Zn + H<sub>2</sub>SO<sub>4</sub>(конц) = ZnSO<sub>4</sub> + SO<sub>2</sub> + H<sub>2</sub>O'
            }]
        }
    ]

    return (
        <main className={mainStyle.main}>
            {tasks.map(t =>
                <DropDownList key={t.title} type={Cards.TASK} listItem={t}/>)}
        </main>
    )
}
