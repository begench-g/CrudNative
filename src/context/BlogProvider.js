import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const BlogContext = React.createContext();
const blogReducer = (state,action) => {
    switch (action.type){
        case 'delete_post':
            return state.filter((blogpost)=>blogpost.id !== action.payload)
        case 'add_post':
            return [...state,{title:`dudu ${state.length + 1}`,id:Math.floor(Math.random()*99999)}]
        default:
            return state
    }
}
const addBlogPost = (dispatch,name="fuck") =>{
    return ()=>{
        dispatch({type:'add_post',payload:name})}
}
const deleteBlogPost = dispatch =>{
    return (id)=>{
        dispatch({type:'delete_post',payload:id})
    }
}
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[])