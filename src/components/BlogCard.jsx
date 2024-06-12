import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <a href={blog.url} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-400 mb-2">{blog.year}</p>
      <h3 className="text-2xl font-bold text-teal-400">{blog.title}</h3>
    </a>
  );
};

export default BlogCard;
