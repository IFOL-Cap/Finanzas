import { TemplateRef } from '@angular/core';
import { RequiredInfo } from '../../interfaces';
import { Paquete } from './cotizacion.interface';

export enum TipoPaquete {
	Premium = 'PREMIUM', PlusAmplio = 'AMPLIO', TuEliges = 'TÚ ELIGES', Otro = 'OTRO'
};

export enum PeriodoPago {
	Anual = "CONTADO", Semestral = "SEMESTRAL", Trimestral = "TRIMESTRAL", Mensual = "MENSUAL"
};

export enum TipoCobertura {
	DaniosMateriales = "Daños Materiales",
	RoboTotal = "Robo Total",
	RoboParcial = "Robo Parcial",
	RespCivilBien = "Responsabilidad Civil Bienes",
	RespCivilPerso = "Responsabilidad Civil Personas",
	RespCivilXMA = "RC Catastrófica por Muerte Accidental",
	GatosMedicos = "Gastos Médicos",
	AsistenciaCompleta = "Asistencia Completa",
	DefensaJuridica = "Defensa Jurídica",
	AccidenteConductor = "Accidentes al Conductor",
	DevPrimayDeducible = "Devolución de Prima y Deducible",
	AutoSustituto = "Auto Sustituto",
	GarantiaSobRuedas = "Garantía Sobre Ruedas",
	ReparacionAgencia = "Reparación en Agencia",
};

export enum TipoCoberturaAdicional {
	PerdidaTotal = "Pérdida Total por Daños Materiales",
	IntegralExtranjero = "Cobertura Integral en el Extranjero",
	AutoGapGti = "Auto GAP GTI",
	EquipoEspecial = "Equipo Especial",
	MuerteAccidental = "Muerte Accidental"
};

export interface Coberturas {
		daniosMateriales: CoberturaDetalle;
		roboTotal: CoberturaDetalle;
		roboParcial: CoberturaDetalle;
		respCivilBien: CoberturaDetalle;
		respCivilPerso: CoberturaDetalle;
		respCivilXMA: CoberturaDetalle;
		gatosMedicos: CoberturaDetalle;
		asistenciaCompleta: CoberturaDetalle;
		defensaJuridica: CoberturaDetalle;
		accidenteConductor: CoberturaDetalle;
		devPrimayDeducible: CoberturaDetalle;
		autoSustituto: CoberturaDetalle;
		garantiaSobRuedas: CoberturaDetalle;
		reparacionAgencia: CoberturaDetalle;
};

export interface CoberturasAdicionales {
	perdidaTotal: CoberturaDetalle;
	integralExtranjero: CoberturaDetalle;
	autoGapGti: CoberturaDetalle;
	equipoEspecial: CoberturaDetalle;
	muerteAccidental: CoberturaDetalle;
};

export interface PaqueteTab{
	tipo: TipoPaquete;
	codigo: number;
	modalidad: number;
	producto: number;
	nombre: string;
};

export interface PagoDetalle {
	id: number;
	periodoPago: PeriodoPago;
	montosPago: MontoPago[];
	primerPago: string;
	otrosPagos: string;
	numeroPagos: number;
};

export interface MontoPago {
	cotizacion: number;
	monto: number;
	primaNeta: number;
	recargos: number;
	derechos: number;
	impuestos: number;
	primatotal: number;
};

export interface PeriodosDePago {
	anual: PagoDetalle;
	semestral: PagoDetalle;
	trimestral: PagoDetalle;
	mensual: PagoDetalle;
};

export interface Deducible {
	codigo: number;
	descripcion: string;
};

export interface DeducibleItem {
	codigo: number;
	descripcion: string;
};

export interface SelectItem {
	value:number;
	display:string;
}

export interface LimiteResponsabilidad {
	default: string;
	descripcion: string;
	intervalo: number;
	tipLim: number;
	mcaRecalculo: boolean;
	mcaOpcional?: boolean;
	mcaOpc?: string;
	check: number;
};

export interface CoberturaDetalle {
	tipoCobertura: TipoCobertura | TipoCoberturaAdicional;
	codigoCobertura: number;
	codigoNwTron: number;
	nombre: string;
	toolTip: string;
	saDef: string;
	saDes: string;
	intervalo: number;
	tipLim?: number;
	mcaRecalculo: boolean;
	mcaOpcional: boolean;
	mcaOpc: string;
	check: number;
	isChecked: boolean;

	deducibleDefault?:	string;
	deducibleDefaultValue?:	number;
	deducibleDescripcion:	string;
	codCoberturaIncluida?: any | number | number[];
	codCoberturaExcluida?: number;
	deducibles?: DeducibleItem[];
	deduciblesSelect?: SelectItem[];
	deducibleElegido?: SelectItem;
	hayDeducibles: boolean;
	limites?: LimiteItem[];
	limitesSelect?: SelectItem[];
	limiteElegido?: SelectItem
	hayLimites: boolean;
	esCoberturaEspecial: boolean;
};

export interface LimiteItem {
	impLim: string;
	mcaDef: string;
};

export interface DetalleOferta {
	formasPago: PeriodosDePago;
	// coberturas: CoberturaDetalle[];
	// coberturasAdicionales: CoberturaDetalle[];
	coberturas: Coberturas;
	coberturasAdicionales: CoberturasAdicionales;

};

export interface TabOferta {
  id: string;
	numeroSolicitud: number;
  nombre: string;
  template?: TemplateRef<any>;
	paquete: PaqueteTab;
	requiredInfo: RequiredInfo;
	detalleOferta?: DetalleOferta;
	contenido?: ContenidoTabOferta;
};

export interface CotizacionOferta {
	numeroSolicitud: number;
	paqueteBase: number;
	formaPagoBase: number;
	tabsOferta: TabOferta[];
}

export interface ContenidoTabOferta {
	valorUno: string;
	valorDos: string;
	valorTres: string;
	valorCuatro: string;
};

export interface CotizacionElegida {
	numeroSolicitud: number;
	paquete: PaqueteTab;
	DetallesPago: PagoDetalle;
	totalPago: number;
	hayCoberturaAccidente: boolean;
	hayCoberturaMuerte: boolean;
};

export function findCoberturaByCode(cobers: CoberturaDetalle[], codigo: number): CoberturaDetalle | undefined {
	return cobers.find(cobertura => cobertura.codigoCobertura == codigo);
}
export function getCoberturasArray(coberturas: Coberturas, adicionales: CoberturasAdicionales): CoberturaDetalle[]  {
	return Object.values(coberturas).concat(Object.values(adicionales));
}
