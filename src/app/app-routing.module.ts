import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RegistorComponent } from './registor/registor.component';
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
    path:"registor",
    component:RegistorComponent
  },
  {
    path:"product",
    component:ViewproductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
