import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'http://localhost:4225/posts/';
  
  constructor(private http: HttpClient) { }

  addPost(post: Post): Observable<Post> {
    return this.http.post(this.baseUrl, post).pipe(
      map(data => data as Post)
      // catchError(error => )
    );
  }

  getAllPosts(): Observable<Post[]>{
    return this.http.get(this.baseUrl).pipe(
      map(allPosts => allPosts as Post[])
    );
  }

  getPost(id: number): Observable<Post>{
    return this.http.get(this.baseUrl + id ).pipe(
      map(post => post as Post)
    );
  }

  updatePost(post: Post): Observable<Post>{
    return this.http.put(this.baseUrl + post.id, post).pipe(
      map(data => data as Post));
  }

  deletePost(id: number){
    return this.http.delete(this.baseUrl + id).pipe(
      tap(() => alert('Post Deleted Succesfully'))
    );
  }
}
