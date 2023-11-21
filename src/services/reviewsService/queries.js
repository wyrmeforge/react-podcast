import { gql } from '@apollo/client';

export const GET_ALL_REVIEWS = gql(`
  query getAllReviews {
    reviews {
      data {
        id
        attributes {
         text
         userName
          platform
          userAvatar{
            data {
              attributes {
                url,
              }
            }
          }
        }
      }
    }
  }
`);

export const GET_ONE_REVIEW = gql(`
  query getOneReview($id: ID) {
    review(id: $id) {
      data {
        id
        attributes {
          text
          userName
          platform
          userAvatar {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`);
