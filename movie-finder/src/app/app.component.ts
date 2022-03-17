import { Component } from '@angular/core';
import { OmdbApiService } from './services/omdb-api.service';
import { IOMDBResponse } from './omdbresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {
  title = 'movie-finder';
}
