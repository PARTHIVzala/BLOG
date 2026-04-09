import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from "../Actions/libActions";
import { useNavigate } from "react-router-dom";

export const BlogShelf = () => {

    const blogs = useSelector(state => state.blogs);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllBlogs())
    }, [dispatch]);

    const singleBlogPage = (id) => {
        navigate(`/blog/${id}`);
    }

    return (
        <div className='flex flex-row flex-wrap justify-center'>

            {blogs.map((blog) => {
                return (
                    <div
                        key={blog.id}
                        onClick={() => singleBlogPage(blog.id)}
                        className='cursor-pointer bg-blue-100 hover:scale-105 m-3 p-5 min-w-[250px] max-w-[300px] duration-200 border-l-8 border-blue-300'
                    >

                        <h2 className='text-xl font-bold text-center'>
                            {blog.title}
                        </h2>

                        <p className='text-end text-gray-600'>
                            {blog.author ? `~ ${blog.author}` : ''}
                        </p>

                        <p className='text-sm italic text-center mt-4'>
                            {blog.content}
                        </p>

                    </div>
                )
            })}

        </div>
    )
}