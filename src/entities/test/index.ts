export { dataTest } from './mock/mock';
export {
    activeAnswerSelector,
    activeTestSelector,
    questionsSelector,
    testStatusSelector,
    timerSelector } from './model/selectors/selectors';
export { testActions, testReducer } from './model/slice/test';
export type { ITestItem, TestSchema, testTypes } from './model/types/types';
export { BigText } from './ui/bigText/BigText';
export { MultiSelect } from './ui/multiSelect/MultiSelect';
export { ProgressBar } from './ui/progressBar/ProgressBar';
export { ShortText } from './ui/shortText/ShortText';
export { SimpleSelect } from './ui/simpleSelect/SimpleSelect';
