import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
