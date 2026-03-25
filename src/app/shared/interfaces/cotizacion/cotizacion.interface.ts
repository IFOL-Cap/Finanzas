//#region Interfaces Request Oferta Comercial

	export interface ParamsOferta{
		ramo:number,
		uso:number,
		tipo:number,
		clasificacion:number,
		cotiza: string
	};

//#endregion

//#region Interfaces Response Oferta Comercial

	export interface Cotizacion {
		xml: Xml
	};

	export interface Xml {
		num_solicitud: string
		paquete_base: string
		forma_pago_base: string
		xmlCoberturas: XmlCoberturas
		ofertaComercial: OfertaComercial
	};

	export interface XmlCoberturas {
		cod_paquete_base: string
		paquetes: Paquetes
		coberturas: Coberturas
		coberturasadicionales: Coberturasadicionales
	};

	export interface Paquetes {
		paquete: Paquete[]
	};

	export interface Paquete {
		cod_paquete: string
		cod_modalidad: string
		cod_producto: string
		nom_paquete: string
	};

	export interface Coberturas {
		cobertura: Cobertura[]
	};

	export interface Cobertura {
		cod_cob: string
		cod_cob_nwtron: string
		nom_cob: string
		tool_tip: string
		sa_def: string
		intervalo: string
		tip_lim?: string
		mca_recal: string
		deducibles: Deducibles
		ded_def: string
		ded_des: string
		sa_des: string
		paquetes: Paquetes2
		limites?: Limites
	};

	export interface Deducible {
		cod_ded: string,
		desc_ded: string
	};

	export interface Deducibles {
		deducible: any | Deducible[]
	};

	export interface Paquetes2 {
		paquete: Paquete2[]
	};

	export interface Paquete2 {
		cod_paquete: string
		mca_opc?: string
		mod_chk: string
		cod_cob_inclu: any
		cod_cob_exclu?: string
	};

	export interface Limite {
		imp_lim: string
		mca_def: string
	};

	export interface Limites {
		limite: any | Limite[]
	};

	export interface Coberturasadicionales {
		cobertura: Cobertura2[]
	};

	export interface Cobertura2 {
		cod_cob: string
		cod_cob_nwtron: string
		nom_cob: string
		tool_tip: string
		sa_def: string
		intervalo: string
		tip_lim?: string
		mca_recal: string
		deducibles: Deducibles2
		ded_def?: string
		ded_des: string
		sa_des: string
		paquetes: Paquetes3
	};

	export interface Deducibles2 {
		deducible: any
	};

	export interface Paquetes3 {
		paquete: Paquete3[]
	};

	export interface Paquete3 {
		cod_paquete: string
		mca_opc?: string
		mod_chk: string
		cod_cob_exclu?: string
	};

	export interface OfertaComercial {
		cod_paquete_base: string
		paquetes: Paquetes
		formasPago: FormasPago
	};

	export interface FormasPago {
		formaPago: FormaPago[]
	};

	export interface FormaPago {
		pagoID: string
		pagoDesc: string
		pagos: Pagos
	};

	export interface Pagos {
		pago: any | Pago[]
	};

	export interface Pago {
		numPagos: string,
		montospaquetes: MontosPaquetes
	};

	export interface MontosPaquetes {
		montos: Monto[];
	};

	export interface Monto {
		cotizacion: string;
		cod_paquete: string;
		monto: string;
		primaneta: string;
		recargos: string;
		derechos: string;
		impuestos: string;
		primatotal: string;
	};

//#endregion
