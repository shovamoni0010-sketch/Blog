import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../data/blogData';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = data.find(item => item.id === Number(id));

  if (!blog) return <h1 className="text-center mt-20">Blog Not Found</h1>;

  const related = data.filter(
    item => item.categories === blog.categories && item.id !== blog.id
  );

  return (
    <main className="max-w-[1200px] mx-auto mt-20 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blog.subtitle}</h1>
      <p className="text-gray-500 mb-4">Author: {blog.name}</p>
      <img src={blog.image} className="w-full rounded-lg mb-6" alt="" />

      <div className="text-gray-700 leading-7 mb-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur...</p>
      </div>

      {/* Comments */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-md">
            <p className="font-semibold">Shova</p>
            <p className="text-gray-700">This blog is really helpful!</p>
          </div>
          <div className="border p-4 rounded-md">
            <p className="font-semibold">Moni</p>
            <p className="text-gray-700">I love the explanation</p>
          </div>
        </div>

        <form className="mt-6 flex flex-col gap-3">
          <textarea
            className="border p-3 rounded-md"
            placeholder="Write a comment..."
          ></textarea>
          <button className="bg-green-800 text-white px-4 py-2 rounded-md">
            Submit Comment
          </button>
        </form>
      </section>

      {/* Related Blogs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {related.map(item => (
            <div key={item.id} className="border p-4 rounded-md">
              <img
                src={item.image}
                className="w-full h-[150px] object-cover rounded-md mb-3"
                alt=""
              />
              <h3 className="font-semibold text-lg">{item.subtitle}</h3>
              <p className="text-gray-600 text-sm">{item.name}</p>
              <Link
                to={`/blog/${item.id}`}
                className="text-green-700 font-medium mt-2 inline-block"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
