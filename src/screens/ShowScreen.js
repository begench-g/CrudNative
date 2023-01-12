import React,{useContext} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogProvider";
import { Feather} from '@expo/vector-icons'

const ShowScreen =({navigation, route})=>{
    const {state} = useContext(Context)
    const blogPost = state.find((blog)=>blog.id === route.params.id)
    console.log(route.params.id)
    return (<View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id: route.params.id})}>
            <Feather name='edit-2' size={30}/>
          </TouchableOpacity>
        </View>)
}

   
         
        // Add a placeholder button without the `onPress` to avoid flicker
     
          
    



export default ShowScreen