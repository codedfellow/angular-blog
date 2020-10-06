import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from 'src/app/post';
import { Router } from '@angular/router';

@Component({
  selector: 'blg-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
post: Post;
postForm: FormGroup;
  constructor(private fb: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      description: ['']
    });
  }

  addPost(event){
    console.log(event);
    let p = {...this.post, ...this.postForm.value};
    this.postsService.addPost(p).subscribe({
      next: () => {
        this.onSuccess();
      },
      error: (err) =>{
        this.onError(err);
      }
    });
  }

  onError(err){
    alert('An error ocurred while adding the post');
    console.error(err);
  }

  onSuccess(){
    alert('Post added succesfully');
    this.postForm.reset();
    this.onUpdated();
  }

  onUpdated(){
    this.router.navigate(['']);
  }
}
