import { memo, useEffect, useState } from 'react';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { OneSelect } from '@/shared/ui';

import { answersSelector } from '../../model/selectors/selectors';
import { testActions } from '../../model/slice/test';
import s from './SimpleSelect.module.scss';

interface IProps {
    items: string[];
    id: number;
}

export const SimpleSelect = ({ items, id }: IProps) => {
    const [activeSelect, setActiveSelect] = useState<string>('');
    const { setActiveAnswer } = useActions(testActions);

    const answers = useAppSelector(answersSelector);

    useEffect(() => {
        answers.forEach((el) => {
            if (el.id === id && typeof el.answer === 'string') {
                setActiveSelect(el.answer);
            }
        });
        return () => setActiveSelect('');
    }, [answers, id, items]);

    const handleAddActiveSelect = (num: string) => {
        const selected = activeSelect === num
            ? ''
            : num;

        setActiveSelect(selected);
        setActiveAnswer(selected);
        localStorage.setItem('activeAnswer', JSON.stringify(selected));
    };

    return (
        <div className={s.simpleSelect}>
            {
                items.map((el, i) => (
                    <OneSelect
                        key={i}
                        text={el}
                        id={String(i)}
                        active={activeSelect === String(i)}
                        setActiveSelect={handleAddActiveSelect}
                    />
                ))
            }
        </div>
    );
};
