import React, { useContext} from 'react'
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Categories } from '.';
import { getCategories } from '../services/functions';

// const categories = [{name: 'Professional', slug: 'professional'}, 
//                     {name: 'Personal', slug: 'personal'}, 
//                     {name: 'Fine Arts', slug:'fine-arts'}, 
//                     {name: 'Technology', slug:'technology'}]

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="container mx-auto h-25 md:h-24 px-10 mb-3 bg-char-100 animate-fade-in-down">
            <div className="w-full inline-block py-7 hover:text-char-100">
                <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer text-4xl text-white">
                        <h1 id="header" className="uppercase transition duration-700 text-center mb-8 font-arimo cursor-pointer hover:text-shadow-shiny">
                        Chatty, Chatea, with Austi
                        </h1>
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents animate-fade-in-down">
                <div className="animate-fade-in-down md:float-right mt-2 align-middle text-white space-x-5 ml-4 transition duration-700 text-center mb-8 cursor-pointer cursor-pointer">
                    <Link href="https://github.com/austinxduong">
                        <a className="hover:text-shadow-shine">
                            GitHub
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/austinxduong/">
                        <a className="hover:text-shadow-shine">
                            LinkedIn
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/axduongproductions/">
                        <a className="hover:text-shadow-shine">
                            Facebook
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/austinxduong/?hl=en">
                        <a className="hover:text-shadow-shine">
                            Instagram
                        </a>
                    </Link>
                </div>
                {/* {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="animate-fade-in-down md:float-right mt-2 align-middle text-white ml-4 transition duration-700 text-center mb-8 cursor-pointer cursor-pointer hover:text-shadow-shine">
                            {category.name}
                        </span>
                    </Link>
            ))} */}
            </div>
        </div>
    </div>

    )
}

export default Header;
