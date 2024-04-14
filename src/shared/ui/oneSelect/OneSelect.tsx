import { memo } from 'react';

import s from './OneSelect.module.scss';

interface IOneSelect {
    active: boolean;
    text: string;
    id: string;
    setActiveSelect: (num: string) => void;
}

export const OneSelect = memo(({ active, text, id, setActiveSelect }: IOneSelect) => {
    return (
        <div className={s.oneSelect} onClick={() => setActiveSelect(id)}>
            <div className={`${s.circle} ${active && s.active}`} />
            <span>{text}</span>
        </div>
    );
});
