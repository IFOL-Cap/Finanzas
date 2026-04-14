import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  SimpleChanges,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormElement } from '../../../interfaces';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control!: FormControl<string | null>;

  @Input() inputConfig: FormElement = {
    type: 'text',
    pattern: '',
    isRequired: false,
    placeHolder: '',
    isDisabled: false,
    isHidden: false,
    isRead: false,
  };

  public inputElementFrm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.inputElementFrm = this.fb.group({
      inputElement: [
        '',
        {
          validators: [],
          updateOn: 'blur',
        },
      ],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Aplica disabled/habilitado desde config sin emitir eventos extra
    if (this.control) {
      if (this.inputConfig?.isDisabled) {
        if (!this.control.disabled) {
          this.control.disable({ emitEvent: false });
        }
      } else {
        if (this.control.disabled) {
          this.control.enable({ emitEvent: false });
        }
      }

      // Construye validadores de acuerdo a la config
      const validators = [];

      if (this.inputConfig?.isRequired) {
        validators.push(Validators.required);
      }

      // Si viene un pattern de la config, úsalo
      if (this.inputConfig?.pattern) {
        try {
          // OJO: Validators.pattern acepta:
          // - un string de patrón SIN las barras /.../
          // - o una instancia RegExp
          // Aquí asumimos que te pasan el patrón como string sin barras
          validators.push(Validators.pattern(this.inputConfig.pattern));
        } catch {
          // Si hay error en el patrón, no rompas el componente
          console.warn('Patrón inválido en inputConfig.pattern');
        }
      }

      // Si ya tienes validadores en el control (definidos en el padre),
      // y quieres RESPEtARLOS además de los de la config, puedes combinarlos:
      // const current = this.control.validator ? [this.control.validator] : [];
      // this.control.setValidators([...current, ...validators]);

      // Si quieres que la config SOBRESCRIBA los validadores del padre:
      //this.control.setValidators(validators);

      // Actualiza sin disparar valueChanges
      this.control.updateValueAndValidity({ emitEvent: false });
    }
  }
}
