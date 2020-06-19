import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const BlogPostForm = ({ Sname, navigation, name, Post, Action }) => {

    const [title, setTitle] = useState(Post.title);
    const [content, setContent] = useState(Post.content);


    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20 }}>{Sname}</Text>
            <Text style={styles.label} >Title :</Text>

            <TextInput style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)} />

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input}
                value={content}
                onChangeText={text => setContent(text)} />

            <Button
                title={name}
                onPress={() => {
                    if (Sname == 'EDIT POST') {
                        Action(Post.id, title, content, () => navigation.pop());
                    }
                    else {
                        Action(title, content, () => navigation.pop());
                    }
                }
                } />
        </View>
    )
}

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
});

export default BlogPostForm;