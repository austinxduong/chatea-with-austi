import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getAllPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection(orderBy: id_DESC) {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      `
    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

export const getLatestInspoPosts = async () => {
  const query = gql `
      query GetPostDetails() {
        posts(
          orderBy: createdAt_DESC
          last: 3
          ) {
            title
            featuredImage {
              url
            }
            createdAt
            slug
          }
      }
  `
  const result = await request(graphqlAPI, query);

  return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql `
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories }}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
    }
  }
`
const result = await request(graphqlAPI, query, { categories, slug });

return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            content {
              raw
            }
          }
        }
    `
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
}

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(orderBy: id_DESC where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

