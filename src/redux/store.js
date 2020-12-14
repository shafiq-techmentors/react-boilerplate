import { createStore } from 'redux';
import reducers from './reducers';

const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const getDispatch = () => {
  const { dispatch } = Store;

  return dispatch;
};

export default Store;
