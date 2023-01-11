import React,{useContext,useState} from "react";
import { Text,TextInput, Button,View,StyleSheet } from "react-native";
import { Context } from "../context/BlogProvider";


const CreateScreen =({navigation})=>{
   const [title,setTitle ] =useState('')
   const [content,setContent]=useState('')
   const {addBlogPost} = useContext(Context)
    return (
        <View>
            <Text style={styles.text}>Enter Title</Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={(text)=>setTitle(text)}
            />
            <Text style={styles.text}>Enter Content</Text>
            <TextInput 
                style={styles.input}
                value={content}
                onChangeText={(text)=>setContent(text)}
            />
            <Button
             title="Add Blog Post"
             onPress={()=>{
                addBlogPost(title,content,()=>navigation.navigate('Index'))
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


export default CreateScreen