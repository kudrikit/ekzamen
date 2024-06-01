import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./city-search.component.css']
})

export class CitySearchComponent {
  city: string = "";
  weatherData: any;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  searchWeather() {
    this.http.get<any>(`http://localhost:3000/weather/${this.city}`)
      .subscribe(data => {
        this.weatherData = data;
      }, error => {
        console.error('Error fetching weather data:', error);
      });
  }

  logout(): void {
    this.userService.logout();
  }

  isUserAuth(): boolean {
    return this.userService.isUserAuth();
  }
}
