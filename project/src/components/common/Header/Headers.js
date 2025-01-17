//header JS样式
import styled from 'styled-components';
//styled-components引入图片方式
import LogoPic from '../../../statics/logo.png';
export const HeaderWrapper = styled.div`
z-index:1;
position:relative;
height:56px;
border-bottom:1px solid #f0f0f0;
`;
//export const Logo = styled.a.attrs({href:'/'})`
export const Logo = styled.div`
position:absolute; 
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${LogoPic});
background-size:contain;
`;
export const Nav = styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
`;
export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
float:left;
}
&.right{
float:right;
color:#969696;
}
&.active{
color:#ea6f5a;
}
`;

export const SearchWrapper = styled.div`
position:relative; 
float:left;
.zoom{
 position:absolute;
 right:5px;
 bottom:5px;
 width:30px;
 height:30px;
 line-height:30px;
 border-radius:15px;
 text-align:center;
 &.focused{

 background:#777;
 colorL#fff;
 }
}
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
width:160px;
height:38px;
margin-top:9px;
margin-left:20px;
padding:0 30px 0 20px;
box-sizing:border-box;
border:none;
border-radius:19px;
background:#eee;
outline:none;
font-size:14px;
color:#666;
&::placeholder{
color:#999;
}
&.focused{
width:240px;

}
&.slide-enter{
transition:all .2s ease-out;
}
&.slide-enter-active{
width:240px;
}
`;
//注册模块
//搜索样式
export const SearchInfo=styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0, 0, 0, .2);
background:#fff;
`;
export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
color:#969696;
font-size:14px;

`;
export const SearchInfoSwitch = styled.span`
float:right;
font-size:13px;
cursor:pointer;

.spin{

font-size:14px;
display:block;
float:left;
margin-right:5px;
transition:all .2s ease-in;

transform-origin:center center;
`;
export const SearchInfoList = styled.div`
overflow:hidden;
`;
export const SearchInfoItem= styled.a`
display:block;
float:left;
margin-left:10px;
margin-bottom:10px;
font-size:12px;
line-height:20px;
padding:0 5px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;

`;
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`;
export const Button=styled.div`
float:right;
margin-top:9px;
margin-right:20px;
line-height:38px;
border:1px solid #ec6149;
border-radius:19px;
&.reg{
color:#ec6149;
width:80px;
height:38px;
text-align:center;
}
&.writting{ 
width:100px;
height:40px;
text-align:center;
color:#fff;
background:#ec6149;
}
`
