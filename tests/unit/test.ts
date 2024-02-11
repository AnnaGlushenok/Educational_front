import {afterEach, describe, expect, test} from '@jest/globals';
// import {addMark, mark} from "@/components/Test/index";
import {StringItem} from "@/interfaces/StringItem";

let mark = 0;

export function addMark(answers: StringItem[], correctAnswers: string[], countAnswers: number) {
    if (answers.length == 1 && correctAnswers.length == 1) {
        if (correctAnswers.includes(answers[0].name))
            mark += 1
    } else {
        let countCorrectAnswers = 0, countWrongAnswers = 0;
        for (const answer of answers)
            if (correctAnswers.includes(answer.name))
                countCorrectAnswers += 1
            else
                countWrongAnswers += 1

        if (countCorrectAnswers != 0) {
            let a = countWrongAnswers / countAnswers;
            mark += countCorrectAnswers / correctAnswers.length - countWrongAnswers / countAnswers;
        }
    }
}

afterEach(() => {
    mark = 0
})

describe("positive tests", () => {
    test("3 questions, all with 1 correct answer", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"}
                    ],
                    correctAnswers: ["Восстановителя"],
                    countAnswers: 5
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"}
                        ],
                    correctAnswers: ["Бром"],
                    countAnswers: 4
                },
                {
                    answers:
                        [
                            {id: 5, name: "9"}
                        ],
                    correctAnswers: ["9"],
                    countAnswers: 5
                }],
            mark: 3
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
    test("4 questions, 2 questions with several correct answers", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"},
                        {id: 2, name: "Окислителя"}
                    ],
                    correctAnswers: ["Восстановителя", "Окислителя"],
                    countAnswers: 4
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"},
                            {id: 2, name: "Бромид марганца (II)"},
                        ],
                    correctAnswers: ["Бром", "Бромид марганца (II)"],
                    countAnswers: 3
                },
                {
                    answers: [
                        {id: 5, name: "9"}
                    ],
                    correctAnswers: ["9"],
                    countAnswers: 5
                },
                {
                    answers: [
                        {id: 5, name: "10"}
                    ],
                    correctAnswers: ["10"],
                    countAnswers: 5
                }],
            mark: 4
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
    test("5 questions, all with several correct answers", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"},
                        {id: 2, name: "Окислителя"}
                    ],
                    correctAnswers: ["Восстановителя", "Окислителя"],
                    countAnswers: 5
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"},
                            {id: 2, name: "Бромид марганца (II)"},
                            {id: 3, name: "Диоксид марганца"},
                        ],
                    correctAnswers: ["Бром", "Бромид марганца (II)", "Диоксид марганца"],
                    countAnswers: 3
                },
                {
                    answers: [
                        {id: 5, name: "9"},
                        {id: 2, name: "10"},
                        {id: 3, name: "6"},
                        {id: 4, name: "3"},
                    ],
                    correctAnswers: ["10", "9", "3", "6"],
                    countAnswers: 4
                },
                {
                    answers: [
                        {id: 5, name: "10"},
                        {id: 2, name: "7"},
                        {id: 2, name: "2"},
                        {id: 3, name: "6"},
                        {id: 3, name: "8"},
                    ],
                    correctAnswers: ["10", "2", "7", "6", "8"],
                    countAnswers: 5
                },
                {
                    answers: [
                        {id: 5, name: "9"},
                        {id: 2, name: "10"},
                        {id: 3, name: "6"},
                        {id: 4, name: "3"},
                        {id: 4, name: "1"}
                    ],
                    correctAnswers: ["10", "9", "1", "3", "6"],
                    countAnswers: 5
                },],
            mark: 5
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
});

describe("negative tests", () => {
    test("3 questions, all with uncorrected answer", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"}
                    ],
                    correctAnswers: ["1"],
                    countAnswers: 0
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"}
                        ],
                    correctAnswers: ["0"],
                    countAnswers: 0
                },
                {
                    answers:
                        [
                            {id: 5, name: "9"}
                        ],
                    correctAnswers: ["7"],
                    countAnswers: 0
                }],
            mark: 0
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
    test("4 questions, 2 questions with several uncorrected answers", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"},
                        {id: 2, name: "Окислителя"}
                    ],
                    correctAnswers: ["0", "1"],
                    countAnswers: 5
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"},
                            {id: 2, name: "Бромид марганца (II)"},
                        ],
                    correctAnswers: ["1", "2"],
                    countAnswers: 4
                },
                {
                    answers: [
                        {id: 5, name: "9"}
                    ],
                    correctAnswers: ["1"],
                    countAnswers: 5
                },
                {
                    answers: [
                        {id: 5, name: "10"}
                    ],
                    correctAnswers: ["0"],
                    countAnswers: 5
                }],
            mark: 0
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
    test("4 questions, all with several uncorrected answers", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"},
                        {id: 2, name: "Окислителя"}
                    ],
                    correctAnswers: ["0", "1"],
                    countAnswers: 3
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"},
                            {id: 2, name: "Бромид марганца (II)"},
                            {id: 3, name: "Диоксид марганца"},
                        ],
                    correctAnswers: ["0", "1", "2"],
                    countAnswers: 3
                },
                {
                    answers: [
                        {id: 5, name: "9"},
                        {id: 2, name: "10"},
                        {id: 3, name: "6"},
                        {id: 4, name: "3"},
                    ],
                    correctAnswers: ["0", "1", "2", "5"],
                    countAnswers: 4
                },
                {
                    answers: [
                        {id: 5, name: "10"},
                        {id: 2, name: "7"},
                        {id: 2, name: "2"},
                        {id: 3, name: "6"},
                        {id: 3, name: "8"},
                    ],
                    correctAnswers: ["0", "1", "5", "3", "4"],
                    countAnswers: 5
                }],
            mark: 0
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
});

describe("so-so tests", () => {
    test("4 questions, all with 2 correct answer", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"}
                    ],
                    correctAnswers: ["Восстановителя"],
                    countAnswers: 4
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"}
                        ],
                    correctAnswers: ["Бром"],
                    countAnswers: 4
                },
                {
                    answers:
                        [
                            {id: 5, name: "9"}
                        ],
                    correctAnswers: ["5"],
                    countAnswers: 4
                },
                {
                    answers:
                        [
                            {id: 2, name: "2"},
                        ],
                    correctAnswers: ["3"],
                    countAnswers: 4
                }],
            mark: 2
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
    test("4 questions, all questions with several answers, 2 questions with partially correct", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"},
                        {id: 2, name: "Окислителя"}
                    ],
                    correctAnswers: ["Восстановителя", "Окислителя"],
                    countAnswers: 4
                },
                {
                    answers:
                        [
                            {id: 1, name: "Бром"},
                            {id: 2, name: "Бромид марганца (II)"},
                        ],
                    correctAnswers: ["Бром", "Бромид марганца (II)"],
                    countAnswers: 5
                },
                {
                    answers: [
                        {id: 5, name: "1"} //0.5
                    ],
                    correctAnswers: ["1", "2"],
                    countAnswers: 5
                },//2.5
                {
                    answers: [
                        {id: 1, name: "1"},
                        {id: 2, name: "2"},
                        {id: 3, name: "3"}
                    ],
                    correctAnswers: ["1", "2"],//0.75
                    countAnswers: 4
                }],//
            mark: 3.25
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBe(test.mark)
    })
    test("5 questions, all with several correct answers, all with partially correct", () => {
        let test = {
            questions: [
                {
                    answers: [
                        {id: 1, name: "Восстановителя"},
                        {id: 2, name: "Окислителя"},
                        {id: 3, name: "3"}
                    ],
                    correctAnswers: ["Восстановителя", "Окислителя"],
                    countAnswers: 5
                },//0.8
                {
                    answers:
                        [
                            {id: 1, name: "Бром"},
                            {id: 2, name: "Бромид марганца (II)"},
                        ],
                    correctAnswers: ["Бром", "Бромид марганца (II)", "Диоксид марганца"],
                    countAnswers: 5
                },//0.6
                {
                    answers: [
                        {id: 5, name: "9"},
                        {id: 2, name: "10"},
                        {id: 1, name: "3"},
                        {id: 1, name: "1"},
                        {id: 1, name: "0"}
                    ],
                    correctAnswers: ["10", "9", "3", "6"],
                    countAnswers: 5
                },//0.35
                {
                    answers: [
                        {id: 5, name: "10"},
                        {id: 2, name: "7"}
                    ],
                    correctAnswers: ["10", "2"],
                    countAnswers: 4
                },//0.25
                {
                    answers: [
                        {id: 5, name: "9"},
                        {id: 2, name: "10"},
                        {id: 4, name: "3"},
                    ],
                    correctAnswers: ["10", "9", "8"],
                    countAnswers: 4
                }],//0.41
            mark: 2.483
        }
        for (const el of test.questions)
            addMark(el.answers, el.correctAnswers, el.countAnswers)

        expect(mark).toBeCloseTo(test.mark)
    })
});
