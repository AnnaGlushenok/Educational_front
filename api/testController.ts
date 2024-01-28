import api from "../api"
import {useState} from "react";
import {Questions} from "@/enum/Questions";
import {TestItem} from "@/interfaces/TestItem";

export default class TestController {
    // public async get() {
    //     const [data, setData] = useState(null);
    //
    //     await api.get("/")
    //         .then(resp =>
    //             setData(resp.data)
    //         )
    //         .catch(err => console.log(err.message))
    //     return data;
    // }

    public static get() {
        let answers = {
            name: "Окислительно-Восстановительные реакции",
            questions: [
                {
                    id: 1,
                    question: "В какой роли выступают металлы в ОВР?",
                    type: Questions.RADIO,
                    answers: [
                        {id: 1, name: "Восстановителя"},
                        {id: 2, name: "Окислителя"},
                        {id: 3, name: "Не участвуют в ОВР"}
                    ],
                    correctAnswers: ["Восстановителя"]
                },
                {
                    id: 2,
                    question:
                        "Какой продукт реакции между перманганатом калия и бромоводородной кислотой может реагировать с сероводородом?",
                    type:
                    Questions.RADIO,
                    answers:
                        [
                            {id: 1, name: "Бром"},
                            {id: 2, name: "Бромид марганца (II)"},
                            {id: 3, name: "Диоксид марганца"},
                            {id: 4, name: "Гидроксид калия"}
                        ],
                    correctAnswers:
                        ["Бром"]
                },
                {
                    id: 3,
                    question:
                        "Сумма коэффициентов в уравнении реакции диоксида марганца с концентрированной соляной кислотой равна:",
                    type:
                    Questions.CHECKBOX,
                    answers:
                        [
                            {id: 1, name: "14"},
                            {id: 2, name: "10"},
                            {id: 3, name: "6"},
                            {id: 4, name: "7"},
                            {id: 5, name: "9"}
                        ],
                    correctAnswers:
                        ["9", "10"]
                },
            ]
        }
        return answers;
    }
}