//引入常量文件夹
import * as constants from './constants';
//引入Ajax
import axios from 'axios';
import { fromJS } from 'immutable';
//*********************************************************
//changeList是做Ajax创建的action数据 （自用）
const changeList =(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    //换一换页数配置
    totalPage:Math.ceil(data.length/10)
})
//*********************************************************
export const searchFocus = ()=>({
    type:constants.SEARCH_FOCUS
})
export const searchBlur = ()=>({
    type:constants.SEARCH_BLUR
});
export const mouseEnter = ()=>({
    type:constants.MOUSE_ENTER
});
export const mouseLeave = ()=>({
    type:constants.MOUSE_LEAVE
});
export const changePage = (page)=>({
    type:constants.CHANGE_PAGE,
    page
});

export const getList = ()=>{
    return(dispatch)=>{
    axios.get('/api/home.json')
        .then((res)=>{
        const data =res.data;
        //action给到store store给到reducer展现给页面结果
        dispatch(changeList(data.data));
        console.log('成功啦');
    })
        .catch(()=>{
        console.log('error')
    })
}
};
