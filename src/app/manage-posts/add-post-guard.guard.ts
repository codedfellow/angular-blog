import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPostComponent } from './add-post/add-post.component';

@Injectable({
  providedIn: 'root'
})
export class AddPostGuardGuard implements CanDeactivate<AddPostComponent> {
  canDeactivate(
    component: AddPostComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.postForm.dirty) {
        return confirm('Your changes to the form will not be saved!');
      }
    return true;
  }
  
}
