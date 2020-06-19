import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'


const showScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text style={{ fontSize: 20, }}>
                {blogPost.title}</Text>
            <Text>
                {blogPost.content}
            </Text>
        </View>
    )
}


showScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <EvilIcons name='pencil' size={30} style={{ marginRight: 20 }} />
        </TouchableOpacity>
    };
};


export default showScreen

const styles = StyleSheet.create({})
