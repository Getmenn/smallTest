import { useState } from 'react';

import s from './ShortText.module.scss';

export const ShortText = () => {
    const [value, setValue] = useState<string>('');

    return (
        <input type="text" className={s.shortText} value={value} onChange={(e) => setValue(e.target.value)} />
    );
};
