import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/post';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'blg-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post: Post;
  private sub: Subscription;
  editForm: FormGroup;
  constructor(private fb: FormBuilder, private postsService: PostsService, private router: Router,
              private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getPost(id);
      }
    );

    this.editForm = this.fb.group({
      id: [0],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      description: ['']
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPost(id){
    this.postsService.getPost(id).subscribe({
      next: (post: Post) => {
        this.setFormValue(post);
      },
      error: (err) => {
        this.onGetError(err);
      },
      complete: () => {
        alert('Data retrieved succesfully');
      }
    });
  }

  setFormValue(gottenPost: Post){
    this.editForm.patchValue({...gottenPost});
  }

  onGetError(err) {
    alert('An error ocurred while getting the post');
    console.error(err);
  }

  onUpdateError(err){
    alert('An error ocurred while updating the post');
    console.error(err);
  }

  onSuccess() {
    alert('Post updated succesfully');
    this.editForm.reset();
    this.onUpdated();
  }
  updatePost(){
    this.postsService.updatePost(this.editForm.value).subscribe({
      next: () => this.onSuccess(),
      error: (err) => this.onUpdateError(err)
    });
  }
  onUpdated(){
    this.router.navigate(['']);
  }
}
