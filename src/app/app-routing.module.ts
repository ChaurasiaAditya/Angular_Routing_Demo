import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewoneblogComponent } from './viewoneblog/viewoneblog.component';
import { ViewonenoteComponent } from './viewonenote/viewonenote.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
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
    path: "login",
    component: LoginComponent
  },
  {
    path: "registor",
    component: RegistrationComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate:[AdminGuard],
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
