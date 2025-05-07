import { Component, input } from '@angular/core';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-card',
  imports: [],
  template: `
    <article class="note-card">
      <input type="text" [value]="note()?.title" class="card-title" (input)="updateTitle(note()?.id, $event)"/>
      <input type="checkbox" [checked]="note()?.marked" (input)="updateMarked(note()?.id)"/>
      <button
        type="button"
        class="delete-btn"
        aria-label="Delete note"
        (click)="deleteNote(note()?.id)"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6L14 14M6 14L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </article>
  `,
  styles: `
    .note-card {
      width: 100%;
      max-width: 420px;
      background: #fff;
      padding: 24px 28px;
      border-radius: 12px;
      border: 1.5px solid #e5e7eb;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      transition: box-shadow 0.2s, border 0.2s;
    }
    .note-card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
      border: 1.5px solid #2563eb;
    }
    .card-title {
      border: none;
      font-size: 1.15rem;
      font-weight: 500;
      background: transparent;
      outline: none;
      color: #222;
      flex: 1 1 auto;
      padding: 4px 0;
      border-bottom: 1.5px solid #e5e7eb;
      transition: border-color 0.2s;
    }
    .card-title:focus {
      border-bottom: 1.5px solid #2563eb;
    }
    input[type="checkbox"] {
      accent-color: #2563eb;
      width: 22px;
      height: 22px;
      margin-left: 12px;
      cursor: pointer;
      transition: accent-color 0.2s;
    }
    .delete-btn {
      background: none;
      border: none;
      color: #ef4444;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      margin-left: 8px;
    }
    .delete-btn:hover, .delete-btn:focus {
      background: #fee2e2;
      color: #b91c1c;
      outline: none;
    }
    .note-card:has(input:checked) {
      background: #f1f5f9;
      border: 1.5px solid #a3a3a3;
    }
    .note-card:has(input:checked) .card-title {
      font-weight: 400;
      color: #6b7280;
      text-decoration: line-through;
    }
  `
})
export class NoteCardComponent {
  note = input<Note>(); 

  constructor(private noteService: NoteService) {}

  updateTitle(id: string | undefined, event: Event) {
    if (id) {
      const newTitle = (event.target as HTMLInputElement).value;
      this.noteService.updateTitle(id, newTitle);
    }
  }

  updateMarked(id: string | undefined) {
    if (id) {
      this.noteService.updateMarked(id);
    }
  }

  deleteNote(id: string | undefined) {
    if (id) {
      this.noteService.deleteNote(id).subscribe({
        next: () => {
          this.refreshNotes();
        },
        error: (error) => {
          console.error('Failed to delete note:', error);
        }
      });
    }
  }

  private refreshNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse();
      },
      error: (error) => {
        console.error('Failed to refresh notes:', error);
      }
    });
  }
}
