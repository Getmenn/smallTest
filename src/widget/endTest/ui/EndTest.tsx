import { RestartTest } from '@/features/restartTest';

import s from './EndTest.module.scss';

export const EndTest = () => {
    return (
        <>
            <h1 className={s.title}>
                Тест окончен
            </h1>
            <RestartTest />
        </>
    );
};
