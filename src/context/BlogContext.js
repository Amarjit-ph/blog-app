import createDataContext from './createDataContext'

// REDUCER
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `BLOG POST #${state.length * 100}` }];
        default:
            return state;
    }
};

// HELPER FUNCTION
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);