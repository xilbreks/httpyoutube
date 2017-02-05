import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { YouTubeSearchComponent,SearchResultComponent,SearchBox, youTubeServiceInjectables } from './app.component';

@NgModule({
  declarations: [
    SearchBox,
    YouTubeSearchComponent,
    SearchResultComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    youTubeServiceInjectables
  ],
  bootstrap: [YouTubeSearchComponent]
})
export class AppModule { }
