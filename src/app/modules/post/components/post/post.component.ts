import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Post} from "../../../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post:Post;
  currentButton:number;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  navTo(){
    this.router.navigate([this.post.id],{relativeTo: this.activatedRoute})
  }
}
