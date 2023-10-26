import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-predecir-generos',
  templateUrl: './predecir-generos.page.html',
  styleUrls: ['./predecir-generos.page.scss'],
})
export class PredecirGenerosPage {
  nombre: string = '';
  genero: string = '';

  constructor(private http: HttpClient) {}

  predecirGenero() {
    const apiUrl = `https://api.genderize.io/?name=${this.nombre}`;
    
    this.http.get(apiUrl).subscribe((data: any) => {
      if (data.gender) {
        this.genero = data.gender;
      }
    });
  }
  
}
