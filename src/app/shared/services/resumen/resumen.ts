export interface Resumen 
{
    titulo: String;
    ramo: String;
    agentes: {
        id: number;
        nombre: String;
        primerApellido: String;
        segundoApellido: String;
        codigoAgente: String;
        porcentaje: String;
    }[];
    aplicacion: String;
    formaPago: String;
    primerRecibo: String;
    reciboSubsecuente: String;
    tipoPago: String;
}
