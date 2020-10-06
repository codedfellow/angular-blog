import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { EditPostGuardGuard } from './edit-post-guard.guard';
import { AddPostGuardGuard } from './add-post-guard.guard';

const routes = [
  { path: 'addpost', canDeactivate: [AddPostGuardGuard], component: AddPostComponent },
  { path: 'editpost/:id', canDeactivate: [EditPostGuardGuard], component: EditPostComponent },
  { path: 'postdetail/:id', component: PostDetailComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [AddPostComponent, EditPostComponent, HomeComponent, PostDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PostManagementModule { }
