type typeAnswers = string | string[]

export interface IAnswers{
    id: number
    answer: typeAnswers
}

export interface TestSchema {
    activeTest: number;
    answers: IAnswers[]
}
