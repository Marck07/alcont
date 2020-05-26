import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {}

  title = 'alcont';
  chatView = false;

  chat() {
    this.chatView = !this.chatView;
  }

  sendMessage(numero) {
    console.log(numero);
    var link = "https://web.whatsapp.com/send?phone=" + numero + "+&text=Hola!%20Quiero%20contratar%20sus%20servicios!"    ;
    console.log(link);
    window.open(link, '_blank')
  }

  goHome() {
     this.router.navigate(['']);
  }
  goAboutus() {
     this.router.navigate(['nosotros']);
  }
  goContact() {
     this.router.navigate(['contacto']);
  }
  goPrivacy() {
     this.router.navigate(['/aviso-privacidad']);
  }
}
