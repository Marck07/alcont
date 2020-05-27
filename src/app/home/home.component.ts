import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

  constructor() { }

  customOptions: any = {
   loop: true,
   autoplay: true,
   mouseDrag: true,
   touchDrag: true,
   pullDrag: true,
   dots: false,
   navSpeed: 700,
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


}
