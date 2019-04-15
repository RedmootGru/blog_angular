import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts: Array<Post>;

  constructor() {

    this.posts = new Array<Post>();


    this.createPost();
    this.createPost();
    this.createPost();
  }



  createPost() {

    this.posts.push(new Post('Article #' + (this.posts.length + 1 )));
  }
}
