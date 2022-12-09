import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';

import { HttpClientModule }   from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FavoriteComponent } from './favorite/favorite.component'
import { FavoriteService } from './favorite.service';

const appRoutes: Routes =[
    { path: '', component: PostsComponent},
    { path: 'favorite', component: FavoriteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private service: FavoriteService) {}
}
