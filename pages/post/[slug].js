import React from 'react'
import { getAllposts, getPostDetails } from '../../services';
import { Header, PostDetail, Categories, PostWidget, Comments, CommentsForm, Socials} from '../../components'

const PostDetails = ({ post }) => {


    return (
        <div className="container mx-auto px-0 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post} />

                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                    <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
  
    return {
      props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts();

    return {
        paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
        fallback: false,
    }
}
