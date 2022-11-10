import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-viewoneblog',
  templateUrl: './viewoneblog.component.html',
  styleUrls: ['./viewoneblog.component.css']
})
export class ViewoneblogComponent implements OnInit {

  blogdata:Blog = {}

  constructor(private blogService: BlogService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      let id = params.get("id")??0;
      this.blogService.getOneBlogs(+id).subscribe(
        data => {this.blogdata = data;}
      )
    })
  }

}
