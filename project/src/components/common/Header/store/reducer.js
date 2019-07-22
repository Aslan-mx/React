//小笔记本
import * as constants from './constants';
//immutable.js fromJS可以把JS对象转化成immutable对象
import { fromJS } from 'immutable';

const  defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    //换一换页数
    page:1,
    totalPage:1
});
export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.SEARCH_FOCUS:
             return state.set('focused',true);
        case constants.SEARCH_BLUR:
             return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage,
            });
            // state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
//用switch语句代替if语句 可以简写代码
    // if (action.type === constants.SEARCH_FOCUS){
    //     //immutable对象的set方法，会结合之前的immutable对象的值
    //     //和设置的值，返回一个全新的对象
    //     return state.set('focused',true)
    // }
    // //原始写法
    // // {
    // //     focused:ture
    // // }
    // if (action.type === constants.SEARCH_BLUR){
    //     return state.set('focused',false)
    // }
    // if(action.type === constants.CHANGE_LIST){
    //     return state.set('list',action.data);
    // }
    // return state;
}
