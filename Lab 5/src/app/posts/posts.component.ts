import { Component, OnInit } from '@angular/core';
import { PostsResponse } from '../postsResponse';
import { PostsService } from '../posts.service';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 
  posts: PostsResponse[] = []
  columnsToDisplay: string[] = ['userid', 'id', 'title', 'favorite']
  loadCompleted: boolean = false

  constructor(
    private postsService: PostsService, 
    private favoriteService: FavoriteService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getWeather()
  }

  addToFavorite(event: any, item: PostsResponse) {
    event.stopPropagation()
    this.favoriteService.add(item)
  }

  isFavorite(item: PostsResponse): boolean {
    return this.favoriteService.hasRecord(item)
  }

  openDialog(item: PostsResponse): void {
    this.dialog.open(PostDetailsComponent, {
      data: item
    })
  }

  getWeather(): void {
    this.postsService.getPosts().subscribe({
        next: (data: any) => this.posts = data,
        complete: () => this.loadCompleted = true
      }
    )
  }
}
