import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="header">
      <nav class="navbar" aria-label="Main navigation">
        <div class="navbar-title">Notes</div>
        <ul class="navbar-links">
          <li><a routerLink="/" class="link">Home</a></li>
          <li><a routerLink="/notes" class="link">Notes</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    .header {
      background: #111827;
      box-shadow: 0 2px 8px rgba(0,0,0,0.10);
      border-radius: 0 0 12px 12px;
      margin-bottom: 32px;
      padding: 0;
    }
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 900px;
      margin: 0 auto;
      padding: 18px 32px;
    }
    .navbar-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1px;
    }
    .navbar-links {
      display: flex;
      gap: 20px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .link {
      color: #fff;
      font-weight: 500;
      font-size: 1.1rem;
      padding: 7px 22px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      transition: background 0.2s, color 0.2s, box-shadow 0.2s;
      text-decoration: none;
      outline: none;
      box-shadow: 0 0 0 0 rgba(255,255,255,0);
    }
    .link:hover, .link:focus {
      background: #fff;
      color: #111827;
      box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    }
  `
})
export class HeaderComponent {

}
