import React, { useContext} from 'react'

import Link from 'next/link';
import { Categories } from '.';

const categories = [{name: 'Personal Development', slug: 'Personal Development'}, {name: 'Professional Development', slug: 'professionaldevelopement'}]

const Header = () => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-red-100 py-8">
                <div className="md:float-left block">
                <Link href="/">
                    <span className="cursor-pointer text-4xl text-black">
                        Chatty, Chatea, with Austi
                    </span>
                </Link>
            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 hover:bg-black cursor-pointer">
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
