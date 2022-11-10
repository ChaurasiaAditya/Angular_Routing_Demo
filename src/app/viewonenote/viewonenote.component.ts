import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../model/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-viewonenote',
  templateUrl: './viewonenote.component.html',
  styleUrls: ['./viewonenote.component.css']
})
export class ViewonenoteComponent implements OnInit {

  OneNote:Note = {}

  constructor(private noteservice: NoteService,private activateRoute:ActivatedRoute) { }




  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      params => {let id = params.get("id")??0;
      this.noteservice.getOneNotes(+id).subscribe(
        data => {this.OneNote = data;}
      )
      })
  }

}
