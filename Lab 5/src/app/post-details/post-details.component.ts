import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsResponse } from '../postsResponse';

@Component({
  selector: 'app-weather-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  asText: string = ""
  constructor(@Inject(MAT_DIALOG_DATA) public data: PostsResponse) { }

  ngOnInit(): void {
    this.asText = JSON.stringify(this.data)
  }
}