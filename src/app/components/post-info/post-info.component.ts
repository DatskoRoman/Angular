import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Post} from 'src/app/models/Post';
import {PostService} from 'src/app/services/post.service';


@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent {

  post: Post

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {

      let id = +value['id'];

      this.postService.getPost(id).subscribe(value => this.post = value);
    })
  }
}
