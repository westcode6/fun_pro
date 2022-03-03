import Navbar from "./Navbar";
import { useState } from "react";
const Blog = () => {

    const [blog, setBlog] = useState([
        {
            id: 1,
            title: "The Johnsons",
            body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?"
        },

        {
            id: 2,
            title: "NExt big thing",
            body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?"
        },

        {
            id: 3,
            title: "Drive more sales",
            body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?"
        },

        {
            id: 4,
            title: "Life is so beautiful",
            body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?"
        },
        {
            id: 5,
            title: "Greater things are we doing",
            body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?"
        },

        {
            id: 6,
            title: "God is here with us",
            body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?"
        },
    ])

    function makeChange() {
        setBlog("God is so faithful and Greatious");
    }
    return (
        <div>
            <Navbar />


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-10 sm:py-16 lg:py-20  bg-orange-50">
    { blog.map((blog) => (
                    <div className="px-7 py-4" onClick={() => {makeChange()} }>
                        <h2 className="bg-orange-700 p-2 text-sm font-bold text-white w-10 text-center">{blog.id}</h2>
                        <div className="py-5 px-5 bg-white shadow-xl hover:shadow-lg transform transition hover:-translate-x-1" key={blog.id}>
                            <h2 className="text-2xl font-semibold text-gray-9800">{blog.title}</h2>

                            <p className="mt-4 text-gray-600">{blog.body}</p>
                        </div>
                    </div>
                ))}
</div>




        </div>
     );
}

export default Blog;