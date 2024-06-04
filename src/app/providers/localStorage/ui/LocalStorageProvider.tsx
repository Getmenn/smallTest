import { ReactNode, useEffect } from 'react';

import { testActions } from '@/entities/test';
import { answersSelector } from '@/entities/test/model/selectors/selectors';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { useAppSelector } from '@/shared/hooks/useAppSelector';

export const LocalStorageProvider = ({
    children,
}: { children: ReactNode }) => {
    const {
        setAnswer,
        setActiveTest,
        setActiveAnswer,
        setTimer,
        setTestStatus,
        setAllAnswers,
    } = useActions(testActions);
    const answers = useAppSelector(answersSelector);

    useEffect(() => {
        const testStatusLocal = localStorage.getItem('testStatus');

        if (testStatusLocal === 'progress') {
            const activeAnswer = localStorage.getItem('activeAnswer');
            const timer = localStorage.getItem('timer');
            const answersNew = localStorage.getItem('answers');
            const activeTest = localStorage.getItem('activeTest');

            setTestStatus('progress');
            answersNew && setAllAnswers(JSON.parse(answersNew));
            activeTest && setActiveTest(JSON.parse(activeTest) || 1);
            activeAnswer && setActiveAnswer(JSON.parse(activeAnswer) || '');

            if (!timer) {
                setTestStatus('finally');
            } else {
                setTimer(JSON.parse(timer));
            }
        }
    }, []);

    useEffect(() => {
        answers.length && localStorage.setItem('answers', JSON.stringify(answers));
    }, [answers]);

    return (
        <>
            {children}
        </>
    );
};
