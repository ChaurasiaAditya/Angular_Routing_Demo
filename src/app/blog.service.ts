import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpclient: HttpClient) { }

  URL: string = "http://localhost:3000/blogs"

  // To get all the Blogs from JSON File
  getAllBlogs(): Observable<Array<Blog>> {
    return this.httpclient.get<Array<Blog>>(this.URL);
  }
}
