import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostResolveService } from './services/post-resolve.service';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    PostInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "posts",
        component: PostsComponent,
        children:[
          {
            path: ":id",
            component: PostInfoComponent,
            resolve: {data: PostResolveService}
          },
        ]},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
