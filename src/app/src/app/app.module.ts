import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';

import { SunsetService} from './services/sunset.service'
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member-list/member-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SunsetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
