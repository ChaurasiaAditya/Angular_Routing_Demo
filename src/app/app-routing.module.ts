import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewoneblogComponent } from './viewoneblog/viewoneblog.component';
import { ViewonenoteComponent } from './viewonenote/viewonenote.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "notes",
    component: NotesComponent
  },
  {
    path: "viewoneblog/:id",
    component: ViewoneblogComponent
  },
  {
    path: "viewonenote/:id",
    component: ViewonenoteComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children:
      [
        {
          path: "add",
          component: AddComponent
        },
        {
          path: "edit",
          component: EditComponent
        },
        {
          path: "delete",
          component: DeleteComponent
        },
      ]
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
