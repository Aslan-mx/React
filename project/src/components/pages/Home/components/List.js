import React, { PureComponent,Fragment } from 'react';
import { ListItem, ListInfo, LoadMore} from '../Homes.js';
import { connect }from 'react-redux';
import { actionCreators } from '../store';
//详情页面跳转及优化
import { Link }from 'react-router-dom';
class List extends PureComponent{
    render(){
        const {List,getMoreList,page} = this.props;
        return(
            <Fragment>
                {
                    List.map((item,index)=>{
                        return(
                            <Link to={"/Detail/" + item.get('id')} key={index}>
                                <ListItem key={index}>
                                    <img
                                        className={'pic'}
                                         src={item.get('imgUrl')} alt=""/>
                                    <ListInfo>
                                        <h3 className={'title'}>{item.get('title')}</h3>
                                        <p className={'desc'}>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </Fragment>
        )
    }
}
const mapState =(state)=>({
    List:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch =(dispatch)=>({
getMoreList(page){
dispatch(actionCreators.getMoreList(page))
}
})
export default connect(mapState,mapDispatch)(List);
