import React from 'react';
import BlogCard from './BlogCard';

const allBlogs = [
  { id: 1, title: 'Understanding React Hooks', year: '2023', image: '/src/assets/writing1.jpg', url: 'https://yourhashnodeprofile.com/understanding-react-hooks' },
  { id: 2, title: 'A Guide to Next.js', year: '2022', image: '/src/assets/writing2.jpg', url: 'https://yourhashnodeprofile.com/a-guide-to-nextjs' },
  { id: 3, title: 'Introduction to Tailwind CSS', year: '2021', image: '/src/assets/writing3.jpg', url: 'https://yourhashnodeprofile.com/introduction-to-tailwind-css' },
  { id: 4, title: 'Another Blog Post', year: '2020', image: '/src/assets/writing4.jpg', url: 'https://yourhashnodeprofile.com/another-blog-post' },
  // Add more blogs here
];

const BlogsArchive = () => {
  return (
    <section id="blogs-archive" className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-10 underline">Writing Archive</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsArchive;
