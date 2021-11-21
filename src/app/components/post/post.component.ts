import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private router: Router,private  activatedRouter:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navTo(){
    this.router.navigate([this.post.id],{relativeTo: this.activatedRouter})
  }

}
