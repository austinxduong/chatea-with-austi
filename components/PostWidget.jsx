import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import moment from 'moment';
import { getRecentPosts, getSimilarPosts } from '../services';


const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    
    useEffect(() => {
        if(slug) {
            getSimiliarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
        
    }, [slug])

    console.log(relatedPosts);

    return (
        <div className="bg-white shadow-lg p-3 mb-3 transition duration-500 ease transform hover:-translate-y-1">
           <h3 className="mb-8 border-b pb-b4">
               {slug? 'Related Posts': 'Latest Inspirations'}
           </h3>
          {relatedPosts.map((post =>
            <div key={post.title} className="flex items-center w-full mb-4">
                <div className="w-16 flex none">
                    <img
                        alt={post.title}
                        height="100px"
                        width="100px"
                        className="align-middle transition duration-500 ease transform hover:-translate-y-1"
                        src={post.featuredImage.url}
                    />
                </div>
                <div className="flex-grow ml-4">
                    <p>
                       {moment(post.createdAt).format('MMM DD, YYYY')} 
                    </p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default PostWidget;
