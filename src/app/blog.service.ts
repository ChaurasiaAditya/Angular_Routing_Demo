import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpclient: HttpClient) { }

  URL: string = "http://localhost:3000/blogs"

  
}
