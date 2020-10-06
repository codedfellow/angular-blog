import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import '@angular/compiler';
import { PostManagementModule } from './manage-posts/post-management.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './notfound/notfound.component';


const routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  {
    path: 'post',
    loadChildren: () => import('./manage-posts/post-management.module').then(m => m.PostManagementModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
