import React from 'react'
import moment from 'moment';

const PostDetail = ({ post }) => {
    return (
        <div className='bg-white shadow-lg lg:p-0 pb-12 mb-8'>
            <div className="relative overflow-hidden shadow-md mb-6">
            <img
                src={post.featuredImage.url}
                alt={post.title}
                className="object-top h-full w-full"
            />
            </div>
            <div className="px-5 lg:px-11">
                <div className="flex items-center mb-8 w-full">
                    <div className="flex items-center mb-4 lg:p-2 mb-0 w-full transition duration-500 ease transform hover:-translate-y-2 inline-block">
                    <img
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post.author.photo.url}
                    />
                    <div className="">
                        <a href="https://www.linkedin.com/in/austinxduong/">
                            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg transition duration-700 text-center cursor-pointer hover:text-pink-100">
                                {post.author.name}
                            </p>
                        </a>
                    </div>
                    </div>
                    <div className="font-medium text-gray-700">
                        <span className="align-middle">{moment(post.createdAt).format('MMM DD ✍🏻YYYY')}</span>
                    </div>
                </div>
                <h1 className="text-center mb-8 lg:pb-6 lg:mx-2 text-3xl font">{post.title}</h1>
                {/* {post.content.raw.children.map((typeObj, index) => (
                    const children = typeObj.children.map((item, itemIndex) => getItem
                    )

                ))} */}
            </div>
        </div>
    )
}

export default PostDetail;
