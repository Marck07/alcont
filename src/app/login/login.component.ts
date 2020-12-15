import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

// Servicios
import { AuthService } from  '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public pageRoute;
  public email;
  public password;
  public hide = true;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService:  AuthService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public login() {
    console.log("entro a login")
    this.authService.login(this.email, this.password).then(response => {
        console.log(response);
    }).catch(error => {
      console.log(error);
      switch(error.code) {
        case 'auth/argument-error':
          this.alert("Favor de escribir usuario y contraseña de manera correcta.");
          break;
        case 'auth/invalid-email':
          this.alert("Favor de revisar que el correo tenga el formato correcto.");
          break;
        case 'auth/user-not-found':
          this.alert("El usuario no fue encontrado, favor de contactar al administrador.");
          break;
        case 'auth/wrong-password':
          this.alert("Credenciales invalidas, favor de revisar su usuario y contraseña.");
          break;
        default:
          this.alert("Ocurrió un problema, favor de intentar más tarde.");
          break;
      }
    });
  }

  alert(message: string) {
    this.snackBar.open(message, 'Aceptar', {
      duration: 5000,
    });
  }
}
