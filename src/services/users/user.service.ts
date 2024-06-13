import { Injectable } from '@angular/core';
import users from '../../assets/users.json';
import { from, Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  getUsers(): Observable<User> {
    return from(users);
  }
}
