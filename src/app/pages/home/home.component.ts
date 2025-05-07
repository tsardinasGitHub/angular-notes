import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  template: `
    <app-header />
    <main>
      <h1>Home Page</h1>
    </main>
  `,
  styles: `
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2563eb;
      margin-top: 32px;
      letter-spacing: 0.5px;
    }
  `
})
export class HomeComponent {

}
