import {Injectable} from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {


  posts: Post[] = [];
  postsSuject = new Subject<Post[]>();

  constructor() {
    const newPost = new Post('Mon premier post', 'bla bla bla');
    newPost.id = this.getNextId();
    this.posts.push(newPost);
  }

  getNextId(): any {
    let max: number;
    max = 0;
    this.posts.forEach((p: Post) => {
      if (p.id > max) {
        max = p.id;
      }
    });

    return max + 1;
  }

  emitPosts() {
    this.postsSuject.next(this.posts);
  }

  createPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(index: number) {

    const post = this.getPostById(index);

    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }


  getPostById(id: number): Post {
    let post: Post;
    this.posts.forEach((p: Post) => {
      if (p.id === id) {
        post = p;
      }
    });
    return post;
  }


  loveIts(id: number) {
    this.getPostById(id).loveIts++;
    this.emitPosts();
  }

  dontLoveIts(id: number) {
    this.getPostById(id).loveIts--;
    this.emitPosts();
  }
}
