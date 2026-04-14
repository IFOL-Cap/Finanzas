import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApRoutes } from '../shared/consts';
import { LoginService } from '../shared/services/login.service';
import { InputComponent } from '../shared/components/forms-elements/input/input.component';
import { ButtonComponent } from '../shared/components/buttons/button/button.component';
import { SelectComponent } from '../shared/components/forms-elements/select/select.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent, SelectComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      usuario: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur'
      }),
      contrasenia: new FormControl<string | null>('', {
        validators: [Validators.required, Validators.maxLength(60)],
        updateOn: 'blur'
      }),
    });
  }

  // Getters tipados para el template
  get usuarioCtrl(): FormControl<string | null> {
    return this.loginForm.get('usuario') as FormControl<string | null>;
  }

  get contraseniaCtrl(): FormControl<string | null> {
    return this.loginForm.get('contrasenia') as FormControl<string | null>;
  }


  onLogin() {

    if (this.loginForm.invalid)
    {
      this.loginForm.markAllAsTouched();
      this.loginForm.updateValueAndValidity();
      return;
    }

    this.loginService.login();
    this.router.navigate([ApRoutes.im.value, ApRoutes.im.path.step1.value]);
  }
}
