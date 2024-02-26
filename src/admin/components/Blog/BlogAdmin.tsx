import { useRepository } from '@/hooks/CustomHook';
import { BlogPostFormData } from '@/types/data';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import BlogSection from './BlogSection';

const BlogAdmin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BlogPostFormData>(); 
  const repository = useRepository(); 

  const onSubmit: SubmitHandler<BlogPostFormData> = async (data ) => { 
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.photo) {
      formData.append('blogImage', data.photo[0]);
    }
    if (data.video) {
      formData.append('blogVideo', data.video[0]);
    }
    
    try {
      const response = await repository.repo.createBlogPost(formData); 
      if (response) {
        toast.success('Blog post submitted successfully!');
        console.log(data)
      } else {
        toast.error('Failed to submit blog post!');
        console.log(data)
      }
    } catch (error) {
      console.error('Error submitting blog post:', error);
      console.log(data)
      toast.error('An error occurred while submitting blog post!');
    }
  };
return (
    <>
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold mb-4">Blog Section</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title', { required: true })}
              className="w-full mx-2 my-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 h-14"
            />
            {errors.title && <span className="text-red-500">Title is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              {...register('content', { required: true })}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              rows={8}
            ></textarea>
            {errors.content && <span className="text-red-500">Content is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
              Photo
            </label>
            <input
              type="file"
              id="blogImage"
              {...register('photo')}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="video" className="block text-sm font-medium text-gray-700 mb-1">
              Video
            </label>
            <input
              type="file"
              id="blogVideo"
              {...register('video')}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              accept="video/*"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-block bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
      <BlogSection />
    </>
  );
};

export default BlogAdmin;
