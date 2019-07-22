import React, { PureComponent, Fragment } from 'react';
import { HomeWrapper,HomeLeft,HomeRight,BackTop} from './Homes.js';
//引入Home布局组件
import Topic from './components/Topic.js';
import List from './components/List.js';
import Recommend from './components/Recommend.js';
import Writer from './components/Writer.js';
//axios优化创建actionCreators.js并引入
// import axios from 'axios';
import { actionCreators } from './store';
import { connect } from 'react-redux';
class Home extends PureComponent{
    //开始提高代码性能
    // shouldComponentUpdate(){
    // }
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <img className={'banner-img'} src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                        <Topic/>
                       <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <Writer/>
                        right
                    </HomeRight>
                    {this.props.showScroll? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
                </HomeWrapper>
            </Fragment>
        )
    };
    componentDidMount(){
this.props.changeHomeData();
this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)

    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch=(dispatch)=>({
    changeHomeData(){
    const action=actionCreators.getHomeInfo();
    dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>200){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    // console.log(document.documentElement.scrollTop);
    }
});
export default connect(mapState,mapDispatch)(Home);
