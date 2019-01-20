import { Component, OnInit } from '@angular/core';
import { faBars, faUserMinus, faComment } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate, query, sequence, stagger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('open', style({ width: '250px' })),
      state('hidden', style({ width: '50px' })),
      transition('open => hidden', [
        query('.text-area', style({
          // transform: 'translateX(0)',
          opacity: 1
        })),
        query('.text-area', animate('150ms', style({ transform: 'translateX(-20%)', opacity: 0, width: '0' }))),
        animate('150ms')
      ]),
      transition('hidden => open', [
        animate('150ms'),
        query('.text-area', style({
          transform: 'translateX(-20%)',
          width: 0,
          opacity: 0
        })),
        query('.text-area', animate('150ms', style({ transform: 'translateX(0)', opacity: 1, width: '!'}))),
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  open = true;
  textShown = true;
  icons = { faBars, faUserMinus, faComment };
  constructor() { }

  toggleOpen() {
    this.open = !this.open;
    this.textShown = !this.textShown;

  }

  get state() {
    return this.open ? 'open' : 'hidden';
  }

  get textState() {
    return this.textShown ? 'open' : 'hidden';
  }

  // onSlideDone(event) {
  // }

  ngOnInit() {

  }

}
