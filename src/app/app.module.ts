import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewoneblogComponent } from './viewoneblog/viewoneblog.component';
import { MatRippleModule } from '@angular/material/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewonenoteComponent } from './viewonenote/viewonenote.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotesComponent,
    BlogsComponent,
    ViewoneblogComponent,
    NotfoundComponent,
    ViewonenoteComponent,
    AdminComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatRippleModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
