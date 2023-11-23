import router from '../router/root.jsx';
import * as routePaths from '../consts/routerPaths.js';

const toEpisodesPage = () => router.navigate(routePaths.EPISODES);
const toEpisodeDetails = (episodeId) => router.navigate(`${routePaths.EPISODES}/${episodeId}`);
const toPricingSection = () => router.navigate(routePaths.PRICING, { replace: true });
const toRecentEpisodesSection = () =>
  router.navigate(routePaths.RECENT_EPISODES, { replace: true });

export default {
  toRecentEpisodesSection,
  toPricingSection,
  toEpisodesPage,
  toEpisodeDetails,
};
