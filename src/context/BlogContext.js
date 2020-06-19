import createDataContext from './createDataContext'

//18

// REDUCER [GUN]
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {
                id: state.length + 1,
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'edit_blogpost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blogPost;
                }
            })
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

// FIRE FUNCTION [FIRE]
const addBlogPost = dispatch => {
    return (title, content, callback) => {
        //DISPATCH FUNCTION [AMMO]
        dispatch({ type: 'add_blogpost', payload: { title, content } });
        callback();
    };
};
const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
        callback();
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [{ title: 'Debug Javascript', content: 'Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World ', id: 0 }]);