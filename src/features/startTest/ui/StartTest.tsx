import { useCallback, useState } from 'react';

import { testActions } from '@/entities/test';
import { useActions } from '@/shared/hooks/useAction/useAction';
import { Button, Input } from '@/shared/ui';

import s from './StartTest.module.scss';

export const StartTest = () => {
    const [checked, setCheked] = useState(true);
    const [time, setTime] = useState<string>('');

    const { setTestStatus, setTimer } = useActions(testActions);

    const handleActiveTimer = useCallback((status: boolean) => {
        setTimer(null);
        setCheked(status);
    }, []);

    const handleSetTimer = useCallback((newTime: string) => {
        setTime(newTime);
        setTimer(+newTime * 60 * 1000);
    }, []);

    const handleStartTest = useCallback(() => {
        if (+time <= 0 && checked) {
            setTestStatus('finally');
        } else {
            setTestStatus('progress');
            localStorage.setItem('testStatus', 'progress');
        }
    }, [time, checked]);

    return (
        <section className={s.startTest}>
            <div className={s.checkboxWrapper}>
                <input
                    type="checkbox"
                    name="scales"
                    className={s.checkbox}
                    checked={checked}
                    onChange={(e) => handleActiveTimer(e.target.checked)}
                />
                <label htmlFor="scales">Использовать таймер</label>
            </div>
            <Input
                className={s.inputTimer}
                placeholder="Колл-во минут на тест"
                type="number"
                value={time}
                onChange={(e) => handleSetTimer(e.target.value)}
                disabled={!checked}
            />
            <Button onClick={handleStartTest}>Начать тест</Button>
        </section>
    );
};
