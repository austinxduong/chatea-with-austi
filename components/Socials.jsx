import React from 'react'
import Link from 'next/link'

const Socials = () => {
    return (
        <div className="bg-white p-3 mb-8 animate-fade-in-up">
            <h3 className="uppercase mb-2 border-b pb-b4">
                Socials:
            </h3>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1">
                <Link href="https://github.com/austinxduong">
                    <a className=" hover:text-pink-100 duration-400">
                        GitHub
                    </a>
                </Link>
            </span>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1">
                <Link href="https://www.linkedin.com/in/austinxduong/">
                    <a className="hover:text-pink-100 duration-400">
                        LinkedIn
                    </a>
                </Link>
            </span>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1">
                <Link href="https://www.facebook.com/axduongproductions/">
                    <a className="hover:text-pink-100 duration-400">
                        Facebook
                    </a>
                </Link>
            </span>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1">
                <Link href="https://www.instagram.com/austinxduong/?hl=en">
                    <a className="hover:text-pink-100 duration-400">
                        Instagram
                    </a>
                </Link>
            </span>
        </div>
    )
}

export default Socials;
