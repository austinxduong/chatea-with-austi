import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import React, { useEffect, useState } from 'react';
import { Layout, Header } from '../components'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
      <Component {...pageProps} />
    </Layout>
  )
}

