import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {Routes} from '@angular/router/src/config';
import {RouterModule} from '@angular/router';
import {PostsService} from './services/posts.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  {path : 'posts', component: PostListComponentComponent},
  {path: 'new', component: NewPostComponentComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponentComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
