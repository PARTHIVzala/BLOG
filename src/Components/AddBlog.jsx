import { useState } from 'react'
import { useDispatch } from "react-redux";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { addBlog } from "../Actions/libActions.js";
import { useNavigate } from "react-router-dom";

function AddBlog() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        date: '',
    })

    const formHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(addBlog({
            ...formData,
            id: Date.now()
        }));

        navigate('/')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">

            {/* Main */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-5">

                {/* Form */}
                <form
                    onSubmit={formSubmitHandler}
                    className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
                >

                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
                        Create Blog
                    </h2>

                    <input
                        required
                        value={formData.title}
                        onChange={formHandler}
                        name="title"
                        placeholder="Blog Title"
                        className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <textarea
                        required
                        value={formData.content}
                        onChange={formHandler}
                        name="content"
                        placeholder="Write your blog..."
                        rows="4"
                        className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <input
                        required
                        value={formData.date}
                        onChange={formHandler}
                        name="date"
                        type="date"
                        className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition duration-200"
                    >
                        Add Blog
                    </button>

                </form>

            </div>

        </div>
    )
}

export default AddBlog;