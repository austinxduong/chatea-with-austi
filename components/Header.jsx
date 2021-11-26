import React, { useContext} from 'react'

import Link from 'next/link';
import { Categories } from '.';

const categories = [{name: 'Personal Development', slug: 'Personal Development'}, {name: 'Professional Development', slug: 'professionaldevelopement'}]

const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <Link href="/">
                    <span className="cursor-pointer font-bold text-4xl text-black">
                        Chatty, Chatea, with austi
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                </Link>
            ))}
            </div>
    </div>

    )
}

export default Header
