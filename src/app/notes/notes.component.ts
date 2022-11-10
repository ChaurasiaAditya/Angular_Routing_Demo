import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteservice: NoteService) { }


  NOTE!: Note[];
  
  ngOnInit(): void {
    this.noteservice.getNotes().subscribe({
      next: (data) => this.NOTE = data,
      error: () => alert("Failed to Fetch Note due to Network Error!!!")
    })
  }

}
