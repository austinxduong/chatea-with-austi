import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css' 
import Image from 'next/image'

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

const responsive = {
    ultraScreenDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
    },
    regulaDegulaDesktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 2,
    },
};

const FeaturedPosts = () => {
    const [featuredPosts, updateFeaturedPosts] = useState([]);
    const [dataLoaded, updateDataLoaded] = useState(false);
  
    useEffect(() => {
      getFeaturedPosts()
        .then((result) => {
          updateFeaturedPosts(result);
          updateDataLoaded(true);
      });
    }, []);
  
    const leftArrow = (
      <div className="md:absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-aba-100 rounded-full opacity-80">

      </div>
    );
  
    const rightArrow = (
      <div className="absolute arrow-btn text-center py-3 cursor-pointer bg-aba-100 rounded-full opacity-80">

      </div>
    );
  
    return (
      <div className="mb-8 animate-fade-in-down">
        <Carousel infinite leftArrow={leftArrow} rightArrow={rightArrow} responsive={responsive} itemClass="px-4">
          {dataLoaded && featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
        </Carousel>
        </div>
    );
  };
  
  export default FeaturedPosts;