import { createStore,compose , applyMiddleware} from 'redux';
//运用中间件来处理ajax获取数据 推荐
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

export default store;