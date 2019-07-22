//头部组件
import React,{ Component } from 'react';
//引入react官方动画
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper,
    Logo,
    Nav ,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList} from './Headers.js';
//引入react-redux中的 connect方法
import { connect } from 'react-redux';
//action简写
import { actionCreators }  from './store';
import {actionCreators as loginActionCreators} from '../../pages/Login/store';
//页面跳转链接
import { Link }from 'react-router-dom';
class Header extends Component{
    getListArea(){
        //解构赋值语法
        const {focused,list,page,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage,totalPage} =this.props;
        const newList=list.toJS();
        const pageList=[];
        if(newList.length){
        for (let i=(page-1)* 9 ; i<page*9;i++) {
            // console.log(newList[i])
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() =>handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className={'iconfont spin'}>&#xe606;</i>
                            换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                        {/*{*/}
                            {/*list.map((item)=>{*/}
                                {/*return  <SearchInfoItem key={item}>{item}</SearchInfoItem>*/}
                            {/*})*/}
                        {/*}*/}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    };
    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,logout} =this.props;
    return(
<HeaderWrapper>
    <Link to="/">
<Logo />
    </Link>
<Nav>
<NavItem className={'left active'}>首页</NavItem>
<NavItem className={'left'}>下载App</NavItem>
    {
        login ? <NavItem onClick={logout} className={'right'}>退出</NavItem>:
            <Link to={'/Login'}> <NavItem className={'right'}>登录</NavItem></Link>
    }

<NavItem className={'right'}>
<i className={'iconfont'}>&#xe636;</i>
<i className={'iconfont'}>&#xe600;</i>
</NavItem>
<SearchWrapper>
<CSSTransition
in={focused}
timeout={200}
classNames="slide"
>
<NavSearch
className={focused ? 'focused':''}
onFocus={()=>handleInputFocus(list)}
onBlur={handleInputBlur}
></NavSearch>
</CSSTransition>
<i  className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe60c;</i>
{/*搜索样式布局 剪切到无状态组件上方*/}
{this.getListArea()}
</SearchWrapper>
</Nav>
<Addition>
<Link to={'/Write'}>
    <Button className={'writting'}>
        <i className={'iconfont'}> &#xe6a4;</i>
        写文章
    </Button>
</Link>
    <Button className={'reg'}>注册</Button>
    </Addition>
    </HeaderWrapper>
)
    }
}
//聚焦出现 失焦隐藏的搜索框
// const getListArea =(show) =>{
//     if(show){
//     return(
//     )
//     }else {
//         return null;
//     }
// }

//无状态组件编写
// const Header =(props) =>{
//
// }

const mapStateToProps =(state) =>{
return{
    //优化写法
    focused:state.getIn(['header','focused']),
    //list数据
    list: state.getIn(['header','list']),
    //获取页码
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    //换一换功能
    totalPage:state.getIn(['header','totalPage']),
    //第一次
    // focused:state.get('header').get('focused')
    login:state.getIn(['login','login']),
  }
}
const mapDispathToProps =(dispatch) =>{
    return{
        //第二种方法
        handleInputFocus(list){
            console.log(list.size);
            (list.size ===0)&& dispatch(actionCreators.getList());
            // if(list.size>0){
            //     dispatch(actionCreators.getList());
            // }
          dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
            //第一种方法
            // const action = {
            //     type: 'search_blur'
            // };
            // dispatch(action);
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            // console.log(originAngle)
            spin.style.transform='rotate('+ (originAngle+360)+'deg)';
            // console.log(spin.style.transform);
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);
