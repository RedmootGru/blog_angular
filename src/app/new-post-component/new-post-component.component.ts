import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup;
  newPost: Post;

  constructor(private formBuilder: FormBuilder,
              private postsService: PostsService,
              private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }

  onCreateBook() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    newPost.id = this.postsService.getNextId();
    this.postsService.createPost(newPost);
    this.router.navigate(['/posts']);
  }

  private initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

}
