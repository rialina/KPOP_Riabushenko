import { Injectable } from '@angular/core';
import { PostsResponse } from './postsResponse';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favorite: PostsResponse[] = []
  constructor() { }

  add(record: PostsResponse) {
    this.favorite.push(record)
  }

  hasRecord(item: PostsResponse): boolean {
    if (this.favorite.find(record => record.title === item.title)) {
      return true
    }
    return false
  }
}
