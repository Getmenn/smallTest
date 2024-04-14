import { testActions } from '@/entities/test';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { Button } from '@/shared/ui';

import s from './RestartTest.module.scss';

export const RestartTest = () => {
    const { clearTest } = useActions(testActions);

    const handleRestart = () => {
        localStorage.clear();
        clearTest();
    };

    return (
        <div className={s.restartWrapper}>
            <Button onClick={handleRestart}>
                Рестарт
            </Button>
        </div>
    );
};
