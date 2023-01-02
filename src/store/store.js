import {compose,createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import {rootReducer} from './root-reducer';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './root-saga';

const persistConfig={
    key:'root',
    storage,
    blacklist:['user']
}

const sagaMiddleware=createSagaMiddleware();

const persistedReducer=persistReducer(persistConfig,rootReducer);
 //process.env.NODE_ENV === 'development' is to run the logger only on the development enviroment
const middlewares=[process.env.NODE_ENV !== 'production' && logger,sagaMiddleware].filter(Boolean);
// use composeEnhancer if redux dev tools present otherwise just use compose from redux.
const composeEnhancer=
(process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;
const composedEnhancers=composeEnhancer(applyMiddleware(...middlewares));
export const store=createStore(persistedReducer,undefined,composedEnhancers)

sagaMiddleware.run(rootSaga);
export const persistor=persistStore(store);