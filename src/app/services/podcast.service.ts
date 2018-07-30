import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PodcastFeed } from '../models/podcast-feed.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http: HttpClient) { }

  getPodcast(feedUrl: string) {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=' + feedUrl;
    return this.http.get(url).pipe(
      map(res => new PodcastFeed(res))
    );
  }

}
