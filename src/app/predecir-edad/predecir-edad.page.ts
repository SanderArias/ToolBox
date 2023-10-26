import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-predecir-edad',
  templateUrl: './predecir-edad.page.html',
  styleUrls: ['./predecir-edad.page.scss'],
})
export class PredecirEdadPage {
  nombre: string = '';
  resultado: any = {};

  constructor(private http: HttpClient) {}

  predecirEdad() {
    const apiUrl = `https://api.agify.io/?name=${this.nombre}`;
    
    this.http.get(apiUrl).subscribe((data: any) => {
      if (data.age) {
        this.resultado.edad = data.age;
        this.resultado.estado = this.obtenerEstado(data.age);
        this.resultado.imagen = this.obtenerImagenEstado(this.resultado.estado);
      }
    });
  }

  obtenerEstado(edad: number): string {
    if (edad < 18) {
      return "Joven";
    } else if (edad < 65) {
      return "Adulto";
    } else {
      return "Anciano";
    }
  }

  obtenerImagenEstado(estado: string): string {
    switch (estado) {
      case "Joven":
        return "assets/images/joven.png";
      case "Adulto":
        return "assets/images/adulto.png";
      case "Anciano":
        return "assets/images/anciano.png";
      default:
        return "";
    }
  }
}
