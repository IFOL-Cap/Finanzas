export interface DatosIniciales {
    ramo: number;
    clasificacion: number;
    anio: number;
    vigenciaDesde: Date;
    vigenciaHasta: Date;
    fechaNacimiento: Date;
    marca: number;
    marcaDesc: string;
    polizaGrupo: string;
    contrato: string;
    zona: string;
    descripcion: string;
    descripcionModelo: string;
    modelo: number;
    submodelo: number;
    vin: string;
    agente: string;
    uso: number;
    usoDescripcion: string;
    valorUnidad: number;
    valorDescripcion: string;
    edad: number;
    tipoVehiculo: number;
    codigoPostal: number;
    estado: number;
    estadoDescripcion: string;
    poblacion: number;
    poblacionDescripcion: string;
    estadoCP: number;
    poblacionCP: number;
    radioButton: number;
    descuento: number;
    recargo: number;
    comision: number;
    disabledDescuento: boolean;
    disabledRecargo: boolean;
    disabledCesion: boolean;
    carga: string;
    cargaDescripcion: string;
    tipoPersona: string;
    //3rd step
    numSerie: string;
    placas: string;
    numMotor: string;

    // Datos para persona física
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    sexoNacimiento: string;
    homoclave: string;
    pasaporte: string;

    // Datos de contacto
    correo: string;
    telefonoCelular: string;
    telefonoFijo: string;

    // Domicilio
    calleNumero: string;
    colonia: string;
    numeroInterior: number;
    numeroExterior: number;
    secuDir: string;

    // Datos para persona moral
    denominacionRazonSocial: string;
    fechaConstitucion: Date;
    rfc: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    nombreRepresentanteLegal: string;

    descuentoComision: string;
    cuadroComision: number;
    existeSerie: number;
    claveMapfre: string;
    valorVehiculo: number;
    numSerKBB: string;
    marcaKBB: number;
    modeloKBB: number;
    marcaDesKBB: string;
    descripcionKBB: string;
    valorVehiKBB: number;
    pasajeros: number;
    descuentoSuperado: boolean;
    valorConvenido: number;
    numeroFactura: string;
    fechaFactura: Date;
    montoFactura: number;
    scoreCliente: boolean;
    tarifaMultivariada: boolean;
    clienteMapfre: boolean;
    color: number;
    colorDescripcion: string;
    garage: boolean;
    valorConvenidoNoExcedido: boolean;
    vinCorrecto: boolean;
    descuentoIntegralidadAprobado: boolean;
    contratanteDescuentoIntegralidad: string;
    recargaResumen: boolean;
    recargaCotizacion: boolean;

}

export interface DatosInicialesContratante extends DatosIniciales{
    
}

export interface DatosInicialesOtroContratante extends DatosIniciales{
    
}

export interface DatosInicialesBeneficiarioPreferente extends DatosIniciales{
    
}