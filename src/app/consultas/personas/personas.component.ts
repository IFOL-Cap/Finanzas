import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelSelectComponent } from '../../shared/components/forms-elements/label-select/label-select.component';

type ModalKey = 'fianzas' | 'garantias' | 'obligadoSolidario' | 'relacionObligado';

interface CalculoPrima {
  prima: string;
  derechos: string;
  gastosExpedicion: string;
  gastosInvestigacion: string;
  gastosAfectacion: string;
  subtotal: string;
  iva: string;
  total: string;
}

interface PorcentajesMovimiento {
  gastosAdministracion: string;
  gastosAdquisicion: string;
  utilidad: string;
}

interface MovimientoAsociado {
  poliza: string;
  descripcion: string;
  monto: string;
  nombre: string;
  noMovimiento: string;
  calculoPrima: CalculoPrima;
  porcentajes: PorcentajesMovimiento;
}

interface OficinasPoliza {
  produccion: string;
  papeleria: string;
}

interface HistoricoEdoFinItem {
  tipoMov: string;
  fechaEdoFin: string;
  fechaMovimiento: string;
  detalle: string;
}

interface GarantiaDetalle {
  garantia: string;
  persona: string;
  rol: string;
  fechaEstado: string;
  auditado: string;
  moneda: string;
  activoCirc: string;
  inventario: string;
  activoFijo: string;
  otrosActivos: string;
  totalActivo: string;
  pasivoCirc: string;
  pasivoLargoPlazo: string;
  pasivoDiferido: string;
  totalPasivo: string;
  liquidez: string;
  pbaAcido: string;
  apalancamiento: string;
  rentabilidad: string;
  razonDeuda: string;
  capitalTrabajo: string;
  sumaPorcentaje: string;
  porcentajeConsiderar: string;
  capContConsiderar: string;
  capacidadTrabajo: string;
  suma: string;
  capacidadTecnica: string;
  margenUtilidad: string;
  ventasNetas: string;
  costoVentas: string;
  utilidadNeta: string;
  capitalSocial: string;
  capitalContable: string;
  aplica10: string;
  futAumentoCap: string;
  excesoInsufic: string;
  totalGarantia: string;
  historico: HistoricoEdoFinItem[];
}

interface GarantiaItem {
  subtipo: string;
  fechaRegistro: string;
  fechaActualizacion: string;
  garantiaPonderada: string;
  moneda: string;
  tipo: string;
  rol: string;
  detalle: GarantiaDetalle | null;
}

interface AltaGarantiaForm {
  garantia: string;
  persona: string;
  noContrato: string;
  deudorPrendario: string;
  entidad: string;
}

interface InvestigacionGravamenItem {
  fechaInvestigacion: string;
  inmuebleGravado: string;
  usuario: string;
}

interface ObligadoSolidarioDetalle {
  garantia: string;
  persona: string;
  tipoInmueble: string;
  calle: string;
  numeroExterior: string;
  numeroInterior: string;
  colonia: string;
  codigoPostal: string;
  pais: string;
  estado: string;
  delegacionMunicipio: string;
  numeroEscritura: string;
  noRpp: string;
  folioRealFlag: string;
  folioReal: string;
  investigacionRpp: string;
  vistaOcular: string;
  fechaAvaluo: string;
  valorInmueble: string;
  posicionMapfreGravar: string;
  afectacionMarginal: string;
  observacionesComentarios: string;
  investigacionesGravamen: InvestigacionGravamenItem[];
}

interface GarantiaObligadoSolidarioItem {
  obligadoSolidario: string;
  subtipo: string;
  fechaRegistro: string;
  fechaActualizacion: string;
  garantiaPonderada: string;
  moneda: string;
  tipo: string;
  rol: string;
  detalle: ObligadoSolidarioDetalle;
}

interface PolizaFianza {
  poliza: string;
  inicioVigencia: string;
  finVigencia: string;
  primaNeta: string;
  montoAfianzado: string;
  moneda: string;
  estatus: string;
  detalle: string;
  rfc: string;
  nombre: string;
  noPoliza: string;
  ramo: string;
  subramo: string;
  tipo: string;
  tipoEmision: string;
  tipoFianza: string;
  tarifa: string;
  montoFianza: string;
  noEmpleados: string;
  plazo: string;
  tarifaPeriodo: string;
  deducibleMonto: string;
  deduciblePerdida: string;
  fechaFianza: string;
  fechaRegistro: string;
  fiado: string;
  beneficiario: string;
  agente: string;
  comision: string;
  tecnico: string;
  territorial: string;
  conceptoGarantizado: string;
  oficinas: OficinasPoliza;
  movimientosAsociados: MovimientoAsociado[];
}

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, FormsModule, LabelSelectComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  asesores = [
    { value: 'asesor1', display: 'Ivette García' },
    { value: 'asesor2', display: 'Carlos Mendoza' },
    { value: 'asesor3', display: 'Laura Torres' },
    { value: 'asesor4', display: 'Roberto Sánchez' },
  ];

  accesos: { key: ModalKey; label: string; icon: string; descripcion: string }[] = [
    {
      key: 'fianzas',
      label: 'Fianzas',
      icon: '/assets/icons/myPolicys.svg',
      descripcion: 'Consulta el listado de fianzas asociadas a este asesor.'
    },
    {
      key: 'garantias',
      label: 'Garantías',
      icon: '/assets/icons/Portafolio.svg',
      descripcion: 'Accede a las garantías registradas para este asesor.'
    },
    {
      key: 'obligadoSolidario',
      label: 'Garantías Obligado Solidario',
      icon: '/assets/icons/zonaliados.svg',
      descripcion: 'Visualiza las garantías donde el asesor actúa como obligado solidario.'
    },
    {
      key: 'relacionObligado',
      label: 'Relación como Obligado',
      icon: '/assets/icons/Note-2.svg',
      descripcion: 'Consulta las relaciones del asesor en calidad de obligado.'
    }
  ];

  modalAbierto: Record<ModalKey, boolean> = {
    fianzas: false,
    garantias: false,
    obligadoSolidario: false,
    relacionObligado: false
  };

  relacionObligadoInfo = {
    persona: 'Ivette Garcia',
    rfc: 'GARC850101ABC',
    tipo: 'Moral',
    riesgo: 'Bajo'
  };

  personasRelacionadas = [
    { nombre: 'Carlos Mendoza', rfc: 'MENS9004018K1', tipo: 'Física', relacion: 'Obligado Solidario' },
    { nombre: 'Laura Torres Ríos', rfc: 'TORL850322XJ4', tipo: 'Física', relacion: 'Aval' },
    { nombre: 'Constructora Delta SA de CV', rfc: 'CDL880910PQ8', tipo: 'Moral', relacion: 'Fiado' },
    { nombre: 'Roberto Sánchez Luna', rfc: 'SALR791105FG2', tipo: 'Física', relacion: 'Obligado Solidario' },
  ];

  fianzasInfo = {
    rfc: 'GARC850101ABC',
    nombrePersona: 'Ivette Garcia'
  };

  polizasFianzas: PolizaFianza[] = [
    {
      poliza: 'FZ-102938',
      inicioVigencia: '01/01/2026',
      finVigencia: '31/12/2026',
      primaNeta: '$ 12,500.00',
      montoAfianzado: '$ 250,000.00',
      moneda: 'MXN',
      estatus: 'Vigente',
      detalle: 'Poliza activa con cobertura total.',
      rfc: 'GARC850101ABC',
      nombre: 'Ivette Garcia',
      noPoliza: 'FZ-102938',
      ramo: 'Fianzas',
      subramo: 'Administrativas',
      tipo: 'Tradicional',
      tipoEmision: 'Nueva',
      tipoFianza: 'Cumplimiento',
      tarifa: '4.20%',
      montoFianza: '$ 250,000.00',
      noEmpleados: '45',
      plazo: '12 meses',
      tarifaPeriodo: 'Mensual',
      deducibleMonto: '$ 5,000.00',
      deduciblePerdida: '5%',
      fechaFianza: '01/01/2026',
      fechaRegistro: '28/12/2025',
      fiado: 'Comercial Delta SA de CV',
      beneficiario: 'Gobierno del Estado',
      agente: 'AGT-1004',
      comision: '12%',
      tecnico: 'Tec. Andres Lira',
      territorial: 'Centro',
      conceptoGarantizado: 'Cumplimiento de contrato de obra publica',
      oficinas: {
        produccion: 'Oficina Centro',
        papeleria: 'Sucursal Reforma'
      },
      movimientosAsociados: [
        {
          poliza: 'FZ-102938',
          descripcion: 'Emision inicial de la poliza',
          monto: '$ 250,000.00',
          nombre: 'Ivette Garcia',
          noMovimiento: 'MV-0001',
          calculoPrima: {
            prima: '$ 10,000.00',
            derechos: '$ 450.00',
            gastosExpedicion: '$ 200.00',
            gastosInvestigacion: '$ 150.00',
            gastosAfectacion: '$ 75.00',
            subtotal: '$ 10,875.00',
            iva: '$ 1,740.00',
            total: '$ 12,615.00'
          },
          porcentajes: {
            gastosAdministracion: '8%',
            gastosAdquisicion: '6%',
            utilidad: '10%'
          }
        },
        {
          poliza: 'FZ-102938',
          descripcion: 'Actualizacion de condiciones',
          monto: '$ 15,000.00',
          nombre: 'Ivette Garcia',
          noMovimiento: 'MV-0002',
          calculoPrima: {
            prima: '$ 2,000.00',
            derechos: '$ 90.00',
            gastosExpedicion: '$ 40.00',
            gastosInvestigacion: '$ 20.00',
            gastosAfectacion: '$ 10.00',
            subtotal: '$ 2,160.00',
            iva: '$ 345.60',
            total: '$ 2,505.60'
          },
          porcentajes: {
            gastosAdministracion: '5%',
            gastosAdquisicion: '4%',
            utilidad: '9%'
          }
        }
      ]
    },
    {
      poliza: 'FZ-847362',
      inicioVigencia: '15/02/2026',
      finVigencia: '14/02/2027',
      primaNeta: '$ 9,850.00',
      montoAfianzado: '$ 180,000.00',
      moneda: 'MXN',
      estatus: 'En revision',
      detalle: 'Poliza en proceso de validacion documental.',
      rfc: 'MENS9004018K1',
      nombre: 'Carlos Mendoza',
      noPoliza: 'FZ-847362',
      ramo: 'Fianzas',
      subramo: 'Judiciales',
      tipo: 'Integral',
      tipoEmision: 'Renovacion',
      tipoFianza: 'Fidelidad',
      tarifa: '3.80%',
      montoFianza: '$ 180,000.00',
      noEmpleados: '30',
      plazo: '12 meses',
      tarifaPeriodo: 'Trimestral',
      deducibleMonto: '$ 3,500.00',
      deduciblePerdida: '4%',
      fechaFianza: '15/02/2026',
      fechaRegistro: '10/02/2026',
      fiado: 'Servicios Nova SA de CV',
      beneficiario: 'Instituto Nacional',
      agente: 'AGT-1009',
      comision: '10%',
      tecnico: 'Tec. Laura Rios',
      territorial: 'Norte',
      conceptoGarantizado: 'Resguardo de obligaciones contractuales',
      oficinas: {
        produccion: 'Oficina Monterrey',
        papeleria: 'Sucursal Cumbres'
      },
      movimientosAsociados: [
        {
          poliza: 'FZ-847362',
          descripcion: 'Renovacion anual',
          monto: '$ 180,000.00',
          nombre: 'Carlos Mendoza',
          noMovimiento: 'MV-0101',
          calculoPrima: {
            prima: '$ 8,000.00',
            derechos: '$ 320.00',
            gastosExpedicion: '$ 180.00',
            gastosInvestigacion: '$ 80.00',
            gastosAfectacion: '$ 50.00',
            subtotal: '$ 8,630.00',
            iva: '$ 1,380.80',
            total: '$ 10,010.80'
          },
          porcentajes: {
            gastosAdministracion: '7%',
            gastosAdquisicion: '5%',
            utilidad: '8%'
          }
        }
      ]
    }
  ];

  garantiasInfo = {
    persona: 'Ivette Garcia',
    tipo: 'Moral',
    rfc: 'GARC850101ABC',
    riesgo: 'Bajo'
  };

  garantiasObligadoSolidarioInfo = {
    persona: 'Ivette Garcia',
    tipo: 'Moral',
    rfc: 'GARC850101ABC',
    riesgo: 'Medio'
  };

  garantias: GarantiaItem[] = [
    {
      subtipo: 'Financiera',
      fechaRegistro: '01/01/2026',
      fechaActualizacion: '15/01/2026',
      garantiaPonderada: '$ 150,000.00',
      moneda: 'MXN',
      tipo: 'Real',
      rol: 'Fiado',
      detalle: {
        garantia: 'GAR-00123',
        persona: 'Ivette Garcia',
        rol: 'Fiado',
        fechaEstado: '01/01/2026',
        auditado: 'Sí',
        moneda: 'MXN',
        activoCirc: '$ 500,000.00',
        inventario: '$ 120,000.00',
        activoFijo: '$ 800,000.00',
        otrosActivos: '$ 50,000.00',
        totalActivo: '$ 1,470,000.00',
        pasivoCirc: '$ 200,000.00',
        pasivoLargoPlazo: '$ 300,000.00',
        pasivoDiferido: '$ 30,000.00',
        totalPasivo: '$ 530,000.00',
        liquidez: '2.50',
        pbaAcido: '1.90',
        apalancamiento: '0.36',
        rentabilidad: '12%',
        razonDeuda: '0.36',
        capitalTrabajo: '$ 300,000.00',
        sumaPorcentaje: '85%',
        porcentajeConsiderar: '80%',
        capContConsiderar: '$ 752,000.00',
        capacidadTrabajo: '$ 940,000.00',
        suma: '$ 940,000.00',
        capacidadTecnica: 'Alta',
        margenUtilidad: '15%',
        ventasNetas: '$ 2,000,000.00',
        costoVentas: '$ 1,200,000.00',
        utilidadNeta: '$ 300,000.00',
        capitalSocial: '$ 500,000.00',
        capitalContable: '$ 940,000.00',
        aplica10: 'Sí',
        futAumentoCap: '$ 100,000.00',
        excesoInsufic: '$ 50,000.00',
        totalGarantia: '$ 150,000.00',
        historico: [
          { tipoMov: 'Alta', fechaEdoFin: '01/01/2025', fechaMovimiento: '05/01/2025', detalle: 'Registro inicial' },
          { tipoMov: 'Actualización', fechaEdoFin: '01/07/2025', fechaMovimiento: '10/07/2025', detalle: 'Actualización semestral' },
          { tipoMov: 'Actualización', fechaEdoFin: '01/01/2026', fechaMovimiento: '05/01/2026', detalle: 'Actualización anual' }
        ]
      }
    },
    {
      subtipo: 'Patrimonial',
      fechaRegistro: '15/02/2026',
      fechaActualizacion: '20/02/2026',
      garantiaPonderada: '$ 80,000.00',
      moneda: 'MXN',
      tipo: 'Personal',
      rol: 'Obligado Solidario',
      detalle: null
    }
  ];

  garantiasObligadoSolidario: GarantiaObligadoSolidarioItem[] = [
    {
      obligadoSolidario: 'Mariana Lopez',
      subtipo: 'Hipotecaria',
      fechaRegistro: '03/01/2026',
      fechaActualizacion: '18/01/2026',
      garantiaPonderada: '$ 320,000.00',
      moneda: 'MXN',
      tipo: 'Inmueble',
      rol: 'Obligado Solidario',
      detalle: {
        garantia: 'GOS-1001',
        persona: 'Ivette Garcia',
        tipoInmueble: 'Casa Habitación',
        calle: 'Av. Reforma',
        numeroExterior: '221',
        numeroInterior: '4B',
        colonia: 'Centro',
        codigoPostal: '06000',
        pais: 'México',
        estado: 'CDMX',
        delegacionMunicipio: 'Cuauhtémoc',
        numeroEscritura: 'ESC-99882',
        noRpp: 'RPP-112233',
        folioRealFlag: 'Sí',
        folioReal: 'FR-778899',
        investigacionRpp: 'Sí',
        vistaOcular: 'Sí',
        fechaAvaluo: '10/01/2026',
        valorInmueble: '$ 1,850,000.00',
        posicionMapfreGravar: 'Primer Lugar',
        afectacionMarginal: 'No',
        observacionesComentarios: 'Inmueble con documentación completa y sin observaciones relevantes.',
        investigacionesGravamen: [
          {
            fechaInvestigacion: '10/01/2026',
            inmuebleGravado: 'No',
            usuario: 'mlopez'
          }
        ]
      }
    },
    {
      obligadoSolidario: 'Roberto Diaz',
      subtipo: 'Prendaria',
      fechaRegistro: '14/02/2026',
      fechaActualizacion: '20/02/2026',
      garantiaPonderada: '$ 95,000.00',
      moneda: 'MXN',
      tipo: 'Mueble',
      rol: 'Obligado Solidario',
      detalle: {
        garantia: 'GOS-2045',
        persona: 'Ivette Garcia',
        tipoInmueble: 'Local Comercial',
        calle: 'Insurgentes Sur',
        numeroExterior: '1550',
        numeroInterior: '12',
        colonia: 'Del Valle',
        codigoPostal: '03100',
        pais: 'México',
        estado: 'CDMX',
        delegacionMunicipio: 'Benito Juárez',
        numeroEscritura: 'ESC-66771',
        noRpp: 'RPP-441122',
        folioRealFlag: 'No',
        folioReal: '',
        investigacionRpp: 'No',
        vistaOcular: 'Sí',
        fechaAvaluo: '18/02/2026',
        valorInmueble: '$ 780,000.00',
        posicionMapfreGravar: 'Segundo Lugar',
        afectacionMarginal: 'Sí',
        observacionesComentarios: 'Pendiente validar antecedentes registrales en la siguiente actualización.',
        investigacionesGravamen: [
          {
            fechaInvestigacion: '18/02/2026',
            inmuebleGravado: 'Sí',
            usuario: 'rdiaz'
          }
        ]
      }
    }
  ];

  detalleGarantiaModalAbierto = false;
  garantiaSeleccionada: GarantiaDetalle | null = null;
  altaGarantiaModalAbierto = false;
  garantiaPendienteAlta: GarantiaItem | null = null;
  altaGarantiaForm: AltaGarantiaForm = {
    garantia: '',
    persona: '',
    noContrato: '',
    deudorPrendario: '',
    entidad: ''
  };
  historicoEdoFinModalAbierto = false;
  comentariosGarantia = '';

  detalleObligadoSolidarioModalAbierto = false;
  obligadoSolidarioSeleccionado: ObligadoSolidarioDetalle | null = null;
  nuevaInvestigacionGravamen: InvestigacionGravamenItem = {
    fechaInvestigacion: '',
    inmuebleGravado: '',
    usuario: ''
  };

  detallePolizaModalAbierto = false;
  polizaSeleccionada: PolizaFianza | null = null;
  detalleMovimientoModalAbierto = false;
  movimientoSeleccionado: MovimientoAsociado | null = null;

  abrirModal(key: ModalKey) {
    this.modalAbierto[key] = true;
  }

  cerrarModal(key: ModalKey) {
    this.modalAbierto[key] = false;
  }

  abrirDetalleGarantia(garantia: GarantiaItem) {
    if (garantia.detalle) {
      this.garantiaSeleccionada = garantia.detalle;
      this.comentariosGarantia = '';
      this.detalleGarantiaModalAbierto = true;
      return;
    }

    this.garantiaPendienteAlta = garantia;
    this.altaGarantiaForm = {
      garantia: '',
      persona: this.garantiasInfo.persona,
      noContrato: '',
      deudorPrendario: '',
      entidad: ''
    };
    this.altaGarantiaModalAbierto = true;
  }

  cancelarAltaGarantia() {
    this.altaGarantiaModalAbierto = false;
    this.garantiaPendienteAlta = null;
    this.altaGarantiaForm = {
      garantia: '',
      persona: '',
      noContrato: '',
      deudorPrendario: '',
      entidad: ''
    };
  }

  confirmarAltaGarantia() {
    if (!this.garantiaPendienteAlta) {
      return;
    }

    const { garantia, persona, noContrato, deudorPrendario, entidad } = this.altaGarantiaForm;
    if (!garantia || !persona || !noContrato || !deudorPrendario || !entidad) {
      return;
    }

    const nuevoDetalle: GarantiaDetalle = {
      garantia,
      persona,
      rol: this.garantiaPendienteAlta.rol,
      fechaEstado: this.garantiaPendienteAlta.fechaActualizacion,
      auditado: 'No',
      moneda: this.garantiaPendienteAlta.moneda,
      activoCirc: '$ 0.00',
      inventario: '$ 0.00',
      activoFijo: '$ 0.00',
      otrosActivos: '$ 0.00',
      totalActivo: '$ 0.00',
      pasivoCirc: '$ 0.00',
      pasivoLargoPlazo: '$ 0.00',
      pasivoDiferido: '$ 0.00',
      totalPasivo: '$ 0.00',
      liquidez: '0.00',
      pbaAcido: '0.00',
      apalancamiento: '0.00',
      rentabilidad: '0%',
      razonDeuda: '0.00',
      capitalTrabajo: '$ 0.00',
      sumaPorcentaje: '0%',
      porcentajeConsiderar: '0%',
      capContConsiderar: '$ 0.00',
      capacidadTrabajo: '$ 0.00',
      suma: '$ 0.00',
      capacidadTecnica: `${entidad} / ${deudorPrendario}`,
      margenUtilidad: '0%',
      ventasNetas: '$ 0.00',
      costoVentas: '$ 0.00',
      utilidadNeta: '$ 0.00',
      capitalSocial: '$ 0.00',
      capitalContable: '$ 0.00',
      aplica10: 'No',
      futAumentoCap: '$ 0.00',
      excesoInsufic: '$ 0.00',
      totalGarantia: this.garantiaPendienteAlta.garantiaPonderada,
      historico: [
        {
          tipoMov: 'Alta',
          fechaEdoFin: this.garantiaPendienteAlta.fechaRegistro,
          fechaMovimiento: this.garantiaPendienteAlta.fechaActualizacion,
          detalle: `Contrato ${noContrato} - Deudor prendario: ${deudorPrendario}`
        }
      ]
    };

    this.garantiaPendienteAlta.detalle = nuevoDetalle;
    this.cancelarAltaGarantia();
    this.garantiaSeleccionada = nuevoDetalle;
    this.comentariosGarantia = '';
    this.detalleGarantiaModalAbierto = true;
  }

  cerrarDetalleGarantia() {
    this.detalleGarantiaModalAbierto = false;
    this.garantiaSeleccionada = null;
    this.historicoEdoFinModalAbierto = false;
  }

  abrirHistoricoEdoFin() {
    this.historicoEdoFinModalAbierto = true;
  }

  cerrarHistoricoEdoFin() {
    this.historicoEdoFinModalAbierto = false;
  }

  abrirDetalleObligadoSolidario(item: GarantiaObligadoSolidarioItem) {
    this.obligadoSolidarioSeleccionado = {
      ...item.detalle,
      investigacionesGravamen: [...item.detalle.investigacionesGravamen]
    };
    this.nuevaInvestigacionGravamen = {
      fechaInvestigacion: '',
      inmuebleGravado: '',
      usuario: ''
    };
    this.detalleObligadoSolidarioModalAbierto = true;
  }

  cerrarDetalleObligadoSolidario() {
    this.detalleObligadoSolidarioModalAbierto = false;
    this.obligadoSolidarioSeleccionado = null;
    this.nuevaInvestigacionGravamen = {
      fechaInvestigacion: '',
      inmuebleGravado: '',
      usuario: ''
    };
  }

  agregarInvestigacionGravamen() {
    if (!this.obligadoSolidarioSeleccionado) {
      return;
    }

    const { fechaInvestigacion, inmuebleGravado, usuario } = this.nuevaInvestigacionGravamen;
    if (!fechaInvestigacion || !inmuebleGravado || !usuario) {
      return;
    }

    this.obligadoSolidarioSeleccionado.investigacionesGravamen.push({
      fechaInvestigacion,
      inmuebleGravado,
      usuario
    });

    this.nuevaInvestigacionGravamen = {
      fechaInvestigacion: '',
      inmuebleGravado: '',
      usuario: ''
    };
  }

  confirmarObligadoSolidario() {
    this.cerrarDetalleObligadoSolidario();
  }

  abrirDetallePoliza(poliza: PolizaFianza) {
    this.polizaSeleccionada = poliza;
    this.detallePolizaModalAbierto = true;
  }

  cerrarDetallePoliza() {
    this.detallePolizaModalAbierto = false;
    this.polizaSeleccionada = null;
    this.detalleMovimientoModalAbierto = false;
    this.movimientoSeleccionado = null;
  }

  abrirDetalleMovimiento(movimiento: MovimientoAsociado) {
    this.movimientoSeleccionado = movimiento;
    this.detalleMovimientoModalAbierto = true;
  }

  cerrarDetalleMovimiento() {
    this.detalleMovimientoModalAbierto = false;
    this.movimientoSeleccionado = null;
  }
}
