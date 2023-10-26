import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  logoURL: string = ''; 
  noticias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerNoticias();
  }

  obtenerNoticias() {
    const apiUrl = 'https://decodecms.com/wp-json/dcms-seo-yoast/v1/links/594'; 

    this.http.get(apiUrl).subscribe((data: any) => {
      this.noticias = [
        {
          title: {
            rendered: data.title,
          },
          excerpt: {
            rendered: data.description,
          },
          link: data.url,
        },
      ];
    });
  }

  abrirNoticia(url: string) {
    window.open(url, '_blank');
  }
}