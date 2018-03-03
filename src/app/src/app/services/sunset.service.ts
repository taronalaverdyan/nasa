import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
const sunriseApiEndPoint = "https://api.sunrise-sunset.org/json";

@Injectable()

export class SunsetService {

  constructor(public http:HttpClient) {}

  getSunsetDate(lat, lon, date){
      return this.http.get(`${sunriseApiEndPoint}?lat=40.0&lng=44.0`);
  }

}
