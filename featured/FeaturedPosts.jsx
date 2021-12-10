import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css' 

import { FeaturedPostCard } from '../components'
import { getFeaturedPosts } from '../services'

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
    },
};

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getFeaturedPosts()
            .then((result) => {
                setFeaturedPosts(result);
                setDataLoaded(true);
            });
    }, [])
}