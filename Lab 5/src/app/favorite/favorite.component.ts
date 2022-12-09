import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsResponse } from '../postsResponse';
import { FavoriteService } from '../favorite.service';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from '../post-details/post-details.component';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  columnsToDisplay: string[] = ['userid', 'id', 'title']
  @ViewChild(MatTable) table!: MatTable<any>
  
  constructor(
    public favoriteService: FavoriteService, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.favoriteService.favorite)
  }

  renderFavs() {
    this.table.renderRows()
  }

  openDialog(item: PostsResponse): void {
    this.dialog.open(PostDetailsComponent, {
      data: item
    })
  }
}
