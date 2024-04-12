import { dataTest } from '@/entities/test/mock/mock';

import { QuestionBlock } from '../questionBlock/QuestionBlock';
import s from './TestBlock.module.scss';

export const TestBlock = () => {
    return (
        <section className={s.testBlock}>
            <h1>Тестирование</h1>
            <div className={s.testWrapper}>
                <div className={s.progressBar} />
                {/* <h3 className={s.question} /> */}
                {
                    dataTest.map((el, i) => <QuestionBlock key={i} item={el} />)
                }
                <div className={s.options} />
                <button type="button">Ответить</button>
            </div>
        </section>
    );
};
