import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  readonly API_URL = 'https://ca99c38344dd34123476.free.beeceptor.com/api/notes/';

  notes: Note[];

  constructor(private http: HttpClient) { 
    this.notes = [];
  }

  createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  getNotes() {
    return this.http.get<Note[]>(this.API_URL);
  }

  updateTitle(id: string, newTitle: string) {
    const noteToUpdate = this.notes.find((note) => note.id === id);
    if (noteToUpdate) {
      noteToUpdate.title = newTitle;
    }
  }

  updateMarked(id: string) {
    const noteToUpdate = this.notes.find((note) => note.id === id);
    if (noteToUpdate) {
      noteToUpdate.marked = !noteToUpdate.marked;
    }
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }

  createNote(title: string) {
    const note = {
      id: this.createId(),
      title,
      marked: false
    };
    return this.http.post<Note>(this.API_URL, note);
  }
}
