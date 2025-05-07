import { Component, input, signal } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule],
  template: `
    <form class="note-form" (ngSubmit)="createNote()">  
      <input type="text" class="note-title" placeholder="Nueva Tarea" name="new-note" [(ngModel)]="noteTitle"  />
      <button class="create-btn">+</button>
    </form>
  `,
  styles: `
    .note-form {
      width: 100%;
      max-width: 420px;
      background: #fff;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px 28px;
      border-radius: 12px;
      border: 1.5px solid #e5e7eb;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      margin-bottom: 20px;
    }
    .note-title {
      border: none;
      font-size: 1.1rem;
      font-weight: 500;
      background: transparent;
      outline: none;
      color: #222;
      flex: 1 1 auto;
      padding: 4px 0;
      border-bottom: 1.5px solid #e5e7eb;
      transition: border-color 0.2s;
    }
    .note-title:focus {
      border-bottom: 1.5px solid #2563eb;
    }
    .create-btn {
      background: #2563eb;
      color: #fff;
      font-size: 1.5rem;
      width: 38px;
      height: 38px;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s;
    }
    .create-btn:hover {
      background: #1e40af;
    }
    .create-btn:active {
      background: #2563eb;
    }
  `
})
export class CreateNoteComponent {
  noteTitle = signal<string>('');

  constructor(public noteService: NoteService) {}

  createNote() {
    if (this.noteTitle()) {
      this.noteService.createNote(this.noteTitle()).subscribe({
        next: (data) => {
          this.getNotes();
          this.noteTitle.set('');
        },
        error: (error) => {
          console.log(error);
        }
      });
      
    }
  }

  getNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse();
      },
      error: (error) => {
        console.log(error);
      }
    })  ;
  }

}
