import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.post.loveIts++;
  }

  dontLoveIt() {
    this.post.loveIts--;
  }
}
