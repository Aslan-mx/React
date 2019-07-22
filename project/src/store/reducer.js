//各个文件夹中的reducer小笔记本 组合过来 组合成大笔记本
import { combineReducers} from 'redux-immutable';
import { reducer as headerReducer} from '../components/common/Header/store';
import { reducer as homeReducer}   from '../components/pages/Home/store';
import { reducer as detailReducer } from '../components/pages/Detail/store';
import { reducer as loginReducer } from '../components/pages/Login/store';
//redux-immutable

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
});
export default reducer;
