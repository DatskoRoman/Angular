import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    let id = +route.params['id'];

    return this.userService.getUser(id);
  }
}
