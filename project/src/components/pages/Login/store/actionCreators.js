import axios from 'axios';
import * as constants from './constants.js'
const changeLogin =()=>({
type:constants.CHANGE_LOGIN,
    value:true
});
export const logout =()=>({
type:constants.LOGOUT,
value: false
})
export const login=(accout,password)=>{
    return(_dispatch)=>{
        axios.get('/api/login.json?account=' + accout + '&password=' +password).then((res)=>{
        const result = res.data.data
            if(result){
                _dispatch(changeLogin())
            }else{

            }
        })
    }
}
