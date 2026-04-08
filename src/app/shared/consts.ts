export const Messages = {
    requiredInfo: "Completa los campos marcados con * para continuar con la cotización."
}

export const LabelsTerminos = [
    'Campaña de descuento - Comisión',
    'Descuento del 15% o menor - Comisión del 15%',
    'Descuento mayor del 15% - Comisión del 10%',
    '(Solo aplica para ramos 410, para pólizas de nueva producción, no renovaciones o clientes en cartera)'
  ]

export const Icons = {
    0: '/assets/icons/more',
    1: '/assets/icons/myQuotations',
    2: '/assets/icons/myPolicys',
    3: '/assets/icons/rejectionLetter',
    4: '/assets/icons/car-h',
    5: '/assets/icons/demage',
    6: '/assets/icons/life',
    7: '/assets/icons/download',
    8: 'assets/icons/home/search',
    9: 'assets/icons/home/filterM'


}
export const TableLabels = {
    firstPageLabel: "Primera página",
    itemsPerPageLabel: "Registros por página:",
    lastPageLabel: "Última página",
    nextPageLabel: "Siguiente",
    previousPageLabel: "Anterior "
}
export const ApRoutes = {
    login: {
        value: 'login',
        full: () => '/login'
    },
    im:{
        value: 'im',
        path: {
            step1: {
                value: 'step1',
                full: ()=> '/im/step1'
            },
            step2: {
                value: 'step2',
                full: ()=> '/im/step2'
            },
        }
    }, 
    rn:{
        value: 'rn',
        path: {
            step1: {
                value: 'step1',
                full: ()=> '/rn/step1'
            },
            step2: {
                value: 'step2',
                full: ()=> '/rn/step2'
            },
            step3: {
                value: 'step3',
                full: ()=> '/rn/step3'
            },
        }
    } ,
    catalogos:{
        value: 'catalogos',
        path: {
            step1: {
                value: 'step1',
                full: ()=> '/catalogos/step1'
            },
        }
    },
    garantias: {
        value: 'garantias',
        path: {
            step1: {
                value: 'step1',
                full: ()=> '/garantias/step1'
            },
            catalogo: {
                value: 'catalogo',
                path: {
                    altaTerceros: {
                        value: 'altaTerceros',
                        path: {
                            fisica:
                            {
                                value: 'fisica',
                                full: () => 'garantias/catalogo/altaTerceros/fisica'
                            },
                            moral: {
                                value: 'moral',
                                full: () => 'garantias/catalogo/altaTerceros/moral'
                            }
                        }
                    },
                }
            },
            consultas: {
                value: 'consultas',
                path: {
                    garantiaPoliza: {
                        value: 'garantiaPoliza',
                        full: () => 'consultas/garantiaPoliza',
                    },
                    personas : {
                        value: 'personas',
                        full: () => 'consultas/personas'
                    },
                    envioPoliza : {
                        value: 'envioPoliza',
                        full: () => 'consultas/envioPoliza'
                    },
                    solicitudes: {
                        value: 'solicitudes',
                        full: () => 'consultas/solicitudes'
                    },
                    consultaXml: {
                        value: 'consultaXml',
                        full: () => 'consultas/consultaXml'
                    },
                }
            },
            refNeg: {
                value: 'refNeg',
                path: {
                    personas: {
                        value: 'personas',
                        full: () => 'refNeg/personas'
                    }
                }

            }
        }
    }
}

export const BreakPoint = {
    mobile: 1150,
}