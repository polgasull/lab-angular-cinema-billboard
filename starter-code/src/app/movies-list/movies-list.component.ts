import { Component, OnInit } from '@angular/core';
import movies from '../../sample-movies';
import { MoviesService } from '../services/movies-service.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList: any[] = movies;

  constructor() { }

  ngOnInit() {
  }

}
