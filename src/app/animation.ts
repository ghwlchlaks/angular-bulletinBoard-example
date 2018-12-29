import {
    trigger, animateChild, group,
    transition, animate, style, query, state
  } from '@angular/animations';
// Routable animations

/* 하나의 route-oultlet에 한개의 trigger */
export const slideInAnimation2 =
trigger('routeAnimation', [
  state('*', style({
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)'
  })),
  transition('main => serve', [style({top: '100%'}), animate('.3s', style({
    top: 0
  }))]),

  transition('serve => main', [style({bottom: '100%'}), animate('.3s', style({
    bottom: 0
  }))]),


  transition('HomePage => BoardPage', [style({top: '100%'}), animate('.3s', style({
    top: 0
  }))]),

  transition('BoardPage => HomePage', [style({bottom: '100%'}), animate('.3s', style({
    bottom: 0
  }))])
]);

