import { ITestItem, MultiSelect, ShortText, SimpleSelect, testTypes } from '@/entities/test';

import s from './QuestionBlock.module.scss';

interface IProps {
    item: ITestItem
}

interface IGetTypeBlock {
    type: testTypes,
    id: number;
    items?: string[];
}

const getTypeBlock = ({ type, id, items }: IGetTypeBlock) => {
    switch (type) {
        case 'bigText':
            return <ShortText />;
        case 'shortText':
            return <ShortText />;
        case 'simpleSelect':
            return <SimpleSelect id={id} items={items || []} />;
        case 'multiSelect':
            return <MultiSelect id={id} items={items || []} />;
        default:
            break;
    }
};

export const QuestionBlock = ({ item }: IProps) => {
    return (
        <div className={s.testWrapper}>
            <h3 className={s.question}>{item.title}</h3>
            {getTypeBlock({ type: item.type, id: item.id, items: item.options })}
            {/* <button type="button">Ответить</button> */}
        </div>
    );
};
