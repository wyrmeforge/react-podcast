import { gql } from '@apollo/client';

export const GET_ALL_PODCASTS = gql(`
  query getAllPodcasts {
    podcasts {
      data {
        id
        attributes {
         title
         publishedAt
         description
         tags
         episodeTime
         episode
         platforms
         image {
             data {
               attributes {
                 url,
                 alternativeText
               }
             }
          }
         hosts {
           image {
             data {
               attributes {
                 url
                 alternativeText
               }
             }
           }
           name
         }
        }
      }
    }
  }
`);
