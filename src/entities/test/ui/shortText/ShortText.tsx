import { useEffect } from 'react';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';
import { Input } from '@/shared/ui';

import { answersSelector } from '../../model/selectors/selectors';
import { testActions } from '../../model/slice/test';

export const ShortText = ({ id }: {id: number}) => {
    const [debouncedValue, value, setValue] = useDebounce<string>('', 500);
    const { setActiveAnswer } = useActions(testActions);

    const answers = useAppSelector(answersSelector);

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
        <Input value={value} handleChange={setValue} />
    );
};
