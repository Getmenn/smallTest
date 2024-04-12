import { TestBlock } from '@/widget/testBlock';

import s from './MainPage.module.scss';

export const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <TestBlock />
        </div>
    );
};