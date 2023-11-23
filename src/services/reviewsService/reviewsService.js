import { apolloClient } from '../../graphql.js';
import { GET_ALL_REVIEWS } from './queries.js';
import config from '../../config/config.json';

class ReviewsService {
  async getAllReviews() {
    try {
      const { data } = await apolloClient.query({ query: GET_ALL_REVIEWS });

      return data.reviews;
    } catch (error) {
      console.error('Error fetching reviews:', error);

      return config.reviews;
    }
  }
}

export default new ReviewsService();
