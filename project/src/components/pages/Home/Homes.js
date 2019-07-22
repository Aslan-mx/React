import styled from 'styled-components';

export const HomeWrapper = styled.div`
width:960px;
overflow:hidden;
margin:0 auto;

`;
export const HomeLeft = styled.div`
float:left;
width:625px;
padding-top:30px;
margin-left:15px;

.banner-img{
width:625px;
height:270px;
}
`;
export const HomeRight = styled.div`
width:280px;
float:right;
`;
export const BackTop= styled.div`
position:fixed;
right:100px;
 bottom:100px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
font-size:14px;
border:1px solid #ccc;
`;
export const TopicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
float:left;
height:32px;
line-height:32px;
padding-right:10px;
font-size:14px;
background:#f7f7f7;
color:#000;
border:1px solid #dcdcdc;
margin-bottom:18px;
margin-right:10px;

.topic-pic{
width:32px;
height:32px;
display:block;
float:left;
margin-right:10px;
}
`;
export const ListItem = styled.div`
padding:20px 0;
border-bottom:1px solid #dcdcdc;
overflow:hidden;
.pic{
width:125px;
height:100px;
float:right;
display:block;
border-radius:10px;

}
`;
export const ListInfo= styled.div`
width:500px;
float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
         line-height:18px;
    }
`;
export const LoadMore= styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    margin:30px 0;
    background:#fff;
    border-radius:20px;
    cursor:pointer;
`;


export const RecommendWrapper= styled.div`
margin:30px 0;
width:280px;

`;
export const RecommendItem= styled.div`
width:280px;
height:50px;
background: url(${(props) => props.imgUrl});
background-size:contain;
`;
export const WriterWrapper= styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;
`;
