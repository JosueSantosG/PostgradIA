import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Iniciosesion } from 'src/app/interfaces/iniciosesion';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  clave: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService,
    private userService:UserService) { }

  ngOnInit(): void {
  }

  login() {
    // Validamos que el usuario ingrese datos
    if (this.usuario == '' || this.clave == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }

    // Creamos el body
    const user: Iniciosesion = {
      usuario: this.usuario,
      clave: this.clave
    }

    this.loading = true;
    this._userService.login(user).subscribe({
      next: (response: any) => {    
        this.router.navigate(['/inscripcion-postgrado'])
        localStorage.setItem('token', response.token);
        
/*         this.userData = response;
        this.userService.setUserData(response); */
        
        
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false
      }
    })
  }

  

}