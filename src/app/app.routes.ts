import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { DailyImageComponent } from './daily-image/daily-image.component';
import { UfoComponent } from './ufo/ufo.component';

export const links: Routes =[
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'asteroids', component: AsteroidsComponent},
    { path: 'dailyImage', component: DailyImageComponent},
    { path: 'ufo', component: UfoComponent }
]
