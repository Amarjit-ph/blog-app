import React, { useState } from 'react'

const BlogContext = React.createContext();

export const BlogProvide = ({ children }) => {

    const [blogPosts, setblogPosts] = useState([{ title: 'Blog post 1' }]);

    const addBlogPost = () => {
        setblogPosts([...blogPosts, { title: `Blog Post ${blogPosts.length + 1}` }]);
    }
    return <BlogContext.Provider
        value={{ data: blogPosts, addBlogPost: addBlogPost }}
    >
        {children}
    </BlogContext.Provider>
};

export default BlogContext;