const baseState = {
    blogs: JSON.parse(localStorage.getItem('blogs')) || [],
    blog: null,
    loading: false,
    err: '',
};

export const blogReducer = (state = baseState, action) => {

    let data = JSON.parse(localStorage.getItem('blogs')) || [];

    switch (action.type) {

        case 'GET_ALL_BLOGS':
            return {
                ...state,
                blogs: data
            };

        case 'ADD_BLOG':
            const newBlogs = [...data, action.payload];
            localStorage.setItem('blogs', JSON.stringify(newBlogs));

            return {
                ...state,
                blogs: newBlogs
            };

        case 'GET_BLOG':
            const singleBlog = data.find(b => b.id === action.payload);

            return {
                ...state,
                blog: singleBlog
            };

        case 'EDIT_BLOG':
            const updatedBlogs = data.map(b =>
                b.id === action.payload.id
                    ? { ...b, ...action.payload.data }
                    : b
            );

            localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

            return {
                ...state,
                blogs: updatedBlogs,
                blog: updatedBlogs.find(b => b.id === action.payload.id)
            };

        case 'DELETE_BLOG':
            const filteredBlogs = data.filter(b => b.id !== action.payload);

            localStorage.setItem('blogs', JSON.stringify(filteredBlogs));

            return {
                ...state,
                blogs: filteredBlogs,
                blog: null
            };

        default:
            return state;
    }
};