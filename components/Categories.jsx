import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="bg-white shadow-lg p-3 mb-8 animate-fade-in-up">
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100&display=swap" rel="stylesheet" />
            <h3 className="uppercase mb-2 border-b pb-b4">
                Selections:
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <p className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1">
                        <p className="hover:text-pink-100 duration-400">
                            {category.name}
                        </p>
                    </p>
                </Link>
            ))}
        </div>
    )
}

export default Categories;
