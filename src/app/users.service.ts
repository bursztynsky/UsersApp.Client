import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './users/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersChanged = new Subject<User[]>();
  private users: User[] = [];

  constructor() {}

  setUsers(users: User[]) {
    this.users = users;
    this.usersChanged.next(this.users.slice());
  }

  getUsers() {
    return this.users.slice();
  }
}
