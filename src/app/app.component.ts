import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/components/core/sidebar/sidebar.component";
import { filter } from 'rxjs';
import { ApRoutes } from './shared/consts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mx_web_canal_denuncias';
  currentUrl = '';
  private readonly loginPath = `/${ApRoutes.login.value}`;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  get isLoginRoute() {
    return this.currentUrl.startsWith(this.loginPath);
  }
}
