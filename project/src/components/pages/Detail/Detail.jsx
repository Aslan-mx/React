import React, { Component,Fragment } from 'react';
import { DetailWrapper,Header,Content } from './Details.js';
import { connect } from 'react-redux';
//
import {actionCreators } from './store';
//
import {withRouter } from 'react-router-dom';
class Detail extends Component{

    render(){
console.log(this.props.location.search);
        const {title,content} =this.props;
        return(
            <Fragment>
                <DetailWrapper>
                    <Header>{title}</Header>
                    <Content dangerouslySetInnerHTML={{__html:content }} />
                </DetailWrapper>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});
const mapDispatch=(dispatch)=>({
    getDetail(id){
    dispatch(actionCreators.getDetail(id));
    }
});
export default connect(mapState,mapDispatch)(withRouter(Detail));
