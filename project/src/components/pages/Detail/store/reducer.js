//home小笔记本
import { fromJS } from 'immutable';
import * as constants from './constants.js';
// import {Content} from "../Details";
// import React from "react";

const defaultState= fromJS({
    title:'',
    content: ''
})
export default (state = defaultState, action)=>{
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                content: action.content
            })
        default:
            return state;
    }
}
