import { useCallback, useEffect } from 'react';

import {
    activeAnswerSelector,
    activeTestSelector,
    ProgressBar,
    testActions,
    timerSelector,
} from '@/entities/test';
import { dataTest } from '@/entities/test/mock/mock';
import { RestartTest } from '@/features/restartTest';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Timer } from '@/shared/ui';
import { Button } from '@/shared/ui/button/Button';

import { QuestionBlock } from '../questionBlock/QuestionBlock';
import s from './TestBlock.module.scss';

export const TestBlock = () => {
    const {
        setQuestions,
        setAnswer,
        setActiveTest,
        setActiveAnswer,
        setTestStatus,
        setTimer,
    } = useActions(testActions);

    const activeTest = useAppSelector(activeTestSelector);
    const activeAnswer = useAppSelector(activeAnswerSelector);
    const timer = useAppSelector(timerSelector);

    useEffect(() => {
        setQuestions(dataTest);
    }, []);

    const getQuestion = useCallback(() => {
        const element = dataTest.find((el) => el.id === activeTest);
        return element
            ? <QuestionBlock item={element} />
            : null;
    }, [activeTest]);

    const handleResponse = useCallback(() => {
        setAnswer({ id: activeTest, answer: activeAnswer });
        setActiveTest(activeTest + 1);
        localStorage.setItem('activeTest', JSON.stringify(activeTest + 1));
        setActiveAnswer('');
        localStorage.setItem('activeAnswer', '');
    }, [setAnswer, activeTest, activeAnswer, setActiveTest]);

    const handleEndTimer = useCallback(() => {
        setTestStatus('finally');
        localStorage.setItem('testStatus', 'finally');
    }, [setTestStatus]);

    const handleSetTimer = useCallback((num: number) => {
        localStorage.setItem('timer', JSON.stringify(num));
        setTimer(num);
    }, []);

    return (
        <section className={s.testBlock}>
            <div className={s.header}>
                <h1 className={s.title}>Тестирование</h1>
                {timer && <Timer time={timer} everyFunction={handleSetTimer} endFunction={handleEndTimer} />}
            </div>
            <div className={s.testWrapper}>
                <ProgressBar />
                {getQuestion()}
                <div className={s.buttonWrapper}>
                    <Button onClick={handleResponse} disabled={!activeAnswer}>
                        Ответить
                    </Button>
                    <RestartTest />
                </div>
            </div>
        </section>
    );
};
