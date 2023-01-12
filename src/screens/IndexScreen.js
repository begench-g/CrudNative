import React, {useContext, useEffect} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native'
import {Context as BlogContext} from "../context/BlogProvider";
import {Feather } from '@expo/vector-icons'
const IndexScreen = ({navigation}) => {
    const {state,getBlogPost,deleteBlogPost}= useContext(BlogContext)
    useEffect(()=>{
      getBlogPost();
      navigation.addListener('focus',()=>{
        getBlogPost();
      })
    },[])
  return (
    <View >
      <Text>Home Screen</Text>
   
      <FlatList
        data={state}
        keyExtractor={(post)=>post.title}
        renderItem={({item})=>{
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title}--{item.id}</Text>
                    <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}}>
                        <Feather style={styles.icon} name="trash"/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            
          )
        }}
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