import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule} from '@angular/router';
import { links } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { DailyImageComponent } from './daily-image/daily-image.component';
import { UfoComponent } from './ufo/ufo.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AsteroidsComponent,
    DailyImageComponent,
    UfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(links)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
