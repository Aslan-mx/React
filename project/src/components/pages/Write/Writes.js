import styled from 'styled-components';


export const WriteWrapper = styled.div`
width: 100%;
height: 100%;
background:yellow;
`;
export const WriteLeft = styled.div`
float:left;
position:relative;
left:0;

width:17%;
min-height:770px;
max-height:100%;
margin:0;
background-color:#404040;
.NavItem{
margin:20px 0 10px;
padding:0 15px;
color:#f2f2f2;
font-size:14px;
line-height:20px;
};
.Item{
display:block;
width:178px;
height:40px;
line-height:40px;
padding:0 15px;
color:#f2f2f2;
}
.NavHelp{
}
`;
export const Nav = styled.div`
width:192px;
height:21px;
font-size:15px;
color:#ec7259;
padding:9px 0;
text-align:center;
border:1px solid rgba(236,114,89,.8);
 border-radius:20px;
 margin:30px 18px 5px;
`;
export const WriteCenter = styled.div`
float:left;
position:relative;
left:0;
overflow-y:scroll;
width:25%;
min-height:770px;
max-height:100%;
background:red;
`;
export const WriteRight = styled.div`
float:right;
position:relative;

right:0;
width:58%;
min-height:770px;
max-height:100%;
background:green;
`;
