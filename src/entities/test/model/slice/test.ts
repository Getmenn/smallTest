import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAnswers, ITestItem, TestSchema, typeAnswers, typeTestStatus } from '../types/types';

const initialState: TestSchema = {
    activeTest: 1,
    activeAnswer: '',
    answers: [],
    questions: [],
    testStatus: 'pending',
    timer: null,
};

const slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setActiveTest: (state, action: PayloadAction<number>) => {
            state.activeTest = action.payload;
        },
        setAllAnswers: (state, action: PayloadAction<IAnswers[]>) => {
            state.answers = action.payload;
        },
        setAnswer: (state, action: PayloadAction<IAnswers>) => {
            const find = state.answers.find((el) => el.id === action.payload.id);

            state.answers = find
                ? state.answers.map((el) => {
                    if (el.id === action.payload.id) {
                        return action.payload;
                    }
                    return el;
                })
                : [...state.answers, action.payload];
        },
        setActiveAnswer: (state, action: PayloadAction<typeAnswers>) => {
            state.activeAnswer = action.payload;
        },
        setQuestions: (state, action: PayloadAction<ITestItem[]>) => {
            state.questions = action.payload;
        },
        setTestStatus: (state, action: PayloadAction<typeTestStatus>) => {
            state.testStatus = action.payload;
        },
        setTimer: (state, action: PayloadAction<number | null>) => {
            state.timer = action.payload;
        },
        clearTest: (state) => {
            state.timer = null;
            state.answers = [];
            state.activeTest = 1;
            state.activeAnswer = '';
            state.testStatus = 'pending';
        },
    },
});

export const {
    actions: testActions,
    reducer: testReducer,
} = slice;
