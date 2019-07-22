import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
//退出登录返回首页引入参数
import { Redirect } from 'react-router-dom';
import { WriteWrapper,WriteLeft,WriteCenter,WriteRight,Nav }from './Writes.js';

class Write extends PureComponent{
    render(){
        const { loginStatus } = this.props;
        if (loginStatus) {
            return (
                <Fragment>
                    <WriteWrapper>
                        <WriteLeft>
                            <Nav>
                                回首页
                            </Nav>
                            <div className={'NavItem'}>新建文集</div>
                            <span className={'Item'}>日记本</span>
                            <span className={'Item'}>随笔</span>
                            <div className={'NavHelp'}>
                                <span>设置</span>
                                <span>遇到的问题</span>
                            </div>
                        </WriteLeft>
                        <WriteCenter>
                            <br/>  weerewrerewrbr
                            <br/>  weerewrerewrbr
                            <br/>  weerewrerewrbr
                        </WriteCenter>
                        <WriteRight>
                            <br/>  weerewrerewrbr
                            <br/>  weerewrerewrbr
                            <br/>  weerewrerewrbr
                        </WriteRight>
                    </WriteWrapper>
                </Fragment>
            )
        }else {
            return <Redirect to={'/Login'}/>
        }
    }
}

const mapState=(state)=>({
    loginStatus:state.getIn(['login','login'])
})

export default connect(mapState,null)(Write);
