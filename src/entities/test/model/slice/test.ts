import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAnswers, TestSchema } from '../types/slice';

const initialState: TestSchema = {
    activeTest: 1,
    answers: [],
};

const slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<number>) => {
            state.activeTest = action.payload;
        },
        setAnswers: (state, action: PayloadAction<IAnswers>) => {
            state.answers.push(action.payload);
        },
    },
});

export const {
    actions: testActions,
    reducer: testReducer,
} = slice;
