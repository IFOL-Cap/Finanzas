import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static rfc(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      // RFC para personas físicas: 13 caracteres
      // RFC para personas morales: 12 caracteres
      const rfcPattern = /^([A-ZÑ&]{3,4})(\d{6})([A-Z0-9]{3})$/;
      const valid = rfcPattern.test(control.value);
      
      if (!valid) {
        return { invalidRfc: true };
      }

      // Validaciones adicionales
      const value = control.value;
      const letrasInvalidas = /[OIQ]/; // Letras no permitidas en el RFC
      if (letrasInvalidas.test(value)) {
        return { invalidRfc: true, message: 'El RFC no puede contener las letras O, I, Q' };
      }

      return null;
    };
  }

  static numSerie(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const value = control.value.toUpperCase();

      // Validar longitud exacta de 17 caracteres
      if (value.length !== 17) {
        return {
          invalidNumSerie: true,
          message: 'El número de serie debe tener exactamente 17 caracteres'
        };
      }

      // Validar caracteres prohibidos (I, O, Q, Ñ)
      if (/[IOQÑ]/.test(value)) {
        return {
          invalidNumSerie: true,
          message: 'El número de serie no puede contener las letras I, O, Q, Ñ'
        };
      }

      // Validar que solo contenga letras y números permitidos (sin caracteres especiales)
      if (!/^[A-HJ-NP-Z0-9]+$/.test(value)) {
        return {
          invalidNumSerie: true,
          message: 'El número de serie solo puede contener letras (excepto I,O,Q,Ñ) y números'
        };
      }

      // Validar que no haya 3 caracteres iguales consecutivos
      if (/(.)\1{2}/.test(value)) {
        return {
          invalidNumSerie: true,
          message: 'El número de serie no puede contener 3 caracteres iguales consecutivos'
        };
      }

      return null;
    };
  }

  static telefono(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const telefonoPattern = /^[0-9]{10}$/;
      const valid = telefonoPattern.test(control.value);
      
      return valid ? null : { invalidTelefono: true };
    };
  }

  static codigoPostal(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const cpPattern = /^[0-9]{5}$/;
      const valid = cpPattern.test(control.value);
      
      if (!valid) {
        return { 
          invalidCp: true,
          message: 'El código postal debe tener 5 dígitos numéricos'
        };
      }

      // Validar que no comience con 0
      if (control.value.startsWith('0')) {
        return {
          invalidCp: true,
          message: 'El código postal no puede comenzar con 0'
        };
      }

      return null;
    };
  }

  static curp(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      // Patrón CURP actualizado
      const curpPattern = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z]{2}$/;
      const valid = curpPattern.test(control.value);
      
      if (!valid) {
        return { 
          invalidCurp: true,
          message: 'El CURP no tiene el formato correcto'
        };
      }

      // Validaciones adicionales
      const value = control.value;
      const letrasInvalidas = /[OIQ]/; // Letras no permitidas en el CURP
      if (letrasInvalidas.test(value)) {
        return { 
          invalidCurp: true,
          message: 'El CURP no puede contener las letras O, I, Q'
        };
      }

      return null;
    };
  }

  static nombreCompleto(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      // Permite letras, espacios, acentos y ñ
      // Mínimo 2 caracteres, máximo 50
      // No permite números ni caracteres especiales
      const nombrePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{2,50}$/;
      const value = control.value.trim();
      
      if (!nombrePattern.test(value)) {
        return { 
          invalidNombre: true,
          message: 'El nombre solo puede contener letras y espacios, entre 2 y 50 caracteres'
        };
      }

      // Validar que no haya espacios múltiples consecutivos
      if (/\s\s/.test(value)) {
        return {
          invalidNombre: true,
          message: 'No se permiten espacios consecutivos'
        };
      }

      return null;
    };
  }

  static fechaNacimiento(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const value = control.value;
      const fechaPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
      
      if (!fechaPattern.test(value)) {
        return { 
          invalidFecha: true,
          message: 'El formato debe ser dd/mm/aaaa'
        };
      }

      // Convertir a fecha y validar
      const [dia, mes, anio] = value.split('/').map(Number);
      const fecha = new Date(anio, mes - 1, dia);
      const hoy = new Date();
      
      // Validar que sea una fecha válida
      if (fecha.getDate() !== dia || fecha.getMonth() !== mes - 1 || fecha.getFullYear() !== anio) {
        return {
          invalidFecha: true,
          message: 'La fecha no es válida'
        };
      }

      // Validar que no sea una fecha futura
      if (fecha > hoy) {
        return {
          invalidFecha: true,
          message: 'La fecha no puede ser futura'
        };
      }

      // Validar edad mínima (18 años)
      const edad = hoy.getFullYear() - fecha.getFullYear();
      const mesActual = hoy.getMonth();
      const mesNacimiento = fecha.getMonth();
      
      if (edad < 18 || (edad === 18 && mesActual < mesNacimiento)) {
        return {
          invalidFecha: true,
          message: 'Debe ser mayor de 18 años'
        };
      }

      return null;
    };
  }

  static homoclave(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      // La homoclave son los últimos 3 caracteres del RFC
      const homoclavePattern = /^[A-Z0-9]{3}$/;
      const valid = homoclavePattern.test(control.value);
      
      return valid ? null : { 
        invalidHomoclave: true,
        message: 'La homoclave debe ser 3 caracteres alfanuméricos'
      };
    };
  }

  static pasaporte(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // El pasaporte es opcional
      }

      // Formato típico de pasaporte mexicano
      const pasaportePattern = /^[A-Z0-9]{8,10}$/;
      const valid = pasaportePattern.test(control.value);
      
      return valid ? null : { 
        invalidPasaporte: true,
        message: 'El número de pasaporte debe tener entre 8 y 10 caracteres alfanuméricos'
      };
    };
  }

  static email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      // Patrón de email más completo
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const valid = emailPattern.test(control.value);
      
      if (!valid) {
        return { 
          invalidEmail: true,
          message: 'El correo electrónico no es válido'
        };
      }

      // Validaciones adicionales
      const value = control.value.toLowerCase();
      
      // Verificar longitud mínima y máxima
      if (value.length < 5 || value.length > 254) {
        return {
          invalidEmail: true,
          message: 'El correo debe tener entre 5 y 254 caracteres'
        };
      }

      return null;
    };
  }

  static telefonoFijo(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // El teléfono fijo es opcional
      }

      // Validar que solo contenga números y tenga 10 dígitos
      const telefonoPattern = /^[0-9]{10}$/;
      const valid = telefonoPattern.test(control.value);
      
      if (!valid) {
        return { 
          invalidTelefonoFijo: true,
          message: 'El teléfono fijo debe tener 10 dígitos numéricos'
        };
      }

      // Validaciones adicionales
      const value = control.value;
      
      // Verificar que no sean todos dígitos iguales
      if (/^(\d)\1{9}$/.test(value)) {
        return {
          invalidTelefonoFijo: true,
          message: 'El número no puede tener todos los dígitos iguales'
        };
      }

      return null;
    };
  }

  static placas(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // Las placas son opcionales
      }

      const value = control.value.toUpperCase();
      
      // Validar formato general de placas (letras y números, sin caracteres especiales)
      const placasPattern = /^[A-Z0-9]{5,8}$/;
      if (!placasPattern.test(value)) {
        return {
          invalidPlacas: true,
          message: 'Las placas deben contener entre 5 y 8 caracteres alfanuméricos'
        };
      }

      // Validar caracteres prohibidos
      if (/[IOQÑ]/.test(value)) {
        return {
          invalidPlacas: true,
          message: 'Las placas no pueden contener las letras I, O, Q, Ñ'
        };
      }

      // Validar que no haya 3 caracteres iguales consecutivos
      if (/(.)\1{2}/.test(value)) {
        return {
          invalidPlacas: true,
          message: 'Las placas no pueden contener 3 caracteres iguales consecutivos'
        };
      }

      return null;
    };
  }

  static numMotor(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // El número de motor es opcional
      }

      const value = control.value.toUpperCase();
      
      // Validar longitud máxima de 22 caracteres
      if (value.length > 22) {
        return {
          invalidNumMotor: true,
          message: 'El número de motor no puede exceder los 22 caracteres'
        };
      }

      // Validar que solo contenga letras y números permitidos (sin caracteres especiales)
      if (!/^[A-HJ-NP-Z0-9-]+$/.test(value)) {
        return {
          invalidNumMotor: true,
          message: 'El número de motor solo puede contener letras (excepto I,O,Q,Ñ) y números'
        };
      }

      // Validar caracteres prohibidos (I, O, Q, Ñ)
      if (/[IOQÑ]/.test(value)) {
        return {
          invalidNumMotor: true,
          message: 'El número de motor no puede contener las letras I, O, Q, Ñ'
        };
      }

      // Validar que no haya 3 caracteres iguales consecutivos
      if (/(.)\1{2}/.test(value)) {
        return {
          invalidNumMotor: true,
          message: 'El número de motor no puede contener 3 caracteres iguales consecutivos'
        };
      }

      return null;
    };
  }

  //#region Validadores para datos iniciales

  //#region Datos del vehiculo

  static codigoPostalVehiculo: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    // console.log(control);
    // const cp = control.get('inputCp').value;
    // const ramo = control.get('ramo').value;

    const cp = control.controls['codigoPostal']?.value;
    const ramo = control.controls['ramo']?.value;

    if (ramo != 401 && ramo != '' && ramo != 0) 
    {
      const valid = cp != '' && cp != null && cp.length == 5;      
      return valid ? null : { invalidCodigoPostal: true, errorCodigoPostal: 'Ingrese el código postal' };
    }
    else {
      return null;
    }
  }

  static vinVehiculo: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const vin = control.controls['serieVin']?.value;
    const clasificacion = control.controls['clasificacion']?.value;

    if (clasificacion != 1 && clasificacion != '' && clasificacion != 0) 
    {
      const valid = vin != '' && vin != null && vin.length == 17;      
      return valid ? null : { invalidVin: true, errorVin: 'Ingrese el número de serie o VIN' };
    }
    else {
      return null;
    }
  }

  static tipoVehiculo: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const tipoVehiculo = control.controls['tipoVehiculo']?.value;
    const ramo = control.controls['ramo']?.value;

    if (ramo == 402 && ramo != '' && ramo != 0) 
    {
      const valid = tipoVehiculo != '' && tipoVehiculo != null && tipoVehiculo != 0;      
      return valid ? null : { invalidTipoVehiculo: true, errorTipoVehiculo: 'Seleccione el tipo de vehículo' };
    }
    else {
      return null;
    }
  }

  static tipoCarga: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const carga = control.controls['tipoCarga']?.value;
    const ramo = control.controls['ramo']?.value;

    if ((ramo == 402 || ramo == 405) && ramo != '' && ramo != 0) 
    {
      const valid = carga != '' && carga != null && carga != 0;      
      return valid ? null : { invalidTipoCarga: true, errorTipoCarga: 'Seleccione el tipo de carga' };
    }
    else {
      return null;
    }
  }

  static estadoVehiculo: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const estado = control.controls['estado']?.value;
    const ramo = control.controls['ramo']?.value;

    if (ramo != 401 && ramo != '' && ramo != 0) 
    {
      const valid = estado != '' && estado != null && estado != 0;      
      return valid ? null : { invalidEstado: true, errorEstado: 'Seleccione el estado' };
    }
    else {
      return null;
    }
  }

  static poblacionVehiculo: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const poblacion = control.controls['poblacion']?.value;
    const ramo = control.controls['ramo']?.value;

    if (ramo != 401 && ramo != '' && ramo != 0) 
    {
      const valid = poblacion != '' && poblacion != null && poblacion != 0;      
      return valid ? null : { invalidPoblacion: true, errorPoblacion: 'Seleccione la población o municipio' };
    }
    else {
      return null;
    }
  }

  static pasajeros: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const pasajeros = control.controls['pasajeros']?.value;
    const uso = control.controls['usoVehiculo']?.value;

    if ((uso == 410 || uso == 411) && uso != '' && uso != 0) 
    {
      const valid = pasajeros != '' && pasajeros != null && pasajeros != 0;      
      return valid ? null : { invalidPasajeros: true, errorPasajeros: 'Seleccione el número de pasajeros' };
    }
    else {
      return null;
    }
  }

  static valorActual: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const valorActual = control.controls['valorActual']?.value;
    const valorUnidad = control.controls['valorUnidad']?.value;

    if (valorUnidad == 2 && valorUnidad != '' && valorUnidad != 0) 
    {
      const valid = valorActual != '' && valorActual != null && valorActual != 0;      
      return valid ? null : { invalidValorActual: true, errorValorActual: 'Ingrese el valor actual' };
    }
    else {
      return null;
    }
  }

  static valorConvenido: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const valorConvenido = control.controls['valorConvenido']?.value;
    const valorUnidad = control.controls['valorUnidad']?.value;

    if (valorUnidad == 3 && valorUnidad != '' && valorUnidad != 0) 
    {
      const valid = valorConvenido != '' && valorConvenido != null && valorConvenido != 0;      
      return valid ? null : { invalidValorConvenido: true, errorValorConvenido: 'Ingrese el valor convenido' };
    }
    else {
      return null;
    }
  }

  static numeroFactura: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const numeroFactura = control.controls['numeroFactura']?.value;
    const valorUnidad = control.controls['valorUnidad']?.value;

    if (valorUnidad == 5 && valorUnidad != '' && valorUnidad != 0) 
    {
      const valid = numeroFactura != '' && numeroFactura != null && numeroFactura != 0;      
      return valid ? null : { invalidNumeroFactura: true, errorNumeroFactura: 'Ingrese el número de la factura' };
    }
    else {
      return null;
    }
  }

  static montoFactura: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const montoFactura = control.controls['montoFactura']?.value;
    const valorUnidad = control.controls['valorUnidad']?.value;

    if (valorUnidad == 5 && valorUnidad != '' && valorUnidad != 0) 
    {
      const valid = montoFactura != '' && montoFactura != null && montoFactura != 0;      
      return valid ? null : { invalidMontoFactura: true, errorMontoFactura: 'Ingrese el monto de la factura' };
    }
    else {
      return null;
    }
  }

  static fechaFactura: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const fechaFactura = control.controls['fechaFactura']?.value;
    const valorUnidad = control.controls['valorUnidad']?.value;

    if (valorUnidad == 5 && valorUnidad != '' && valorUnidad != 0) 
    {
      const valid = fechaFactura != '' && fechaFactura != null && fechaFactura != 0;      
      return valid ? null : { invalidFechaFactura: true, errorFechaFactura: 'Ingrese la fecha de la factura' };
    }
    else {
      return null;
    }
  }

  //#endregion

  //#region Datos del conductor
  
  static nombreConductor: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const nombre = control.controls['nombre']?.value;
    const tipoPersona = control.controls['tipoPersona']?.value;

    if (tipoPersona == 'F' && tipoPersona != '' && tipoPersona != null) 
    {
      const valid = nombre != '' && nombre != null;      
      return valid ? null : { invalidNombre: true, errorNombre: 'Ingrese el nombre del conductor' };
    }
    else {
      return null;
    }
  }

  static fechaNacimientoConductor: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const fechaNacimiento = control.controls['fechaNacimiento']?.value;
    const tipoPersona = control.controls['tipoPersona']?.value;

    if (tipoPersona == 'F' && tipoPersona != '' && tipoPersona != null) 
    {
      const valid = fechaNacimiento != '' && fechaNacimiento != null && fechaNacimiento != 0;      
      return valid ? null : { invalidFechaNacimiento: true, errorFechaNacimiento: 'Ingrese la fecha de nacimiento del conductor' };
    }
    else {
      return null;
    }
  }

  static razonSocialConductor: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const razonSocial = control.controls['razonSocial']?.value;
    const tipoPersona = control.controls['tipoPersona']?.value;

    if (tipoPersona == 'M' && tipoPersona != '' && tipoPersona != null) 
    {
      const valid = razonSocial != '' && razonSocial != null;      
      return valid ? null : { invalidRazonSocial: true, errorRazonSocial: 'Ingrese la razón social de la empresa' };
    }
    else {
      return null;
    }
  }

  static fechaConstitucionConductor: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    // debugger
    const fechaConstitucion = control.controls['fechaConstitucion']?.value;
    const tipoPersona = control.controls['tipoPersona']?.value;

    if (tipoPersona == 'M' && tipoPersona != '' && tipoPersona != null) 
    {
      const valid = fechaConstitucion != '' && fechaConstitucion != null && fechaConstitucion != 0;      
      return valid ? null : { invalidFechaConstitucion: true, errorFechaConstitucion: 'Ingrese la fecha de constitución de la empresa' };
    }
    else {
      return null;
    }
  }

  static caracteresvalidos_keyUp(): void {

    // onkeypress="return '0123456789'.includes(event.key)"
    //solo acepta numeros
    // $(document).on("keyup", ".numeros", function (event) {
    //     var inicio = $(this)[0].selectionStart;
    //     if (event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46 && event.keyCode != 8)
    //         this.value = this.value.replace(/[^0-9\.]/g, '');

    //     $(this)[0].selectionStart = inicio;
    //     $(this)[0].selectionEnd = inicio;

    // });

    // document.addEventListener('keyup', (event) => {
    //   if (event.target && (event.target as HTMLElement).classList.contains('numeros')) {
    //     const input = event.target as HTMLInputElement;
    //     const inicio = input.selectionStart;
        
    //     if (event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46 && event.keyCode != 8) {
    //       input.value = input.value.replace(/[^0-9\.]/g, '');
    //     }

    //     input.selectionStart = inicio;
    //     input.selectionEnd = inicio;
    //   }
    // });

    document.addEventListener('keypress', (event: Event) => {
      const target = event.target as HTMLInputElement;
      
      // Verificar si el elemento tiene la clase 'numeros'
      if (target && target.classList.contains('numeros')) {
        const cursorPosition = target.selectionStart;
        
        // Permitir teclas de navegación y borrado
        if (!(event instanceof KeyboardEvent) || 
            ![37, 39, 46, 8].includes(event.keyCode)) {
          // Reemplazar caracteres no permitidos
          target.value = target.value.replace(/[^0-9.]/g, '');
        }
  
        // Restaurar posición del cursor
        target.setSelectionRange(cursorPosition, cursorPosition);
      }
    });

    // //solo acepta enteros
    // $(document).on("keyup", ".enteros", function (event) {
    //     var inicio = $(this)[0].selectionStart;
    //     if (event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46 && event.keyCode != 8)
    //         this.value = this.value.replace(/[^0-9]/g, '');

    //     $(this)[0].selectionStart = inicio;
    //     $(this)[0].selectionEnd = inicio;

    // });
    // //solo acepta letras
    // $(document).on("keyup", ".letras", function (event) {
    //     var inicio = $(this)[0].selectionStart;
    //     if (event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46 && event.keyCode != 8)
    //         this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]/g, '');

    //     $(this)[0].selectionStart = inicio;
    //     $(this)[0].selectionEnd = inicio;

    // });

    document.addEventListener('keyup', (event: Event) => {
      const target = event.target as HTMLInputElement;
      
      if (target && target.classList.contains('letras')) {
        const cursorPosition = target.selectionStart;
        
        if (!(event instanceof KeyboardEvent) || 
            ![37, 39, 46, 8].includes(event.keyCode)) {
          target.value = target.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]/g, '');
        }
        
        target.setSelectionRange(cursorPosition, cursorPosition);
      }
    });
    

    // //solo acepta alfanumerico
    // $(document).on("keyup", ".alfanum", function (event) {
    //     var inicio = $(this)[0].selectionStart;
    //     if (event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46 && event.keyCode != 8)
    //         this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ\.,\-@_\/&# ]/g, '');

    //     $(this)[0].selectionStart = inicio;
    //     $(this)[0].selectionEnd = inicio;

    // });

    document.addEventListener('keyup', (event: Event) => {
      const target = event.target as HTMLInputElement;
      
      if (target && target.classList.contains('alfanum')) {
        const cursorPosition = target.selectionStart; 
        
        if (!(event instanceof KeyboardEvent) || 
            ![37, 39, 46, 8].includes(event.keyCode)) {
          target.value = target.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ\.,\-@_\/&# ]/g, '');
        }
        
        target.setSelectionRange(cursorPosition, cursorPosition);
      }
    });

    // //solo acepta alfanumerico
    // $(document).on("keyup", ".alfanum2", function (event) {
    //     var inicio = $(this)[0].selectionStart;
    //     if (event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46 && event.keyCode != 8)
    //         this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ\.,\-@_\/&# ]/g, '');

    //     $(this)[0].selectionStart = inicio;
    //     $(this)[0].selectionEnd = inicio;

    // });


    // //solo acepta alfanumerico
    // $(document).on("keyup", ".alfanumclr", function (event) {
    //     var inicio = $(this)[0].selectionStart;
    //     if (event.keyCode != 37 && event.keyCode != 39 && event.keyCode != 46 && event.keyCode != 8)
    //         this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ ]/g, '');

    //     $(this)[0].selectionStart = inicio;
    //     $(this)[0].selectionEnd = inicio;

    // });

    document.addEventListener('keyup', (event: Event) => {
      const target = event.target as HTMLInputElement;
      
      if (target && target.classList.contains('alfanumclr')) {
        const cursorPosition = target.selectionStart;

        if (!(event instanceof KeyboardEvent) || 
            ![37, 39, 46, 8].includes(event.keyCode)) {
          target.value = target.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ ]/g, '');
        }
        
        target.setSelectionRange(cursorPosition, cursorPosition);
      }
    });

    // $(document).on("keyup", ".Mayusculas", function (event) {
    //     var inicio = $(this)[0].selectionStart;
    //     this.value = this.value.toUpperCase();


    //     $(this)[0].selectionStart = inicio;
    //     $(this)[0].selectionEnd = inicio;

    // });

    document.addEventListener('keyup', (event: Event) => {
      const target = event.target as HTMLInputElement;
      
      if (target && target.classList.contains('Mayusculas')) {
        const cursorPosition = target.selectionStart;
        
        if (!(event instanceof KeyboardEvent) || 
            ![37, 39, 46, 8].includes(event.keyCode)) {
          target.value = target.value.toUpperCase();
        }
        
        target.setSelectionRange(cursorPosition, cursorPosition);
      }
    });

    // return true;
  }

  soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      // return false;
    }
  }

  static soloLetras1(event: KeyboardEvent): boolean {
    const key = event.key;
    const keyCode = event.keyCode || event.which;
    
    // Teclas especiales permitidas (backspace, delete, flechas, etc)
    const teclasEspeciales = [
      8,    // backspace
      9,    // tab
      37,   // flecha izquierda
      39,   // flecha derecha
      46    // delete
    ];
  
    // Si es una tecla especial, permitirla
    if (teclasEspeciales.includes(keyCode)) {
      return true;
    }
  
    // Expresión regular que permite letras, espacios y acentos
    // const patron = /^[a-záéíóúñü\s]$/i;
    // const patron = /[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]/g;
    const patron = /[^0-9.]/g;
    
    // Probar si la tecla presionada coincide con el patrón
    return patron.test(key.toLowerCase());

    // document.addEventListener('keyup', (event: Event) => {
    //   const target = event.target as HTMLInputElement;
      
    //   if (target && target.classList.contains('letras')) {
    //     const cursorPosition = target.selectionStart;
        
    //     if (!(event instanceof KeyboardEvent) || 
    //         ![37, 39, 46, 8].includes(event.keyCode)) {
    //       target.value = target.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]/g, '');
    //     }
        
    //     target.setSelectionRange(cursorPosition, cursorPosition);
    //   }
    // });
  }

  static soloLetras2(event: KeyboardEvent): boolean {
    // Obtener el código y carácter de la tecla
    const key = event.key.toLowerCase();
    const keyCode = event.keyCode || event.which;
  
    // Caracteres permitidos
    const letrasPermitidas = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    
    // Teclas especiales permitidas
    const teclasEspeciales = [
      8,    // backspace
      37,   // flecha izquierda
      39,   // flecha derecha
      46    // delete
    ];
  
    // Permitir teclas especiales
    if (teclasEspeciales.includes(keyCode)) {
      return true;
    }
  
    // Validar si el carácter está permitido
    return letrasPermitidas.includes(key);
  }

  //#endregion

  //#endregion
  
} 