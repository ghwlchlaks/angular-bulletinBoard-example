import {
    trigger,
    transition,
    style,
    animate
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
    transition('HomePage <=> BoardPage', [
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
        ]),
          transition(':leave', [
            animate('1000ms ease-in', style({transform: 'translateY(-100%)'}))
        ])
    ])
]);
