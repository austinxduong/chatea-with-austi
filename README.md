# Chatty, Chat Tea, with austi   ð

<em><div align=center> What's on your mind?</em></div>

#### Purpose ð  : 

    â  Honestly.... tired of hosting my work on SquareSpace (I love it though), plus its expensive. 
    â  Also couldn't find the "ideal" blogging platform, implementation + cost that fits my needs. 
    â  After 7 years, decided to build/host my own. Migrating all my writing content will be next goal

#### Tech Haul ðï¸ :
``` 
    â  Next.js
    â  React
    â  Tailwind CSS
    â  SASS
    â  GraphQL
    â  GraphCMS
    â  Vercel
```

#### Schema Modeling ð¦ : 
```
Model 1:
    Author:
        â  Name
        â  Photo
        â  Bio
Model 2:
    Category:
        â  Name
        â  Slug
        â  Post
        
Model 3:
    Comment:
        â  Name
        â  Email
        â  Comment

Model 4:
    Post: 
        â  Title
        â  Slug
        â  Excerpt
        â  Content
        â  Featured Image
        â  Featured Post
        â  Author
        â  Categories
```
#### Product Roadmap ð :
```

```

#### Enhancement Request(s) â¨ : 
```
- some spotify api in the future ð¶

```

#### Ticket(s) ð¦ : 
```diff
â  Resolved:
+ Bug:"Warning: Each child in a list should have a unique âkeyâ prop"
    - passed in index as second argument, assign index to key prop. assigned node to post prop
+ Bug: "Build Failed" - something about Netlify dependencies 
    - migrated to vercel
+ Bug: Font "Raleway" renders as global font family in local/dev environment. But prod renders "Playfair" as entire font family instead.
    - attempted to create font family custom rule on tailwind.config file for raleway
    - attempted to ensure matching names in global.scss for font family key/prop
    - ensured correct import url for Raleway font
    - ensured correct spelling for font name in targeted class
    - cleared all cache in both chrome & brave browsers
    - switched from raleway font to outfit font
    - moved fontfamily key/prop value out of extend object, into theme object via tailwind.config
    - ensured proper syntax for custom css font family
    - ensured proper syntax for global.scss font family key/prop value
    - verified font name is passed in the dom via dev tools. but actual font is not rendered on client
    (isolate the issue even more)
        - font renders locally, but not prod. so it works. it seems the request is being made from the client, but the request isn't being sent

â  WIP: 

```

#### BackLog(s) ð¾ :
```

```

#### Leadership/Management ð° : 
```
â  austi, owner:
   - Accounting/Finance
   - Operations
   - Human Resources
   - Information Technology 
   - Sales/Marketing

master partner, svp = '[]' => {
   
â  vp
â  vp
â  vp
â  vp
â  vp
â  vp 
â  vp

}

```


![imadethis](https://user-images.githubusercontent.com/78833034/143502621-a0259c43-747e-4321-a909-76ff2726391f.jpg)



### Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment))
