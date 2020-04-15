import React, { useReducer } from 'react'

// REDUCER
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `BLOG POST #${state.length * 10}` }];
        default:
            return state;
    }
};

const BlogContext = React.createContext();

export const BlogProvide = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    // DISPATCH [ACTION(TYPE,PAYLOAD)]
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' })

    };

    // BLOG PROVIDER
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;