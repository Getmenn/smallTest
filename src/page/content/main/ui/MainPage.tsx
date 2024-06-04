import { testStatusSelector } from '@/entities/test';
import { StartTest } from '@/features/startTest';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { EndTest } from '@/widget/endTest';
import { TestBlock } from '@/widget/testBlock';

import s from './MainPage.module.scss';

export const MainPage = () => {
    const testStatus = useAppSelector(testStatusSelector);

    return (
        <main className={s.mainPage}>
            {testStatus === 'pending' && <StartTest />}
            {testStatus === 'progress' && <TestBlock />}
            {testStatus === 'finally' && <EndTest />}
        </main>
    );
};
