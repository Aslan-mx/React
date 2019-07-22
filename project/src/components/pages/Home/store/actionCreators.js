//把axios优化进来
import axios from "axios";
//type字段优化并引入contants.js
import * as constants from './constants.js';
import { fromJS }from 'immutable';


const changHomeData=(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
});
const addHomeList =(list,nextPage)=>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})
export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/data.json').then((res)=>{
            const result=res.data.data;
            const action=changHomeData(result);
            // const action={
            //     type:'change_home_data',
            //     topicList:result.topicList,
            //     articleList:result.articleList,
            //     recommendList:result.recommendList
            // }
            dispatch(action);
        })
    }
}
export const getMoreList =(page)=>{
    return(dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data;
            dispatch(addHomeList(result,page+1));
        });
    }
}
export const toggleTopShow =(show)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})
