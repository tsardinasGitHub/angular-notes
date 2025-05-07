import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="header">
      <h1>Notes</h1> 
      <nav>
        <ul class="nav-list">
          <li><a routerLink="/" class="link">Home</a></li>
          <li><a routerLink="/notes" class="link">Notes</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: `
    .header {
      color: white;
      padding: 20px;
      background-color: #000022;
      text-align: center;

      .nav-list {
        display: flex;
        justify-content: space-around;

        .link {
          color: white;
          text-decoration: none;
        }
      }
    }  
    
  `
})
export class HeaderComponent {

}
