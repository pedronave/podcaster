import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchService } from './services/search.service';
import { SearchComponent } from './components/search/search.component';
import { PodcastService } from './services/podcast.service';
import { PodcastComponent } from './components/podcast/podcast.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: '', pathMatch: 'full', redirectTo: '/search'},
  { path: '**', redirectTo: '/search' }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PodcastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SearchService,
    PodcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
