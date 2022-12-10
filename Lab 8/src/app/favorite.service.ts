import { Injectable } from '@angular/core';
import { PostsResponse } from './postsResponse';
import {PostsComponent} from './posts/posts.component'

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorite: PostsResponse[] = []
  constructor() { }

  private observers: PostsComponent[] = []

  public subscribe(subscriber: PostsComponent) {
    this.observers.push(subscriber)
  }

  add(record: PostsResponse) {
    this.favorite.push(record)
    this.observers.forEach(subscriber => {
      subscriber.alertFavorite(record.title)
    })
  }


  hasRecord(item: PostsResponse): boolean {
    if (this.favorite.find(record => record.title === item.title)) {
      return true
    }
    return false
  }
}
