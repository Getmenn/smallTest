import { useState } from 'react';

import { OneSelect } from '@/shared/ui';

import s from './SimpleSelect.module.scss';

interface IProps {
    items: string[];
    id: number;
}

export const SimpleSelect = ({ items, id }: IProps) => {
    const [activeSelect, setActiveSelect] = useState<number | null>(null);

    const handleAddActiveSelect = (num: number) => {
        activeSelect === num
            ? setActiveSelect(null)
            : setActiveSelect(num);
    };

    return (
        <div className={s.simpleSelect}>
            {
                items.map((el, i) => (
                    <OneSelect
                        key={i}
                        text={el}
                        id={i}
                        active={activeSelect === i}
                        setActiveSelect={handleAddActiveSelect}
                    />
                ))
            }
        </div>
    );
};
