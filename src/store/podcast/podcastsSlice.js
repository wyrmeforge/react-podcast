import { createSlice } from '@reduxjs/toolkit';

import avatar from '../../assets/images/avatar.jpg';
import covid19 from '../../assets/images/covid-19-endemic.png';
import selfConfidence from '../../assets/images/self-confidence.png';
import Perplexed from '../../assets/images/perplexed_mind.png';
import social from '../../assets/images/social_class.png';
import woman from '../../assets/images/womens_rights.png';
import tesla from '../../assets/images/tesla_autopilot.png';

const podcasts = [
  {
    id: 213,
    image: covid19,
    title: 'COVID-19 Endemic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    tags: ['business', 'startup'],
    hostedBy: [
      {
        image: avatar,
        name: 'Jane Doe',
      },
      {
        image: avatar,
        name: 'Peter Parker',
      },
    ],
    episodeNumber: 1,
    date: 'Sep 22, 2021',
    episodeTime: '46min',
    isFeatured: true,
  },
  {
    id: 214,
    image: selfConfidence,
    title: 'Self–confidence',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    tags: ['business', 'startup'],
    hostedBy: [
      {
        image: avatar,
        name: 'Jane Doe',
      },
      {
        image: avatar,
        name: 'Peter Parker',
      },
    ],
    episodeNumber: 1,
    episodeTime: '46min',
    date: 'Sep 22, 2021',
    isFeatured: true,
  },
  {
    id: 211,
    image: Perplexed,
    title: 'Perplexed Mind',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    tags: ['Business', 'startup'],
    hostedBy: [
      {
        image: avatar,
        name: 'Jane Doe',
      },
      {
        image: avatar,
        name: 'Peter Parker',
      },
    ],
    episodeNumber: 1,
    date: 'Sep 22, 2021',
    episodeTime: '46min',
    isFeatured: true,
  },
  {
    id: 219,
    image: social,
    title: 'Social Class',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    tags: ['Comedy', 'Tech'],
    hostedBy: [
      {
        image: avatar,
        name: 'Jane Doe',
      },
      {
        image: avatar,
        name: 'Peter Parker',
      },
    ],
    episodeNumber: 1,
    episodeTime: '46min',
    date: 'Sep 22, 2021',
    isFeatured: true,
  },
  {
    id: 290,
    image: woman,
    title: 'Women’s Rights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    tags: ['Health', 'startup'],
    hostedBy: [
      {
        image: avatar,
        name: 'Jane Doe',
      },
      {
        image: avatar,
        name: 'Peter Parker',
      },
    ],
    episodeNumber: 1,
    episodeTime: '46min',
    date: 'Sep 22, 2021',
    isFeatured: true,
  },
  {
    id: 113,
    image: tesla,
    title: 'Tesla Autopilot',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.',
    tags: ['business', 'startup'],
    hostedBy: [
      {
        image: avatar,
        name: 'Jane Doe',
      },
      {
        image: avatar,
        name: 'Peter Parker',
      },
    ],
    episodeNumber: 1,
    episodeTime: '46min',
    date: 'Sep 22, 2021',
    isFeatured: true,
  },
];

const initialState = {
  podcasts,
};

export const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {},
});

// export const {  } = podcastsSlice.actions;

export default podcastsSlice.reducer;
