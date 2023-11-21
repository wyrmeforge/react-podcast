import { apolloClient } from '../../graphql.js';
import { GET_ALL_PODCASTS } from './queries.js';

class PodcastService {
  async getAllPodcasts() {
    try {
      const { data } = await apolloClient.query({ query: GET_ALL_PODCASTS });
      return data.podcasts || [];
    } catch (error) {
      console.error('Error fetching podcasts:', error);
      throw error;
    }
  }
}

export default new PodcastService();
