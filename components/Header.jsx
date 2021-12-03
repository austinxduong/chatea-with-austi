import React, { useContext} from 'react'

import Link from 'next/link';
import { Categories } from '.';

const categories = [{name: 'Personal Development', slug: 'Personal Development'}, {name: 'Professional Development', slug: 'professionaldevelopement'}]

const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-3 bg-black">
            <div className="w-full inline-block py-7 hover:text-black">
                <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer text-4xl text-white">
                        <h1 className="transition duration-700 text-center mb-8 font-arimo cursor-pointer hover:text-black">
                        Chatty, Chatea, with Austi
                        </h1>
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 transition duration-700 text-center mb-8 cursor-pointer hover:text-black cursor-pointer">
                            {category.name}
                        </span>
                </Link>
            ))}
            </div>
        </div>
    </div>

    )
}

export default Header;
