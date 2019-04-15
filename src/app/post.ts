export class Post {

  title: string;
  content: string;
  loveIts: number;
  createdAt: Date;

  constructor( title: string ) {

    this.title = title;
    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper magna ut lacus pretium aliquam.';
    this.loveIts = 0;
    this.createdAt = new Date();
  }

}
