import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {
  showMovies: boolean = false;

  constructor(private theMovies: MoviesService) {}

  getMovies() {
    this.showMovies =! this.showMovies;
  }

}
