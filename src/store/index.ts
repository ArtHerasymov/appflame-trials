import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);
export const store = createStore(rootReducer, composeWithDevTools(middleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
