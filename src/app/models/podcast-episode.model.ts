export interface PodcastEpisode {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: Enclosure;
  guid: string;
  link: string;
  pubDate: Date;
  thumbnail: string;
  title: string;
}

export interface Enclosure {
  link: string;
  type: string;
  length: number;
  duration: number;
  thumbnail: string;
}
