import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpclient: HttpClient) { }

  URL: string = "http://localhost:3000/notes"

  getNotes(){
    return this.httpclient.get<Array<Note>>(this.URL);
  }
}
