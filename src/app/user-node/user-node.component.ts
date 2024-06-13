import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-user-node',
  templateUrl: './user-node.component.html',
  styleUrl: './user-node.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s', style({ opacity: 1 }))]),
    ]),
  ],
})
export class UserNodeComponent {
  @Input() user!: User;
  isOpen: boolean = false;
  openChild() {
    if (!this.isOpen) this.isOpen = true;
    else this.isOpen = false;
  }
}
