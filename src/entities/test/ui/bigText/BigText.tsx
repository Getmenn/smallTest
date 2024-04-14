import { memo, useEffect, useState } from 'react';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';

import { answersSelector } from '../../model/selectors/selectors';
import { testActions } from '../../model/slice/test';
import s from './BigText.module.scss';

export const BigText = ({ id }: {id: number}) => {
    const [debouncedValue, value, setValue] = useDebounce<string>('', 500);
    const { setActiveAnswer } = useActions(testActions);

    const answers = useAppSelector(answersSelector);

    const handleChange = (value: string) => {
        setValue(value);
    };

    useEffect(() => {
        answers.forEach((el) => {
            if (el.id === id && typeof el.answer === 'string') {
                setValue(el.answer);
            }
        });
    }, [answers]);

    useEffect(() => {
        setActiveAnswer(debouncedValue);
        localStorage.setItem('activeAnswer', JSON.stringify(debouncedValue));
    }, [debouncedValue]);

    return (
        <textarea
            className={s.bigText}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};
