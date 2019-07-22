import React,{ Component , Fragment}from 'react';
import Header from './components/common/Header/Header.jsx';
import Detail from './components/pages/Detail/Detail.jsx';
import Home from './components/pages/Home/Home.jsx';
import{ GlobalStyle } from './style/style.js';
import {IconfontStyle} from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route } from 'react-router-dom';
//注册登录页面布局
import Login from './components/pages/Login/Login.jsx';
//写文章布局
import Write from './components/pages/Write/Write.jsx';
class App extends Component{
    render(){
        return(
            <Fragment>
                <Provider store={store}>
                    <GlobalStyle/>
                    <BrowserRouter>
                        <Header/>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/Login'} exact component={Login}/>
                        <Route path={'/Write'} exact component={Write}/>
                        <Route path={'/Detail/:id'}exact  component={Detail}/>
                    </BrowserRouter>
                    <IconfontStyle/>
                </Provider>
            </Fragment>
        )
    }
}
export default App;
