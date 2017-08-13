import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const slideUpDown = trigger('slideUpDown', [
  state('down', style({transform: 'translateY(0)'})),
  state('up', style({transform: 'translateY(-100%)'})),
  transition('up => down', [
       animate(300, keyframes([
        style({transform: 'translateY(-100%)', offset: 0}),
        style({transform: 'translateY(10%)',  offset: 0.3}),
        style({transform: 'translateY(0)',     offset: 1.0})
      ]))
  ]),
  transition('down => up', [
        animate(300, keyframes([
        style({transform: 'translateY(0)',     offset: 0}),
        style({transform: 'translateY(10%)', offset: 0.7}),
        style({transform: 'translateY(-100%)',  offset: 1.0})
      ]))
  ])
]);