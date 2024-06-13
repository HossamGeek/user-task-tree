import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-user-tree',
  templateUrl: './user-tree.component.html',
  styleUrl: './user-tree.component.css',
})
export class UserTreeComponent {
  users: User[] = [];
  userTree: User | null = null;

  constructor(private userService: UserService) {
    console.log('done');
  }
  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (value) => {
        this.users.push(value);
      },
      complete: () => {
        this.userTree = this.buildTree(this.users);
      },
    });
  }

  buildTree(users: User[]): User {
    let map = new Map<string, User>();
    let root: User | null = null;

    users.forEach((user) => {
      map.set(user.code, { ...user, children: [] });
    });

    users.forEach((user) => {
      const parentCode = user.code.substring(0, user.code.lastIndexOf('.'));
      if (parentCode) {
        const parent = map.get(parentCode);
        if (parent) {
          parent.children?.push(map.get(user.code)!);
        }
      } else {
        root = map.get(user.code)!;
      }
    });

    return root!;
  }
}
