import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'alcont';
  chatView = false;
  activeTawkChat = false;
  hide = false;
  pageRoute;
  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {
      this.tawk();
        router.events.subscribe((url:any) => {
          if(url.url) {
            this.pageRoute = url.url;
            console.log(this.pageRoute)
          }
        });
    }
    onActivate(event) {
      window.scroll(0,0);
  }

  tawk() {
    if (this.activeTawkChat) {
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5ed836749e5f6944228fd4a8/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
    }
  }
  chatLive() {
    this.activeTawkChat = true;
    this.hide = true;
    this.tawk();
    this.chat();
  }
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
  goQuestions() {
     this.router.navigate(['/preguntas-frecuentes']);
  }
}
