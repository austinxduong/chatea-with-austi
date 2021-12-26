import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Socials = () => {
    return (
        <div className="bg-white p-3 mb-20 animate-fade-in-up">
            <h3 className=" font-nanu uppercase mb-2 border-b pb-b4 animate-fade-in-up">
                Socials:
            </h3>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1 animate-fade-in-up">
                <Image
                    src={"/github.png"}
                    height="20px"
                    width="20px"
                    alt="Github"
                    className="float-left"
                    cite="https://www.flaticon.com/authors/hight-quality-icons"
                    />
                <Link href="https://github.com/austinxduong">
                    <a className="ml-2 hover:text-pink-100 duration-400">
                        GitHub
                    </a>
                </Link>
            </span>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1 animate-fade-in-up">
                <Image
                    src={"/linkedin.png"}
                    height="20px"
                    width="20px"
                    alt="LinkedIn"
                    className="float-left"
                    cite="https://www.flaticon.com/authors/najmunnahar"
                />
                <Link href="https://www.linkedin.com/in/austinxduong/">
                    <a className="ml-2 hover:text-pink-100 duration-400">
                        LinkedIn
                    </a>
                </Link>
            </span>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1 animate-fade-in-up">
                <Image
                    src={"/facebook.png"}
                    height="20px"
                    width="20px"
                    alt="facebook"
                    className="float-left"
                    cite="https://www.flaticon.com/authors/najmunnahar"
                    />
                <Link href="https://www.facebook.com/axduongproductions/">
                    <a className="ml-2 hover:text-pink-100 duration-400">
                        Facebook
                    </a>
                </Link>
            </span>
            <span className="cursor-pointer flex items-center flex-grow ml-4 transition duration-500 ease transform hover:-translate-y-1 animate-fade-in-up">
                <Image
                    src={"/instagram.png"}
                    height="22px"
                    width="22px"
                    alt="instagram"
                    className="float-left"
                    cite="https://www.flaticon.com/authors/grow-studio"
                    />
                <Link href="https://www.instagram.com/austinxduong/?hl=en">
                    <a className="ml-2 hover:text-pink-100 duration-400">
                        Instagram
                    </a>
                </Link>
            </span>
        </div>
    )
}

export default Socials;
