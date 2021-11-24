import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import { Comment1 } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) {  }

  getComments(): Observable<Comment1[]> {
    return this.httpClient.get<Comment1[]>(this.url)
  }

}
