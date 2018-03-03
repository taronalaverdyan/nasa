import { Component } from '@angular/core';
import { SunsetService } from './services/sunset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "Ann";
  number = 1;
  users = [{
                name: "user 1",
                age: 20
          },{
                  name: "user2",
                  age: 26
          },{
                  name: "user3",
                  age: 20
          },{
                  name: "user4",
                  age: 17
          }];

    cars = ["Mersedec","Bmw","VolksWaggen"];
    activeCar = 0;
  constructor(public sunsetService: SunsetService) {

  }
  select(index) {
    this.activeCar = index;
  }
  clicked(lat, long, date) {
    console.log(lat, long, date);

    // this.sunsetService.getSunsetDate(lat, long, date)
    //   .subscribe((date) => {
    //     console.log(date)
    //   })
  }
}
