import { apolloClient } from '../../graphql.js';
import { GET_ALL_REVIEWS, GET_ONE_REVIEW } from './queries.js';
import configData from '../../config/reviewsData.json';

class ReviewsService {
  async getAllReviews() {
    try {
      const { data } = await apolloClient.query({ query: GET_ALL_REVIEWS });

      return data.reviews || configData.reviews;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  }

  async getOneReview(id) {
    try {
      const { data } = await apolloClient.query({ query: GET_ONE_REVIEW, variables: { id } });

      return data.review || configData.reviews[0];
    } catch (error) {
      console.error('Error fetching review:', error);
      throw error;
    }
  }
}

export default new ReviewsService();
