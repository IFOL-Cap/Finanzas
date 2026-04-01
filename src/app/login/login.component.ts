import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApRoutes } from '../shared/consts';
import { LoginService } from '../shared/services/login.service';
import { InputComponent } from '../shared/components/forms-elements/input/input.component';
import { ButtonComponent } from '../shared/components/buttons/button/button.component';
import { SelectComponent } from '../shared/components/forms-elements/select/select.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent, SelectComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  onLogin() {
    this.loginService.login();
    this.router.navigate([ApRoutes.im.value, ApRoutes.im.path.step1.value]);
  }
}
