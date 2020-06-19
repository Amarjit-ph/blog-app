import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Context as BlogContext } from '../context/BlogContext'


const indexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.id}. {item.title}
                                </Text>

                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash-2" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

indexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={25} style={{ marginRight: 20 }} />
        </TouchableOpacity>

    };
};

export default indexScreen
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        margin: 2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
        paddingRight: 30
    }

})
