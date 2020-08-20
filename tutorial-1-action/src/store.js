import { rootReducer } from './reducers';
import { createStore, compose } from 'redux';

export const store = createStore(
	rootReducer,
	compose(process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);
