import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Userdocs} from 'src/app/interfaces/userdocs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-interfaz-user',
  templateUrl: './interfaz-user.component.html',
  styleUrls: ['./interfaz-user.component.css']
})
export class InterfazUserComponent implements OnInit {
  userData: any;
  userDocuments: any;
  maestria: any;
  maestriaDocs: Userdocs[]=[];
  private fileTmp:any;
  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router){ //TODO estoy inyect

  }

  ngOnInit() {
    // Obtener el nombre del usuario cuando se inicializa el componente
    this.route.params.subscribe(params => {
      this.maestria = params['maestria'];
      this.userService.mostrarDocumentos(this.maestria).subscribe(response => {
        // Maneja la respuesta aquí, si es necesario
        this.userData = response;
        

      });
    });
    

  }

  getFile($event: any): void {
    //TODO esto captura el archivo!
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
    console.log(this.fileTmp);
    
  }
  saveFile(tipoDocumento: string) {
    const idInscripcion = this.userData.userPersona[0].id_inscripcion;
    if (this.fileTmp) {
      const formData = new FormData();
      formData.append('file', this.fileTmp.fileRaw, this.fileTmp.fileName);
      formData.append(tipoDocumento, this.fileTmp.fileName);
      formData.append('id_inscripcion', idInscripcion);

      this.userService.sendFile(formData,idInscripcion).subscribe(res => console.log(res));
      
    } else {
      console.error("No se ha seleccionado un archivo");
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  


  
}
