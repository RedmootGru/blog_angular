import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  loveIt(index: number) {
    // this.post.loveIts++;
    this.postsService.loveIts(index);
  }

  dontLoveIt(index: number) {
    // this.post.loveIts--;
    this.postsService.dontLoveIts(index);
  }

  onDelete(index: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce post ?')) {
      this.postsService.removePost(index);
    }
  }
}
