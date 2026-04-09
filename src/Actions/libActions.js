export const addBlog = (data) => {
    return {
        type: 'ADD_BLOG',
        payload: data,
    }
}

export const getAllBlogs = () => {
    return {
        type: 'GET_ALL_BLOGS',
    } 
}

export const getBlog = (id) => {
    return {
        type: 'GET_BLOG',
        payload: id,
    } 
}

export const editBlog = (id, data) => {
    return {
        type: 'EDIT_BLOG',
        payload: { id, data },
    }
}

export const deleteBlog = (id) => {
    return {
        type: 'DELETE_BLOG',
        payload: id,
    }
}