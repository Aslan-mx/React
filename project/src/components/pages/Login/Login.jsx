//注册登录页面
import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button} from './Logins.js';
import {actionCreators } from './store';
//退出登录返回首页引入参数
import { Redirect } from 'react-router-dom';
class Login extends PureComponent{
    render(){
        const { loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <Fragment>
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder="账号" ref={(input) => {
                                this.account = input
                            }}/>
                            <Input placeholder="密码" type='password' ref={(input) => {
                                this.password = input
                            }}/>
                            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                        </LoginBox>
                    </LoginWrapper>
                </Fragment>
            )
        }else {
            return <Redirect to={'/'}/>
        }
    }
}
const mapState=(state)=>({
    loginStatus:state.getIn(['login','login'])
})
const mapDispatch=(dispatch)=>({
login(accountElem,passwordElem){
    dispatch(actionCreators.login(accountElem.value,passwordElem.value))
}
});
export default connect(mapState,mapDispatch)(Login);
