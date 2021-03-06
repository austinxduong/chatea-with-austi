
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';


const Categories = () => {
    const [categories, updateCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => updateCategories(newCategories))
    }, []);

    return (
        <div className="bg-white shadow-lg p-3 mb-3 animate-fade-in-up">
            <h3 className="font-nanu uppercase mb-2 border-b pb-b4">
                Selections:
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1">
                        <p className="hover:text-pink-100 duration-400">
                            {category.name}
                        </p>
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories;
