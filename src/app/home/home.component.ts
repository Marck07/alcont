import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ArticleDialogComponent } from './article-dialog/article-dialog.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
      trigger('animationInOut', [
          state('in',
              style({ opacity: 1, transform: 'translateY(0)' })),
          transition('void => *', [
              style({ opacity: 0, transform: 'scale(1.05)' }),
              animate('0.5s ease-in')
          ])
      ])
  ]
})
export class HomeComponent implements OnInit {
  public articleCard = {
    title: 'Aplicación Sensor Ultrasónico en Tanque.',
    author: 'Patricia de Luna Bertaud',
    img: 'pendingSource',
    text: "El tanque de aceite está equipado con un sensor ultrasónico inteligente Pepperl + Fuchs que monitorea continuamente el nivel de llenado del tanque y transfiere los datos al sistema de control de nivel superior a través de IO-Link. En base a esta retroalimentación de posición, las válvulas pueden mantener la presión dentro de una décima parte de una barra y la posición con precisión de µm. Ya sea que la tecnología de sensores Pepperl + Fuchs ya esté integrada en la planta o necesite agregarse como una solución de actualización, las ventajas para los usuarios son claras: las válvulas digitales pueden aumentar considerablemente la confiabilidad y reducir el consumo de energía, y por lo tanto han elevado el listón para la planta hidráulica campo."
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  customOptions: any = {
   loop: true,
   autoplay: true,
   mouseDrag: true,
   touchDrag: true,
   pullDrag: true,
   dots: true,
   navSpeed: 600,
   navText: ['<', '>'],
   responsive: {
     0: {
       items: 1
     },
     400: {
       items: 1
     },
     740: {
       items: 1
     },
     940: {
       items: 1
     }
   },
   nav: true
  }

  ngOnInit(): void {

  }

  goContact() {
     this.router.navigate(['contacto']);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth', // 'auto' or 'smooth'
      block: 'nearest',    // 'start', 'center', 'end' or 'nearest'
    });
  }

  showArticle() {
    let dialogRef = this.dialog.open(ArticleDialogComponent, {
      data: this.articleCard
    })
  }
}
