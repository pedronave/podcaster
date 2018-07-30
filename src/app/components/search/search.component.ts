import { SearchEntry } from './../../models/search-entry.model';
import { SearchResults } from './../../models/search-results.model';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  term: string;
  results: SearchResults;

  constructor(private search: SearchService, private router: Router) { }

  ngOnInit() {
    
  }

  submitSearch() {
    console.log('searching');
    this.search.searchPodcast(this.term).subscribe( res => {
      this.results = res;
      console.log(this.results);
    });
  }

  openPodcast(podcast: SearchEntry) {
    this.router.navigate(['/podcast'], { queryParams: {url: encodeURI(podcast.feedUrl)} });
  }

  encodedFeedUrl(podcast: SearchEntry) {
    return encodeURI(podcast.feedUrl);
  }
}
