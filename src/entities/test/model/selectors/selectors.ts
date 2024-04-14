export const activeTestSelector = (state: StateSchema) => state.testReducer.activeTest;
export const answersSelector = (state: StateSchema) => state.testReducer.answers;
export const questionsSelector = (state: StateSchema) => state.testReducer.questions;
export const activeAnswerSelector = (state: StateSchema) => state.testReducer.activeAnswer;
export const testStatusSelector = (state: StateSchema) => state.testReducer.testStatus;
export const timerSelector = (state: StateSchema) => state.testReducer.timer;
