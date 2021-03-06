import Head from 'next/head'
import { PostCard, Categories, PostWidget, Socials } from '../components';
import { FeaturedPosts } from '../featured/index';
import { getAllPosts } from '../services';



export default function Home ({ posts }) {
  return (
    <div className="container mx-auto px-1 lg:px-0 mb-8 opacity-96">
            <FeaturedPosts />

      <Head>
        <meta 
        property="og:image"
        content="https://i.imgur.com/D2GyUY7.png"
        />
        <meta
        property="og:title"
        content="CHATEA WITH AUSTI— curated & coded by Austin X. Duong, Software Engineer"
        />
        <meta
        property="og:description" 
        content="Modern Blog Application 2021 — Built with Next.js, React, SASS, TailWind CSS, GraphQL, GraphCMS, Vercel."
        />
       <meta
        property="og:type"
        content="article"
        />
         <meta
        property="og:url"
        content="https://chateawithausti.vercel.app/"
        />
        <meta 
        property="twitter:card"
        content="summary_large_image"
        />
        <meta
        property="twitter:site"
        content="@austinxduong" 
        />
        <meta 
        property="twitter:title"
        content="CHATEA WITH AUSTI— curated & coded by Austin X. Duong, Software Engineer"
        /> 
          <meta
        property="twitter:description"
        content="Modern Blog Application 2021 — Built with Next.js, React, SASS, TailWind CSS, GraphQL, GraphCMS, Vercel."
        />
        <meta
        property="twitter:image"
        content="https://i.postimg.cc/kMs14PfD/twitter.png"
        />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300&display=swap" rel="stylesheet"></link>
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
  const posts = (await getAllPosts()) || [];

  return {
    props: { posts }
  }

}
