import { useState } from 'react';

import { OneSelect } from '@/shared/ui';

import s from './MultiSelect.module.scss';

interface IProps {
    items: string[];
    id: number;
}

export const MultiSelect = ({ items, id }: IProps) => {
    const [activeSelect, setActiveSelect] = useState<number[]>([]);

    const handleAddActiveSelect = (num: number) => {
        activeSelect?.includes(num)
            ? setActiveSelect(activeSelect.filter((el) => el !== num))
            : setActiveSelect([...activeSelect, num]);
    };

    return (
        <div className={s.multiSelect}>
            {
                items.map((el, i) => (
                    <OneSelect
                        key={i}
                        text={el}
                        id={i}
                        active={activeSelect ? activeSelect.includes(i) : false}
                        setActiveSelect={handleAddActiveSelect}
                    />
                ))
            }
        </div>
    );
};
