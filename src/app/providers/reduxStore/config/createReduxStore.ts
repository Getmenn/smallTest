import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager, ReduxStoreWithManager } from 'async-reducer-manager';

export function createReduxStore<StateSchema>(rootReducers: ReducersMapObject<StateSchema>) {
    const reducerManager = createReducerManager<StateSchema>(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
    }) as ReduxStoreWithManager<StateSchema>;

    store.reducerManager = reducerManager;

    return store;
}
