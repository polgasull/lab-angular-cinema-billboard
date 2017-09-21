import { TestBed, inject } from '@angular/core/testing';

import { MoviesService } from './movies-service.service';

describe('MoviesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesService]
    });
  });

  it('should be created', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));
});
