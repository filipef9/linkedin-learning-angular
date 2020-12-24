import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit {

  query: string;
  artists: object;
  selectedArtist: object;

  constructor(
    private http: HttpClient
  ) {
    this.query = '';
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe(data => {
      this.artists = data;
    })
  }

  showArtist(artist): void {
    this.query = artist.name;
    artist.highlight = !artist.highlight;
    this.selectedArtist = artist;
  }

}
