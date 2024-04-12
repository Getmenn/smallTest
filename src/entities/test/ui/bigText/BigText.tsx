import { useState } from 'react';

import s from './BigText.module.scss';

export const BigText = () => {
    const [value, setValue] = useState<string>('');

    return (
        <textarea className={s.bigText} value={value} onChange={(e) => setValue(e.target.value)} />
    );
};
