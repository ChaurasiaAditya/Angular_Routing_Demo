import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpclient: HttpClient) { }

  URL: string = "http://localhost:3000/notes"

  getNotes():Observable<Array<Object>>{
    return this.httpclient.get<Array<Object>>(this.URL);
  }
}
