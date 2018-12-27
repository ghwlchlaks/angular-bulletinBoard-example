import {
    trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
// Routable animations
export const slideInAnimation =
trigger('routeAnimation', [
    transition('HomePage <=> BoardPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
        style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
        })
    ]),
    query(':enter', [
        style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
        query(':leave', [
        animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
        ])
    ]),
    query(':enter', animateChild()),
    ])
]);

export const slideInAnimation1 =
trigger('routeAnimation', [
  transition('BoardPage <=> AddPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

export const slideInAnimation2 =
trigger('routeAnimation', [
  transition('main <=> serve', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);
