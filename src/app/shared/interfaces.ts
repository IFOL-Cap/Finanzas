/*
export interface RequiredInfo {
    message: string;
    isCustom?: boolean;
}

export interface LabelHelp {
    idTool?: string;
    isRquired: boolean;
    isWithHelp: boolean;
    isWithSubtitle: boolean;
    title: string;
    subtitle: string;
    position: 'top' | 'bottom' | 'right' | 'left';
    helpMsg: string;
}

export interface Encabezado {
    title: string,
    colorRed: boolean,
    isIcon: boolean,
    isGuion?: boolean,
    isCheck?: boolean,
}

export interface FormElement {
    type: 'text'| 'number' | 'mail' |'' | 'password';
    pattern?: string;
    isCheck?: boolean
    isrequied: boolean;
    placeHolder: string;
    isDisable: boolean;
    isHidden: boolean;
    isRead?: boolean;
    data?: any;
    id?: DifferetType,
    isChecked?: boolean,
    isMultipleButton?: boolean,
    idDate?: string,
    titleLeft?: string,
    titleRight?:string;
    isEdad?: boolean
    optionSelected?: number
    isFrom?: boolean;
    isInfo?: boolean;
    isAdvancedSearch? : boolean
    labelInfo?: string;
    itemsEnd?: boolean
}

export interface FormTextAreaElement {
    type: 'text'| 'number' | 'mail' |'';
    pattern?: string;
    isrequied: boolean;
    placeHolder: string;
    isDisable: boolean;
    isHidden: boolean;
    isRead?: boolean;
    data?: any;
    id?: DifferetType,
    maxLength?: number,
    isChecked?: boolean,
    isMultipleButton?: boolean,
    idDate?: string,
}

export enum FlowFrom {
    gs,
}

export interface StepperI {
    flowFrom: FlowFrom;
}

export interface CarouselI {
    view: LocationSite;
    data: ItemCarouselI[];
    isResponsiveImg?: boolean;
}

export interface ItemCarouselI{
    imgUrl: string;
    redirectUrl: string;
    imgUrlMobile?: string;
}

export enum DeviceView {
    mobile,
    tablet,
    laptop,
    other
}

export interface SearchI {
    type: SearchType;
    from: FromButton;
    placeholder: string;
    placeholderMob: string;
}

export interface BtnMuI {
    labelBtn: string;
    labelMobile?: string;
    from: FromButton;
    isONlyIcon: boolean;
    icon?: IconType;
    iconUrl?: string;
}

export enum SearchType {
    navbar,
    table
}

export enum DifferetType {
    none,
    SelectYear,
    SelectMark,
    SelectDescription
}


export interface ButtonI{
    type: ButtonType;
    label: string;
    icon?: IconType;
    isOnlyIcon?: boolean;
    from?: FromButton;
    isDisable?: boolean;
}

export enum FromButton {
    general,
    fromHeaderHome,
    policiesRenew,
    managerPage,
    navbar,
    table,
    quickLink
}


export enum IconType {
    more,
    myQuotations,
    myPolicys,
    rejectionLetter,
    carH,
    demage,
    life,
    download,
    search,
    filter

}

export enum ButtonType {
    basic,
    disable,
    secondary,
}

export interface VehiculoI {
    type: VehiculoType,
    state: StateVehiculo,
    borderPosition: PositionStyle,
    label: string,
}

export enum StateVehiculo {
    noselected,
    selected,
    none
}

export enum VehiculoType {
    auto,
    truck,
    pickups,
    moto

}

export enum PositionStyle {
    top,
    right,
    button,
    left,
    none
}

export interface CarouselI {
    view: LocationSite,
    data: ItemCarouselI[],
}

export interface ItemCarouselI{
    imgUrl: string;
    redirectUrl: string;
}

export enum LocationSite {
    quoter,
    dashboard

}

export interface DataMenu {
    title?: string;
    iconPath: string;
}

 export interface LabelToggleI {
    title: string;
    subtitle: string;
    isWithSubtitle: boolean;
    display: string
    isChecked: boolean;
 }

 export interface ItemCompleted {
    label: string;
    value: string;
    from:   ItemFrom;
    type: ItemType;
 }

export enum ItemType {
    none,
    fill
}

 export enum ItemFrom {
    default,
    dashboard,
 }

 export enum OptionData {
    none,
    ramo,
    clasificacion,
    anio,
    vigencia,
    vigenciaFinal,
    fechaNacimiento,
    marca,
    marcaDesc,
    polizaGrupo,
    contrato,
    zona,
    descripcion,
    descripcionModelo,
    modelo,
    submodelo,
    vin,
    agente,
    uso,
    usoDescripcion,
    valorUnidad,
    edad,
    tipoVehiculo,
    codigoPostal,
    estado,
    poblacion,
    descuento,
    recargo,
    comision,
    disabledDescuento,
    disabledRecargo,
    disabledCesion,
    carga,
    cargaDescripcion,
    tipoPersona,
    descuentoComision,
    cuadroComision,
    numeroSerie,
    existeSerie,
    claveMapfre,
    valorVehiculo,
    numSerKBB,
    marcaKBB,
    modeloKBB,
    marcaDesKBB,
    descripcionKBB,
    valorVehiKBB,
    pasajeros,
    descuentoSuperado,
    valorConvenido,
    numeroFactura,
    fechaFactura,
    montoFactura,
    scoreCliente,
    tarifaMultivariada,
    rfc,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    clienteMapfre,
    color,
    colorDescripcion,
    garage,
    sexoNacimiento,
    valorDescripcion,
    estadoDescripcion,
    poblacionDescripcion,
    calleNumero,
    colonia,
    numeroInterior,
    numeroExterior,
    secuDir,
    correo,
    telefonoCelular,
    telefonoFijo,
    denominacionRazonSocial,
    fechaConstitucion,
    valorConvenidoNoExcedido,
    vinCorrecto,
    descuentoIntegralidadAprobado,
    contratanteDescuentoIntegralidad,
    recargaResumen,
    recargaCotizacion

}

export interface QuotationsQueryI{
    check: string;
    quotationNumber: number;
    name: string;
    quotationDate: string;
}

export interface PolicyQueryI{
    check: string;
    policyNumber: number;
    endorsement: number;
    name: string;
    rfc: string
    validity: string;
    brand: string;
    description: string;
    status: string;
    office: string;
}

export interface DynamicButtons {
    title: string;
    subtitle: string;
    selected: boolean;
  }
export interface Check {
    titleCheck?: string,
    helpMsg?: string,
    isCheck?: boolean,
    isHelpMsg?: boolean,
    isCustom?: boolean,
    from?: LabelInputFrom ,

}

export enum LabelInputFrom {
    coverage,
    serieVin,
    cargoTruck

}

*/


export interface DataMenu {
    title?: string;
    iconPath: string;
}

export interface RequiredInfo {
    message: string;
    isCustom?: boolean;
    isIconClose?: boolean;
}
export interface LabelHelp {
    idTool?: string;
    isRquired: boolean;
    isWithHelp: boolean;
    isWithSubtitle: boolean;
    title: string;
    subtitle: string;
    position: 'top' | 'bottom' | 'right' | 'left';
    helpMsg: string;
}

export interface DynamicButtons {
    title: string;
    subtitle: string;
    selected: boolean;
  }
export interface Check {
    titleCheck?: string,
    helpMsg?: string,
    isCheck?: boolean,
    isHelpMsg?: boolean,
    isCustom?: boolean,
    from?: LabelInputFrom ,

}
export interface LabelData {
    labeltitle: string,
    labelInfo: string,
}
export interface AccordionList {
    flag: string,
    id: string,
    target: string,
    controls: string,
  }

export interface Encabezado {
    title: string,
    colorRed: boolean,
    isIcon: boolean,
    isGuion?: boolean,
    isCheck?: boolean,
}

export interface FormElement {
    type: 'text'| 'number' | 'mail' |'' | 'password';
    pattern?: string;
    isCheck?: boolean
    isrequied: boolean;
    placeHolder: string;
    isDisable: boolean;
    isHidden: boolean;
    isRead?: boolean;
    data?: any;
    id?: DifferetType,
    isChecked?: boolean,
    isMultipleButton?: boolean,
    idDate?: string,
    titleLeft?: string,
    titleRight?:string;
    isEdad?: boolean
    optionSelected?: number
    isFrom?: boolean;
    isInfo?: boolean;
    isAdvancedSearch? : boolean
    labelInfo?: string;
    itemsEnd?: boolean;
     titleMiddle?: string,
}
export interface FormTextAreaElement {
    type: 'text'| 'number' | 'mail' |'';
    pattern?: string;
    isrequied: boolean;
    placeHolder: string;
    isDisable: boolean;
    isHidden: boolean;
    isRead?: boolean;
    data?: any;
    id?: DifferetType,
    maxLength?: number,
    isChecked?: boolean,
    isMultipleButton?: boolean,
    idDate?: string,
}
export enum DifferetType {
    none,
    SelectYear,
    SelectMark,
    SelectDescription
}


export interface ButtonI{
    type?: ButtonType;
    label: string;
    icon?: IconType;
    isOnlyIcon?: boolean;
    from?: FromButton;
    isDisable?: boolean;
}
export enum FromButton {
    general,
    fromHeaderHome,
    policiesRenew,
    managerPage,
    navbar,
    table,
    quickLink
}
export enum IconType {
    more,
    myQuotations,
    myPolicys,
    rejectionLetter,
    carH,
    demage,
    life,
    download,
    search,
    filter

}

export enum ButtonType {
    basic,
    disable,
    secondary,
    tertiary
}

export interface VehiculoI {
    type: VehiculoType,
    state: StateVehiculo,
    borderPosition: PositionStyle,
    label: string,
}
export interface buttonInfo {
	title: string;
	subtitle: string;
	selected: boolean;
}
export enum StateVehiculo {
    noselected,
    selected,
    none
}
export enum VehiculoType {
    auto,
    truck,
    pickups,
    moto

}
export enum PositionStyle {
    top,
    right,
    button,
    left,
    none
}
export interface CarouselI {
    view: LocationSite;
    data: ItemCarouselI[];
    isResponsiveImg?: boolean;
}
export interface ItemCarouselI{
    imgUrl: string;
    redirectUrl: string;
    imgUrlMobile?: string;
}

export enum LocationSite {
    quoter,
    dashboard

}

 export interface LabelToggleI {
    title: string;
    subtitle?: string;
    isWithSubtitle?: boolean;
    display?: string
    isChecked: boolean;
    title2?: string;
    isWithToggle?: boolean;
    isWithIcon?:boolean;
 }

 export interface ItemCompleted {
    label: string;
    value: string;
    from:   ItemFrom;
    type: ItemType;
 }
export enum ItemType {
    none,
    fill
}
 export enum ItemFrom {
    default,
    dashboard,
 }
 export interface PaginatorI {
    length?: number,
    pageSize?: number,
    pageSizeOptions: number[],
 }
 export interface AvatarI {
    title: string,
    subtitle: string,
    imgUrl: string
 }
 export interface StatusI {
    type: StatusType,
    from: FromButton
 }
 export enum StatusType {
    pending,
    payed,
    expired

 }

export interface VerticalBI {
    from: FromButton;
    data: string[];
}
export interface BtnBadgeI {
    type?: string;
    label?: string;
    icon: IconType;
    count?: number;
}

export interface BtnMuI {
    labelBtn: string;
    labelMobile?: string;
    from: FromButton;
    isONlyIcon: boolean;
    icon?: IconType;
    iconUrl?: string;
}

export interface SearchI {
    type: SearchType;
    from: FromButton;
    placeholder: string;
    placeholderMob: string;
}

export enum SearchType {
    navbar,
    table
}
export enum DeviceView {
    mobile,
    tablet,
    laptop,
    other
}


export interface TextAreI {
    placheholdeer: string;
    rows: number;
    cols: number;

}
export interface HelpI {
    id?: string;
    msg:string;
    position?: 'top' | 'bottom' | 'right' | 'left';
}

export interface MyProcedures {
    folio: number;
    ot: number;
    dateRegistration: string;
    station: string;
    userName: string;
    action: string;
    poliza: number
  }

  export enum ComponentType {
    input,
    select,
    groupButtons,
    groupButtonsCustom,
    labelHelp
  }
export interface ButtonSelect {
    labelYes: string;
    labelNo: string;
}
export enum FlowFrom {
    fz,
    im,
}

export interface LabelInputI {
    isCustom: boolean,
    from: LabelInputFrom ,
    isWithLinks?: boolean;
    links?: QuestionLinkI[],
}
export enum LabelInputFrom {
    coverage,
    serieVin,
    cargoTruck

}

export interface RadioI {
    title: string,
    isChecked: boolean,
    isCustom?: boolean,
    type?: ComponentType

}

export interface LabelPToggleI {
    isWithLinks?: boolean,
    links?: QuestionLinkI[],
}

export interface SectionInfoI {
    isWithRfc?: boolean,
}
export interface StepperI {
    flowFrom: FlowFrom;
}
export interface QuestionLinkI {
    title:string;
    isUnderline:boolean;
    isCustom?:boolean;
    configMdl: GenericMdlI;

}
export interface GenericMdlI {
    isOpen:boolean;
    title:string;
    type: GenericType;
    isAceptBtn: boolean;
}
export enum GenericType {
    money,
    personalObject,
    electrodomestic,
    crystals,
    menage,
    electrodomesticSimple,
    expressAgreement,
    rcParking,
    extendedFit

}
export interface PrintMdlI {
    title: string;
    content:string;
    footer: string;
    firstBtn: string;
    secondBtn: string;
}
export interface CrystalesMdl {
    isOpen: boolean;
    title: string;
}
export interface GenericMdlI {
    isOpen:boolean;
    title:string;
    type: GenericType;
    isAceptBtn: boolean;
}
export interface HedaersHbsI {
    count: number;
    titles: string[];
}

export interface TitleItemI
{
    isOnlyTile:boolean;
    title:string;
    isWithHelper:boolean;
    help?: HelpI;
    type: TypeTitleItem;
    isWithLinks?: boolean;
    links?: QuestionLinkI[],
}

export enum TypeTitleItem
{
    ok,
    check,
    protectedTg,
}

export interface FormDinamycI {
    data: SectionFormI[]
}

export interface SectionFormI {
    section: string,
    questions: QuestionForm[],
}

export interface QuestionForm {
    question: string,
    helperMsg: string,
    owners: string[],
    componentType: ComponentType;
}

export interface ConfirmMdlI {
    title: string;
    type: ConfirmType;
    isOpen: boolean;
    itemSelected?: string;
    labelCancel?: string;
    labelAcept?: string;

}

export enum ConfirmType {
    medicalQuestions,
    quickLinksAdd
}

export interface FormMedical
{
    isFirstSection?: boolean;
    isSportQuestion?: boolean;
    isSecondSection?: boolean
    isThirdSection?: boolean
}

export interface ModalPrintPolicy
{
    title: string;
    message: string;
}
