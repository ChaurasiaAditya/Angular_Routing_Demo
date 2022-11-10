import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blogs: Blog[] = [];
  
  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe({
      next: (data) => this.blogs = data,
      error: () => alert("Failed to Fetch Blogs due to Network Error!!!"),
      complete: () => alert("Blog Data Fetched Successfully!!!")
    })
  }

}
