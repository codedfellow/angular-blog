import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/manage-posts/posts.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Post } from 'src/app/post';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  selectedPost: Post = new Post();

  constructor(private postService: PostsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const routeId = this.activatedRoute.snapshot.paramMap.get('id');
    if (routeId) {
      const id = +routeId;
      this.postService.getPost(id).subscribe({
        next: data => this.selectedPost = data,
        error: err => console.error(err)
      });
    }
  }

  deletePost(id: number){
    if (confirm('Are you sure you want to delete this post?')) {
      this.postService.deletePost(id).subscribe({
        next: () => this.onSuccess(),
        error: (err) => console.error(err)
      });
    }
  }

  onSuccess(){
    this.router.navigate(['']);
  }
}
