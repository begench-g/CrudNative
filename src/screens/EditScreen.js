import React, { useContext, useState } from "react";
import { Text, View ,TextInput,Button, StyleSheet} from "react-native";
import { Context } from "../context/BlogProvider";


const EditScreen =({navigation,route})=>{
    const { state,editBlogPost }= useContext(Context)
    const item = state.find((i)=>i.id === route.params.id)
    const [title, setTitle] = useState(item.title)
    const [content,setContent] = useState(item.content)
    const id = route.params.id;

    return(
        <View>
            <Text style={styles.text}>Edit title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>{setTitle(text)}}/>
            <Text style={styles.text}>Edit Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>{setContent(text)}}/>
            <Button
             title="Add Blog Post"
             onPress={()=>{
                editBlogPost(id,title,content,()=>navigation.pop())
                }
            } 
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        borderColor: 'black',
        borderWidth: 2,
        padding:3,
        fontSize: 23,
        marginHorizontal:10
    },
    text: {
        marginHorizontal:10,
        fontSize: 23
    }

}
)
export default EditScreen;