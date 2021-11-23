import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';


import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  myForm: FormGroup;
  users: User[];
  user: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
              private router: Router, ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userId: new FormControl(1)
    })

    this.userService.getUsers().subscribe(value => this.users = value)
  }

  showDetails() {
    const id = this.myForm.controls['userId'].value;

    this.router.navigate([`users/${id}`],  {state: this.user});

  }
}
