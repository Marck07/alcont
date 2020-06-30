import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-frequently-asked',
  templateUrl: './frequently-asked.component.html',
  styleUrls: ['./frequently-asked.component.scss'],
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
export class FrequentlyAskedComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
