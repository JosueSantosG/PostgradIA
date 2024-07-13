import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/interfaces/oferta';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  maestria: Oferta[]=[];
  userData:any;
  maestriaSeleccionada: any;
  

  constructor(private userService: UserService,private http: HttpClient,private router: Router,){ //TODO estoy inyect
    this.maestriaSeleccionada = ''; 
  }
  ngOnInit() {
    // Obtener el nombre del usuario cuando se inicializa el componente
     /* this.userData = this.userService.getUserData(); */
     /* console.log(this.userData); */
     

    this.getMaestrias();
    
  }

    seleccionarMaestria(id_oferta: number) {
    this.maestriaSeleccionada = id_oferta;
  }

  getMaestrias() {
    this.userService.mostrarMaestrias().subscribe(
      (data: any) => {
        if (data && data.maestrias) {
          this.maestria = data.maestrias;
        } else {
          console.error('Los datos recibidos no tienen la estructura esperada.');
        }
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  };

/*   getMaestrias() {
    this.userService.mostrarMaestrias().subscribe(
      (data: any) => {
        if (data && data.userPersona) {
          this.maestria = data.userPersona;
        } else {
          console.error('Los datos recibidos no tienen la estructura esperada.');
        }
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  } */

  enviarMaestria() {
    const maestria = this.maestriaSeleccionada;
    this.router.navigate(['/review-documents', maestria]);
/*     this.userService.mostrarDocumentos(maestria).subscribe(response => {
      // Maneja la respuesta aquí, si es necesario
      console.log(response);
    }); */
  }
  
  



}
