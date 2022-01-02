import React from 'react'
import moment from 'moment';

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
      let modifiedText = text;
  
      if (obj) {
        if (obj.bold) {
          modifiedText = (<b key={index}>{text}</b>);
        }
  
        if (obj.italic) {
          modifiedText = (<em key={index}>{text}</em>);
        }
  
        if (obj.underline) {
          modifiedText = (<u key={index}>{text}</u>);
        }
      }
    };


    return (
        <div className='bg-white lg:p-0 pb-12 mb-8'>
            <div className="relative shadow-md overflow-hidden mb-6">
            <img
                src={post.featuredImage.url}
                alt={post.title}
                className="object-top h-full w-full"
            />
            </div>
            <div className="px-5 lg:px-11">
                <div className="flex items-center mb-8 w-full">
                    <div className="font-sur uppercase flex items-center mb-4 lg:p-2 mb-0 w-full transition duration-500 ease transform hover:-translate-y-2 inline-block">
                    <img
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full text-sm"
                        src={post.author.photo.url}
                    />
                    <div className="text-xs">
                      <a href="https://www.linkedin.com/in/austinxduong/">
                        <p className="text-sm inline align-middle text-gray-700 ml-2 hover:text-pink-100 duration-400">
                          {post.author.name}
                        </p>
                      </a>
                    </div>
                    </div>
                    <div className="text-gray-700">
                        <span className="align-middle">{moment(post.createdAt).format('MMM DD ✍🏻YYYY')}</span>
                    </div>
                </div>
                <h1 className="text-center uppercase mb-8 lg:pb-6 lg:mx-2 text-3xl font-nanu">{post.title}</h1>
                  <div className="lg:pb-12">
                  {post.content.raw.children.map((typeObj, index) => {
                      const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
                </div>
            </div>
        </div>
    )
}

export default PostDetail;
