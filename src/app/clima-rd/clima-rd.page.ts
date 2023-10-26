import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima-rd',
  templateUrl: './clima-rd.page.html',
  styleUrls: ['./clima-rd.page.scss'],
})
export class ClimaRdPage implements OnInit {
  clima: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerClima();
  }

  obtenerClima() {
    const apiKey = '';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,do&units=metric&appid=${apiKey}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.clima = data;
    });
  }
}
