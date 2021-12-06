import React from 'react';
import Link  from 'next/link';
import moment from 'moment';

const PostCard = ({ post }) => (
    <div className="bg-white shadow-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden  pb-80 mb-6">
        <img 
            src={post.featuredImage.url} 
            alt="" 
            className="object-top absolute h-80 w-full object-contain shadow-lg" 
        />
      </div>
  
      <h1 className="uppercase transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-100 text-3xl">
        <Link 
        href={`/post/${post.slug}`}>
        {post.title}
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center transition duration-500 ease transform hover:-translate-y-1">
        <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
            <a href="https://www.linkedin.com/in/austinxduong/">
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg hover:text-pink-100 duration-400">
                  {post.author.name}
              </p>
            </a>
        </div>
        <div className="font-medium text-gray-700">
          <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-2 inline-block bg-black text-lg border-b-2 border-blue-400 rounded-none text-white px-8 py-1 cursor-pointer">
              <p className="transition duration-800 ease hover:text-green-200 font-light">Take a look</p>
            </span>
        </Link>
      </div>
    </div>
  );
  
  export default PostCard;


