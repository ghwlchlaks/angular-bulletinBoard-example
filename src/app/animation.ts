import {
    trigger, animateChild, group,
    transition, animate, style, query, state
  } from '@angular/animations';
// Routable animations

export const slideInAnimation2 =
trigger('routeAnimation', [
  state('*', style({
    position: 'relative',
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
  }))]),

  transition('BoardPage => AddPage', [style({bottom: '100%'}), animate('.3s', style({
    bottom: 0
  }))]),

  transition('AddPage => BoardPage', [style({top: '100%'}), animate('.3s', style({
    top: 0
  }))]),

  transition('* => BoardPage', [
    query(':enter, :leave', style({position: 'relative', width: '100%'})),
    group([
      query(':enter', [
        style({left: '100%'}),
        animate('.3s', style({left: 0}))
      ], {optional: true}),
      query(':leave', [
        style({right: '100%'}),
        animate('.3s', style({right: 0}))
      ], {optional: true})
    ])
  ]),
  transition('* => AddPage', [
    query(':enter, :leave', style({position: 'relative', width: '100%'})),
    group([
      query(':enter', [
        style({right: '100%'}),
        animate('.3s', style({right: 0}))
      ], {optional: true}),
      query(':leave', [
        style({right: '100%'}),
        animate('.3s', style({right: 0}))
      ], {optional: true})
    ])
  ])
]);
