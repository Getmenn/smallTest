import { useCallback, useEffect, useState } from 'react';

import s from './Timer.module.scss';

interface IProps{
    endFunction: () => void;
    everyFunction: (num: number) => void;
    time: number;
}

export const Timer = ({ time, everyFunction, endFunction }: IProps) => {
    const [milliseconds, setMilliseconds] = useState(time);

    useEffect(() => {
        if (milliseconds === 1000) {
            everyFunction(0);
            endFunction();
        }
    }, [milliseconds]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMilliseconds((prev) => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                everyFunction(prev - 1000);
                return prev - 1000;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [everyFunction]);

    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);

    return (
        <span className={s.timer}>
            { `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </span>
    );
};
