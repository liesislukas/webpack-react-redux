import createHistory from 'history/createBrowserHistory';
import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/rootSaga';

export const history = createHistory();
const routerMid = routerMiddleware(history);

export function configureStore(initialState) {
  const sagaMid = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(routerMid, sagaMid),
      DevTools.instrument()
    )
  );

  sagaMid.run(rootSaga);

  return store;
}
