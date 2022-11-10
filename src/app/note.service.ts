import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpclient: HttpClient) { }

  URL: string = "http://localhost:3001/notes"

  getNotes():Observable<Array<Note>>{
    return this.httpclient.get<Array<Note>>(this.URL);
  }

  getOneNotes(id?:number):Observable<Note>{
    return this.httpclient.get<Note>(this.URL+"/"+id);
  }
  
  
}
