import React,{useContext} from "react";
import { Text } from "react-native";
import { Context } from "../context/BlogProvider";

const ShowScreen =({route})=>{
    const {state} = useContext(Context)
    const blogPost = state.find((blog)=>blog.id === route.params.id)
    console.log(route.params.id)
    return <Text>{blogPost.title}</Text>
}


export default ShowScreen