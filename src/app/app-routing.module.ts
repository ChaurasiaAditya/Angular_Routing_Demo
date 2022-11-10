import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewoneblogComponent } from './viewoneblog/viewoneblog.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"blogs",
    component:BlogsComponent
  },
  {
    path:"notes",
    component:NotesComponent
  },
  {
    path:"product",
    component:ViewproductComponent
  },
  {
    path:"viewoneblog/:id",
    component:ViewoneblogComponent
  },
  {
    path:"**",
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
