import React, { PureComponent,Fragment } from 'react';
import  { TopicWrapper ,TopicItem} from '../Homes.js';
import {connect }from 'react-redux';

//专题
class Topic extends PureComponent{
    render(){
        const {List} =this.props;
        return(
            <Fragment>
                <TopicWrapper>
                    {
                       List.map((item)=>{
                        return(
                            <TopicItem key={item.get('id')}>
                                <img
                                    className={'topic-pic'}
                                    src={item.get('imgUrl')} alt=""/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                    }
                </TopicWrapper>
            </Fragment>
        )
    }
}
const mapState =(state)=>({
// List:state.get('home').get('topicList')
    List:state.getIn(['home','topicList'])
})
export default connect(mapState,null)(Topic);
