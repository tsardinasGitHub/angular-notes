import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  template: `
    <app-header />
    <main>
      <h1>Angular &amp; CSS Study Resource</h1>
      <section class="study-resource">
        <h2>Key Angular Concepts in This App</h2>
        <ul>
          <li><strong>Standalone Components:</strong> Components are defined with <code>standalone: true</code> (or <code>imports: []</code> in Angular 16+), promoting modularity and reusability without relying on NgModules.</li>
          <li><strong>Signals for State Management:</strong> Angular's <code>signal</code> API is used for reactive state, enabling efficient, fine-grained reactivity and rendering.</li>
          <li><strong>Direct Service Injection:</strong> The <code>inject</code> function is used for type-safe, direct service injection, reducing boilerplate and improving testability.</li>
          <li><strong>Strict Typing with Interfaces:</strong> All data models use TypeScript interfaces (e.g., <code>Note</code>) for explicit, safe typing.<br><code>export default interface Note {{ '{' }} id: string; title: string; marked: boolean; {{ '}' }}</code></li>
          <li><strong>API Integration:</strong> The app uses Angular's <code>HttpClient</code> to perform CRUD operations against a REST API, following best practices for observables and error handling.</li>
          <li><strong>Error Handling:</strong> All API calls include robust error handling, with user feedback and safe state management.</li>
        </ul>
        <h2>Modern CSS Techniques</h2>
        <ul>
          <li><strong>Flexbox Layouts:</strong> The UI uses flexbox for responsive, modern layouts.</li>
          <li><strong>Card-Based Design:</strong> Notes and forms are presented as cards with rounded corners and shadows for a clean, modern look.</li>
          <li><strong>Dark Mode Header:</strong> The header uses a dark background for contrast and visual hierarchy.</li>
          <li><strong>Accessible, Modern Buttons:</strong> All buttons are styled for clarity, accessibility, and modern aesthetics.</li>
          <li><strong>Consistent Spacing &amp; Typography:</strong> The app uses a modern font, consistent spacing, and clear visual hierarchy.</li>
        </ul>
        <h2>Best Practices Followed</h2>
        <ul>
          <li>Component composition over inheritance for modularity and reusability.</li>
          <li>Immutability and pure functions in state management and services.</li>
          <li>Strict type safety and meaningful naming conventions throughout the codebase.</li>
          <li>Organized file structure with kebab-case naming and Angular suffixes (<code>.component.ts</code>, <code>.service.ts</code>).</li>
          <li>Robust error handling and validation in services and components.</li>
          <li>Performance optimizations: <code>trackBy</code> in <code>ngFor</code>, pure pipes, and efficient state updates.</li>
          <li>Security best practices: Angular sanitization, no direct DOM manipulation, and safe API usage.</li>
        </ul>
        <h2>Example: Standalone Component</h2>
        <pre><code>import {{ '{' }} Component {{ '}' }} from '&#64;angular/core';

&#64;Component({{ '{' }}
  selector: 'app-example',
  standalone: true,
  template: '&lt;div&gt;Hello, Angular!&lt;/div&gt;'
{{ '}' }})
export class ExampleComponent {{ '{' }}{{ '}' }}</code></pre>
        <h2>Example: Type-Safe Note Interface</h2>
        <pre><code>export default interface Note {{ '{' }}
  id: string;
  title: string;
  marked: boolean;
{{ '}' }}</code></pre>
        <h2>Example: API Service with Error Handling</h2>
        <pre><code>import {{ '{' }} Injectable {{ '}' }} from '&#64;angular/core';
import {{ '{' }} HttpClient {{ '}' }} from '&#64;angular/common/http';
import {{ '{' }} catchError {{ '}' }} from 'rxjs/operators';

&#64;Injectable({{ '{' }} providedIn: 'root' {{ '}' }})
export class NoteService {{ '{' }}
  constructor(private http: HttpClient) {{ '{' }}{{ '}' }}

  getNotes() {{ '{' }}
    return this.http.get('/api/notes').pipe(
      catchError(error =&gt; {{ '{' }} /* handle error */ throw error; {{ '}' }})
    );
  {{ '}' }}
{{ '}' }}</code></pre>
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
      font-size: 2.3rem;
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
