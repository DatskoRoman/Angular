import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{

  user: User
  postsUser: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];

      postService.getPostsByUserId(id).subscribe(value => this.postsUser = value);
    });

    this.activatedRoute.data.subscribe(value => this.user = value['data']);

  }

}
