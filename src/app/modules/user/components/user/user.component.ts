import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user:User;
  currentButton: number;

  @Output()
  userName = new EventEmitter<string>();


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
  }
  navTo(){
    this.router.navigate([this.user.id],{relativeTo: this.activatedRoute})
    this.userName.emit(this.user.name)
  }
}
