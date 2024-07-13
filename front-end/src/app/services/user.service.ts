import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iniciosesion } from '../interfaces/iniciosesion';
import { Persona } from '../interfaces/persona';
import { Oferta } from '../interfaces/oferta';
import { Userdocs } from '../interfaces/userdocs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;
  private userData: any;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/user';
  }
  /* 
   loginIn(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
   } */

  login(iniciosesion: Iniciosesion): Observable<any> {
    return this.http.post<any>(
      `${this.myAppUrl}${this.myApiUrl}/login`,
      iniciosesion
    );
  }

  sendFile(file: FormData, idInscripcion: number): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}/sendFile/${idInscripcion}`;
    return this.http.put<string>(url, file);
  }

  mostrarMaestrias(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(
      `${this.myAppUrl}${this.myApiUrl}/maestriaOferta`
    );
  }

  /*    mostrarMaestrias(){
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}/maestriaOferta`)
   } */

  actualizarDatos(userDocs: Userdocs) {
    return this.http.put<string>(
      `${this.myAppUrl}${this.myApiUrl}/actdoc`,
      userDocs
    );
  }

  /*    mostrarDocumentos(){
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/mostrarDocs`)
   } */

  /*      mostrarDocumentos(maestria: number) {
    // Define el cuerpo de la solicitud con el nombre de la maestría
    const body = { maestria };

    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/mostrarDocs`, body);
  } */

  mostrarDocumentos(maestria: number): Observable<any> {
    // Define el cuerpo de la solicitud con el nombre de la maestría
    return this.http.get<any>(
      `${this.myAppUrl}${this.myApiUrl}/mostrarDocs/${maestria}`
    );
  }

  setUserData(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}
