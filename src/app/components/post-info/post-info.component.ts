import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  post: Post

  constructor(private activatedRoure: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoure.data.subscribe(value => this.post = value['data'])
  }
  ngOnInit(): void {}
}
