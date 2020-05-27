import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
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
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMail (){

  }
}
