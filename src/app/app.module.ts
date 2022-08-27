import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './resuable/card/card.component';
import { TitlebarComponent } from './constant/titlebar/titlebar.component';
import { HomeComponent } from './component/home/home.component';
import { ImageCardComponent } from './resuable/image-card/image-card.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TitlebarComponent,
    HomeComponent,
    ImageCardComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
