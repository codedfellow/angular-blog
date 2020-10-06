import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/manage-posts/posts.service';
import { Post } from 'src/app/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'blg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPosts: Post[];
  
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(arg => this.allPosts = arg.reverse());
  }
}
