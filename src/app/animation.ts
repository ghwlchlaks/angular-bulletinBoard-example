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

  /* homecomponent -> content main component */
  transition('HomePage => *', [style({top: '100%'}), animate('.3s', style({
    top: 0
  }))]),

  transition('* => HomePage', [style({bottom: '100%'}), animate('.3s', style({
    bottom: 0
  }))]),

  /* boardPage <-> board1Page */
  transition('BoardPage => Board1Page', [style({top: '100%'}), animate('.3s', style({
    top: 0
  }))]),

  transition('Board1Page => BoardPage', [style({bottom: '100%'}), animate('.3s', style({
    bottom: 0
  }))]),

  /* board1page <-> serve1page */
  transition('Board1Page => Serve1Page', [style({left: '100%'}), animate('.3s', style({
    left: 0
  }))]),

  transition('Serve1Page => Board1Page', [style({right: '100%'}), animate('.3s', style({
    right: 0
  }))]),

  transition('* => BoardPage', [
    query(':enter, :leave', style({position: 'relative', width: '100%'})),
    group([
      query(':enter', [
        style({right: '100%'}),
        animate('.3s', style({right: 0}))
      ], {optional: true}),
      query(':leave', [
        style({left: '100%'}),
        animate('.3s', style({left: 0}))
      ], {optional: true})
    ])
  ]),
  transition('* => AddPage', [
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
  ])
]);
