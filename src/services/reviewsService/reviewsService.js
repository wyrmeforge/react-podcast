import { apolloClient } from '../../graphql.js';
import { GET_ALL_REVIEWS, GET_ONE_REVIEW } from './queries.js';

class ReviewsService {
  async getAllReviews() {
    try {
      const { data } = await apolloClient.query({ query: GET_ALL_REVIEWS });
      return data.reviews || [];
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  }

  async getOneReview(id) {
    try {
      const { data } = await apolloClient.query({ query: GET_ONE_REVIEW, variables: { id } });

      return data.review || [];
    } catch (error) {
      console.error('Error fetching review:', error);
      throw error;
    }
  }
}

export default new ReviewsService();
