import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HarmonicsPlayerComponent } from './harmonics-player/harmonics-player.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HarmonicsPlayerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
