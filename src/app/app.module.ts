import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserComponent } from './components/user/user.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersComponent } from './components/users/users.component';
import { StringTypePipe } from './pipes/string-type.pipe';
import { PostResolveService } from './services/post-resolve.service';
import { UserResolveService } from './services/user-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserInfoComponent,
    UsersFormComponent,
    PostComponent,
    PostsComponent,
    PostInfoComponent,
    CommentComponent,
    CommentsComponent,
    StringTypePipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserInfoComponent,
        resolve: { data: UserResolveService }
      },
      {path: "posts",
        component: PostsComponent,
        children:[
          {
            path: ":id",
            component: PostInfoComponent,
            resolve: {data: PostResolveService}
          },
        ]},
      { path: 'comments', component: CommentsComponent },
      { path: 'users-select', component: UsersFormComponent }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
