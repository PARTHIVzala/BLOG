import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { getBlog, editBlog, deleteBlog } from '../Actions/libActions';

function SingleBlog() {

    const { id } = useParams();
    const blog = useSelector(state => state.blog)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        dispatch(getBlog(Number(id)))   // important fix 🔥
    }, [id, dispatch])

    useEffect(() => {
        if (blog) {
            setTitle(blog.title || '')
            setContent(blog.content || '')
        }
    }, [blog])

    const handleEdit = () => {
        if (isEditing) {
            dispatch(editBlog(Number(id), { title, content }))
            setIsEditing(false)
        } else {
            setIsEditing(true)
        }
    }

    const handleCancel = () => {
        setIsEditing(false)
        setTitle(blog?.title || '')
        setAuthor(blog?.author || '')
        setContent(blog?.content || '')
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            dispatch(deleteBlog(Number(id)))
            navigate('/')
        }
    }

    return (
        <div className='p-6 max-w-md mx-auto bg-blue-100 border-l-8 border-blue-300 relative'>

            {/* Back Button */}
            <button onClick={() => navigate('/')} className='mb-4 font-bold'>
                ← Back
            </button>

            {/* Title */}
            {isEditing ? (
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full mb-2 p-2 border'
                    placeholder="Title"
                />
            ) : (
                <h2 className='text-xl font-bold text-center'>{blog?.title}</h2>
            )}

            {/* Content */}
            {isEditing ? (
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='w-full p-2 border'
                    rows="4"
                    placeholder="Content"
                />
            ) : (
                <p className='text-sm italic mt-4 text-center'>
                    {blog?.content}
                </p>
            )}

            {/* Buttons */}
            <div className='mt-4 flex gap-2 justify-end'>
                {isEditing ? (
                    <>
                        <button onClick={handleEdit} className='bg-green-500 text-white px-3 py-1'>
                            Save
                        </button>
                        <button onClick={handleCancel} className='bg-gray-400 text-white px-3 py-1'>
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={handleEdit} className='bg-blue-500 text-white px-3 py-1'>
                            Edit
                        </button>
                        <button onClick={handleDelete} className='bg-red-500 text-white px-3 py-1'>
                            Delete
                        </button>
                    </>
                )}
            </div>

        </div>
    )
}

export default SingleBlog;