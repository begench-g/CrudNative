import React, {useContext} from "react";
import { View, Text, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native'
import {Context as BlogContext} from "../context/BlogProvider";
import {Feather } from '@expo/vector-icons'
const IndexScreen = ({navigation}) => {
    const {state,addBlogPost,deleteBlogPost}= useContext(BlogContext)
    console.log(state)
  return (
    <View >
      <Text>Home Screen</Text>
    <Button title="Add Post" onPress={()=>addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={(post)=>post.title}
        renderItem={({item})=>{
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title}-{item.id}</Text>
                    <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}}>
                        <Feather style={styles.icon} name="trash"/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            
          )
        }}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
    row:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            marginHorizontal: 10,
       
    },
    title:{
        fontSize: 18,
    },
    icon:{
        fontSize: 24
    }


})


export default IndexScreen;