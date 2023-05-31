import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  subscription: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.subscription = this.usersService.usersChanged.subscribe(
      (recipes: User[]) => {
        this.users = recipes;
      }
    );
    this.users = this.usersService.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
