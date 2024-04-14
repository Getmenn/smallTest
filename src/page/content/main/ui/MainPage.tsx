import { testStatusSelector } from '@/entities/test';
import { RestartTest } from '@/features/restartTest';
import { StartTest } from '@/features/startTest';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { TestBlock } from '@/widget/testBlock';

import s from './MainPage.module.scss';

export const MainPage = () => {
    const testStatus = useAppSelector(testStatusSelector);

    return (
        <div className={s.mainPage}>
            {testStatus === 'pending' && <StartTest />}
            {testStatus === 'progress' && <TestBlock />}
            {testStatus === 'finally' && <RestartTest />}
        </div>
    );
};
