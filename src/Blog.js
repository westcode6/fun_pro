import Navbar from "./Navbar";
import { useState } from "react";
const Blog = () => {
  const [blog, setBlog] = useState([
    {
      id: 1,
      title: "The Johnsons",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 2,
      title: "NExt big thing",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 3,
      title: "Drive more sales",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 4,
      title: "Life is so beautiful",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },
    {
      id: 5,
      title: "Greater things are we doing",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 6,
      title: "God is here with us",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },
  ]);

  function handleChange() {
  setBlog([
    {
      id: 10,
      title: "The Johnsons",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at soluffta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 11,
      title: "NExt big thing",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at solufffta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 12,
      title: "Drive more sales",
      body: " Lorem ipsum doffflor sit amet consectetur adipisicing elit. Repudiandae ea at soluta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 13,
      title: "Life is so beautiful",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at solutafff quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },
    {
      id: 14,
      title: "Greater things are we doing",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at solfffuta quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },

    {
      id: 15,
      title: "God is here with us",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ea at solutafffffffff quisquam mollitia itaque, incidunt voluptatum doloremque fugiat iste?",
    },
  ]);
  }
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-10 sm:py-16 lg:py-20  bg-orange-50">
        {blog.map((blog) => (
          <div
            className="px-7 py-4"

          >
            <h2 className="bg-orange-700 p-2 text-sm font-bold text-white w-10 text-center">
              {blog.id}
            </h2>
            <div
              className="py-5 px-5 bg-white shadow-xl hover:shadow-lg transform transition hover:-translate-x-1"
              key={blog.id}
            >
              <h2 className="text-2xl font-semibold text-gray-9800">
                {blog.title}
              </h2>

              <p className="mt-4 text-gray-600">{blog.body}</p>


              <div>
                  <a href="##" className="mt-4 text-orange-500 font-semibold text-base"

                  >Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>


      <button className="bg-cyan-600 text-white p-2 mx-3 rounded-lg shadow-lg" onClick={handleChange}>Change things</button>
    </div>
  );
};

export default Blog;
