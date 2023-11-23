import { apolloClient } from '../../graphql.js';
import { GET_TAGS } from './queries.js';
import config from '../../config/config.json';

class TagsService {
  async getTags() {
    try {
      const { data } = await apolloClient.query({ query: GET_TAGS });

      return data.tags;
    } catch (error) {
      console.error('Error fetching tags:', error);

      return config.tags;
    }
  }
}

export default new TagsService();
