import { Component, Input } from '@angular/core';
import { Comment1 } from 'src/app/models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent  {

  @Input()
  comment: Comment1;

  constructor() { }

}
