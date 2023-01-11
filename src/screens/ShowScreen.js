import React,{useContext} from "react";
import { Text, View } from "react-native";
import { Context } from "../context/BlogProvider";

const ShowScreen =({route})=>{
    const {state} = useContext(Context)
    const blogPost = state.find((blog)=>blog.id === route.params.id)
    console.log(route.params.id)
    return (<View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
        </View>)
}

export const HeaderRight = ({navigation})=>{
   
         
        // Add a placeholder button without the `onPress` to avoid flicker
        headerRight: () => (
          <TouchableOpacity onPress={()=>navigation.navigate('Edit')}>
            <Feather name='edit-2' size={30}/>
          </TouchableOpacity>
        )
    
}



export default ShowScreen