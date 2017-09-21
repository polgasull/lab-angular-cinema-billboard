import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';
import { MoviesService } from './services/movies-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
