import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {User} from 'src/app/models/User';
import {ActiveteUserService} from "../../services/activete-user.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {

  @Input()
  user: User;
  path: number;
  activeUser: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private activeUserService: ActiveteUserService) {
  }

  navToDetails() {
    this.router.navigate([this.user.id],
      {relativeTo: this.activatedRoute, state: this.user});

    this.activeUserService.setActiveUser(this.user.id)

    this.activeUserService.getActiveUser().subscribe(value => this.activeUser = value)
  }
}
