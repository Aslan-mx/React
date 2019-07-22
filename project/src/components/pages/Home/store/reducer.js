//home小笔记本
import { fromJS } from 'immutable';
import * as constants from './constants.js';

const  defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false
// topicList:[{
//     id:1,
//     title:'社会热点',
//     imgUrl:'http://pic.51yuansu.com/pic3/cover/01/27/60/59233b3c6ace6_610.jpg',
// },{
//     id:2,
//     title:'手绘',
//     imgUrl:'http://pic.51yuansu.com/pic3/cover/01/27/60/59233b3c6ace6_610.jpg',
// }],
// articleList:[{
//     id:1,
//     title:'唐初名将尉迟敬德、程咬金的爵位能世袭，为何秦琼的却不能？',
//     desc:'这确实是一个很不可思议的现象，同时期的开国功臣，只要没有犯过什么大错，其子孙都能袭爵，但是秦琼却是一个例外，他的爵位并没有被传下去。而另一个比较...',
//     imgUrl:'http://upload-images.jianshu.io/upload_images/2713003-1e02a5560024c094.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
// },{
//     id:2,
//     title:'唐初名将尉迟敬德、程咬金的爵位能世袭，为何秦琼的却不能？',
//     desc:'这确实是一个很不可思议的现象，同时期的开国功臣，只要没有犯过什么大错，其子孙都能袭爵，但是秦琼却是一个例外，他的爵位并没有被传下去。而另一个比较...',
//     imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1736000107,2715820772&fm=26&gp=0.jpg',
// },{
//     id:3,
//     title:'唐初名将尉迟敬德、程咬金的爵位能世袭，为何秦琼的却不能？',
//     desc:'这确实是一个很不可思议的现象，同时期的开国功臣，只要没有犯过什么大错，其子孙都能袭爵，但是秦琼却是一个例外，他的爵位并没有被传下去。而另一个比较...',
//     imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1736000107,2715820772&fm=26&gp=0.jpg',
// }],
//     recommendList:[{
//     id:1,
//         imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
//     },{
//         id:2,
//         imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
//     },{
//         id:3,
//         imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
//     },{
//         id:4,
//         imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
//
//     }]
});
//代码优化
const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
    });
};
const addArticleList=(state,action)=>{
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
    })
}

export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
           return changeHomeData(state,action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default:
            return state;
    }
}
