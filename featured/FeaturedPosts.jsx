import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css' 

import { FeaturedPostCard } from '../components'
import { getFeaturedPosts } from '../services'