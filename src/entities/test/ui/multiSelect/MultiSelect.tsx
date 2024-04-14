import { memo, useEffect, useState } from 'react';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { OneSelect } from '@/shared/ui';

import { activeTestSelector, answersSelector } from '../../model/selectors/selectors';
import { testActions } from '../../model/slice/test';
import s from './MultiSelect.module.scss';

interface IProps {
    items: string[];
    id: number;
}

export const MultiSelect = ({ items, id }: IProps) => {
    const [activeSelect, setActiveSelect] = useState<string[]>([]);
    const { setActiveAnswer } = useActions(testActions);

    const answers = useAppSelector(answersSelector);
    const activeTest = useAppSelector(activeTestSelector);

    useEffect(() => {
        answers.forEach((el) => {
            if (el.id === id && Array.isArray(el.answer)) {
                setActiveSelect(el.answer);
            }
        });
        return () => setActiveSelect([]);
    }, [answers, id, items, activeTest]);

    const handleAddActiveSelect = (num: string) => {
        const selected = activeSelect?.includes(num)
            ? activeSelect.filter((el) => el !== num)
            : [...activeSelect, num];

        setActiveSelect(selected);
        setActiveAnswer(selected);
        localStorage.setItem('activeAnswer', JSON.stringify(selected));
    };

    return (
        <div className={s.multiSelect}>
            {
                items.map((el, i) => (
                    <OneSelect
                        key={i}
                        text={el}
                        id={String(i)}
                        active={activeSelect ? activeSelect.includes(String(i)) : false}
                        setActiveSelect={handleAddActiveSelect}
                    />
                ))
            }
        </div>
    );
};
