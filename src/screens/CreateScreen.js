import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'

//23

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context);


    return (
        <BlogPostForm Sname="ADD BLOG" name='Save' Post={''} Action={addBlogPost} navigation={navigation} />
    )
}

export default CreateScreen
const styles = StyleSheet.create({
    input: {
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 8
    },
    label: {
        marginBottom: 5,
        fontSize: 15
    }
})
