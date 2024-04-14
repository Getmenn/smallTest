import { memo, useCallback, useMemo } from 'react';

import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

import { activeTestSelector, answersSelector, questionsSelector } from '../../model/selectors/selectors';
import { testActions } from '../../model/slice/test';
import s from './ProgressBar.module.scss';

interface IProgressMarker{
    id: number;
    ready: boolean;
    active: boolean
    setActive: (num: number) => void;
}

const ProgressMarker = memo(({ id, ready, active, setActive }: IProgressMarker) => {
    return (
        <li
            className={`${s.marker} ${ready ? s.ready : ''} ${active ? s.active : ''}`}
            onClick={() => setActive(id)}
        />
    );
});

export const ProgressBar = () => {
    const answers = useAppSelector(answersSelector);
    const questions = useAppSelector(questionsSelector);
    const activeTest = useAppSelector(activeTestSelector);
    const { setActiveTest, setActiveAnswer } = useActions(testActions);

    const questionsIdArr = useMemo(() => questions.map((el) => el.id), [questions]);
    const answersIdArr = useMemo(() => answers.map((el) => el.id), [answers]);

    const handleActiveTest = useCallback((num: number) => {
        setActiveTest(num);
        setActiveAnswer('');
        localStorage.setItem('activeTest', JSON.stringify(num));
        localStorage.setItem('activeAnswer', '');
    }, []);

    return (
        <ul className={s.progressBar}>
            {questionsIdArr.map((el, i) => (
                <ProgressMarker
                    key={i}
                    id={el}
                    ready={answersIdArr.includes(el)}
                    active={activeTest === el}
                    setActive={handleActiveTest}
                />
            ))}
        </ul>
    );
};
