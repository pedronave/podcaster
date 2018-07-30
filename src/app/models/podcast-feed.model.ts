import { PodcastEpisode } from './podcast-episode.model';
export class PodcastFeed {
  feed: {
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
  };

  items: PodcastEpisode[];

  constructor( response ) {
    this.feed = response.feed;
    this.items = response.items;
  }
}
