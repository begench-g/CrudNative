import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";


const BlogContext = React.createContext();
const blogReducer = (state,action) => {
    switch (action.type){
        case 'get_blogposts':
            return action.payload
        case 'edit_post':
            return state.map((blogpost)=>{
                if(blogpost.id==action.payload.id){
                    return action.payload
                }else{
                    return blogpost;
                }
            })
        case 'delete_post':
            return state.filter((blogpost)=>blogpost.id !== action.payload)
        case 'add_post':
            return [...state,{title:action.payload.title,content:action.payload.content,id:Math.floor(Math.random()*99999)}]
        default:
            return state
    }
}
const getBlogPost = dispatch=>{
    return async () => {
        const response = await jsonServer.get('/blogpost')

        dispatch({type:'get_blogposts',payload:response.data})
    }
}

const addBlogPost = (dispatch) =>{
    return async (title,content,callback)=>{
        // dispatch({type:'add_post',payload:{title:title,content:content}})
        await jsonServer.post('/blogpost',{title,content})
        if(callback){
            callback();
        }
       
    }
}
const editBlogPost = (dispatch) =>{
    return async (id,title,content,callback)=>{
        await jsonServer.put(`/blogpost/${id}`,{title,content})
        dispatch({type:'edit_post',payload:{id,title,content}})
        callback();
    }
}
const deleteBlogPost = dispatch =>{
    return async (id)=>{
        await jsonServer.delete(`/blogpost/${id}`)
        dispatch({type:'delete_post',payload:id})
    }
}
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPost},[])