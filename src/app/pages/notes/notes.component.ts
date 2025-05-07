import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';
@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NoteCardComponent, CreateNoteComponent],
  template: `
    <app-header />
    <section id="notes-page">
      <h2>Notes</h2>
      @if (hasError) {
        <p>Error loading notes</p>
      } @else if (isLoading) {
        <p>Loading...</p>
      } @else {
        <ul class="note-list">
          <li>
            <app-create-note />
        </li>
        @for (note of noteService.notes; track note.id) {
          <li class="note">
            <app-note-card [note]="note" />
          </li>
        }
      </ul>
      }
    </section>
  `,
  styles: `
    #notes-page {
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #notes-page h2 {
      margin-bottom: 32px;
      font-size: 2rem;
      font-weight: 600;
      color: #222;
      letter-spacing: 0.5px;
    }
    .note-list {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06);
      width: 100%;
      max-width: 520px;
      min-width: 320px;
      padding: 32px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      border: 1.5px solid #e5e7eb;
    }
    .note {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `
})
export class NotesComponent implements OnInit {

  hasError: boolean = false;
  isLoading: boolean = true;
  
  constructor(public noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse();
        this.isLoading = false;
        this.hasError = false;
      },
      error: (error) => {
        console.log(error);
        this.hasError = true;
      }
    })  ;
  }
}
