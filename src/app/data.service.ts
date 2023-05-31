import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs/operators';
import UsersResult from './users/models/users-result.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  usersAppUrl = 'https://localhost:6001/Users?amount=';

  constructor(private http: HttpClient, private usersService: UsersService) {}

  getUsers(amount: number) {
    return this.http
    .get<UsersResult>(this.usersAppUrl + amount)
    .pipe(
      map((result) => {
        return result.content;
      }),
      tap((users) => {
        console.log(users);

        this.usersService.setUsers(users);
      })
    );
  }
}
