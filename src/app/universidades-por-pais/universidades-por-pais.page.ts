import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universidades-por-pais',
  templateUrl: './universidades-por-pais.page.html',
  styleUrls: ['./universidades-por-pais.page.scss'],
})
export class UniversidadesPorPaisPage {
  nombrePais: string = '';
  universidades: any[] = [];

  constructor(private http: HttpClient) {}

  buscarUniversidades() {
    const apiUrl = `http://universities.hipolabs.com/search?country=${this.nombrePais}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.universidades = data;
    });
  }

  abrirPaginaWeb(url: string) {
    window.open(url, '_blank');
  }
}
