export type testTypes = 'multiSelect' | 'simpleSelect' | 'bigText' | 'shortText'

export interface ITestItem{
    id: number,
    title: string,
    type: testTypes,
    options?: string[],
}

export type typeAnswers = string | string[]

export interface IAnswers{
    id: number
    answer: typeAnswers;
}
export type typeTestStatus = 'pending' | 'progress' | 'finally'

export interface TestSchema {
    activeTest: number;
    activeAnswer: typeAnswers;
    answers: IAnswers[];
    questions: ITestItem[];
    testStatus: typeTestStatus;
    timer: null | number;
}
