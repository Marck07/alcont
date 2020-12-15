import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router, private  authService:  AuthService) { }

  ngOnInit(): void {
  }

  public login() {
    console.log("entro a login")
    this.authService.login(this.email, this.password);
  }
}
