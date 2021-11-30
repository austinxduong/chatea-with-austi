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
        <div className="bg-white shadow-lg p-8 mb-8">
            PostWidget placeholder
        </div>
    )
}

export default PostWidget;
