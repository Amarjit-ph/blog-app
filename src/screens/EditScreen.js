import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    const { editBlogPost } = useContext(Context);

    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogPostForm Sname="EDIT POST" name='Save Edited' navigation={navigation} Post={blogPost} Action={editBlogPost} id={id} />
    )
}


export default EditScreen;