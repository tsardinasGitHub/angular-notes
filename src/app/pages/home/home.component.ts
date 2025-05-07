import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  template: `
    <app-header />
    <main>
    <h2>Angular & CSS Concepts in This App</h2>
      <section class="study-resource">        
        <ul>
          <li><strong>Standalone Components:</strong> All components are standalone, promoting modularity and reusability without relying on Angular modules.</li>
          <li><strong>Signals for State Management:</strong> Angular's signals system is used for efficient, reactive state handling and rendering.</li>
          <li><strong>Direct Service Injection:</strong> The <code>inject</code> function is used for direct, type-safe service injection, reducing boilerplate.</li>
          <li><strong>Strict Typing with Interfaces:</strong> Data models use TypeScript interfaces for explicit, safe typing—no <code>any</code> types.</li>
          <li><strong>Modern CSS:</strong> The UI uses flexbox layouts, card-based design, and a dark header for a clean, modern look. CSS variables and best practices are followed.</li>
          <li><strong>Best Practices:</strong> The codebase follows Angular's style guide, uses meaningful naming, and applies immutability and pure functions in services and state management.</li>
        </ul>
      </section>
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
    .study-resource {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      max-width: 600px;
      margin: 40px 0 0 0;
      padding: 32px 28px;
      color: #222;
    }
    .study-resource h2 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 18px;
      color: #2563eb;
    }
    .study-resource ul {
      padding-left: 18px;
    }
    .study-resource li {
      margin-bottom: 14px;
      font-size: 1.08rem;
      line-height: 1.7;
    }
    .study-resource code {
      background: #f1f5f9;
      color: #111827;
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 0.98em;
    }
  `
})
export class HomeComponent {

}
