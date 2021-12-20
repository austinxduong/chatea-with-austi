import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import moment from 'moment';
import { getRecentPosts, getSimilarPosts } from '../services';


const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, updateRelatedPosts] = useState([]);
    
    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug)
                .then((result) => updateRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => updateRelatedPosts(result))
        }
        
    }, [slug])

    console.log(relatedPosts);

    return (
        <div className="bg-white shadow-lg p-3 mb-3 animate-fade-in-up">
           <h3 className=" uppercase mb-8 border-b pb-b4">
               {slug? 'Explore More': 'Latest Inspirations:'}
           </h3>
          {relatedPosts.map((post =>
            <div key={post.title} className="flex items-center w-full mb-4 animate-fade-in-up">
                <div className="w-16 flex none">
                    <img
                        alt={post.title}
                        height="auto"
                        width="100px"
                        className="align-middle"
                        src={post.featuredImage.url}
                    />
                </div>
                <div className="flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1">
                    <p>
                       {moment(post.createdAt).format('MMM DD, YYYY')} 
                    </p>
                    <div className="hover:text-pink-100 duration-400">
                        <Link href={`/post/${post.slug}`} className="text-md" key={post.title}>
                            {post.title}
                        </Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default PostWidget;
