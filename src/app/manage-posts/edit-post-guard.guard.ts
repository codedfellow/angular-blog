import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditPostComponent } from './edit-post/edit-post.component';

@Injectable({
  providedIn: 'root'
})
export class EditPostGuardGuard implements CanDeactivate<EditPostComponent> {
  canDeactivate(
    component: EditPostComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.editForm.dirty) {
        return confirm("Your changes will not be saved");
      }
    return true;
  }
}
