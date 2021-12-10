import Head from 'next/head'
import { PostCard, Categories, PostWidget, Socials } from '../components';
import { getPosts } from '../services'

export default function Home ({ posts }) {
  return (
    <div className="container mx-auto px-1 lg:px-0 mb-8 opacity-96">
      <Head>

        <meta
          property="og:image"
          content="https://i.imgur.com/2WpAoMm.png"
        />
        
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap" rel="stylesheet" />

        <title>austinxduong 🕊️✨</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => 
          <PostCard 
          post={post.node} 
          key={index}/> 
          )}
          </div>
          <div className="lg:col-span-4 col-span-1">
              <div className="lg:sticky relative top-8 pb-2">
                <div className="max-h-full md:max-h-screen overflow-y-auto">
                  <PostWidget />
                  <Categories />
                  <Socials />
                </div>
              </div>
          </div>
          </div>
        </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }

}
