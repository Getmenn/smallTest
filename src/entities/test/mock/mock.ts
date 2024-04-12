export type testTypes = 'multiSelect' | 'simpleSelect' | 'bigText' | 'shortText'

export interface ITestItem{
    id: number,
    title: string,
    type: testTypes,
    options?: string[],
}

export const dataTest: ITestItem[] = [
    {
        id: 1,
        title: 'example',
        type: 'shortText',
    },
    {
        id: 2,
        title: 'example',
        type: 'multiSelect',
        options: ['first', 'second', 'third', 'four'],
    },
    {
        id: 3,
        title: 'example',
        type: 'simpleSelect',
        options: ['first', 'second', 'third', 'four'],
    },
    {
        id: 4,
        title: 'example',
        type: 'shortText',
    },

];
