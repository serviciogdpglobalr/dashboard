//Data Variables
let solicitudesMes = 47;
let solicitudesProcesadas = 47;
let solicitudesJohana = 20;
let solicitudesAngel = 27;
let solicitudesAbril = 55;
let solicitudesMayo = 84;
let solicitudesJunio = 47;
let reportesPorEnviar = 43;
let reportesEnviados = 43;
let reportesErrores = 0;
let estatus = 6;
let creacion = 4;
let casoTop = 2;
let incidencia = 0;
let cierre = 7;
let crq = 11;
let bandeja = 4;
let proyecto = 1;
let documentacion = 19;
let escalamiento = 10;
let certificacion = 7;
let correosErrores = 2;
let desarrolloArea = 2;
let estatusArea = 1;
let gdp = 5;
let clasificacion = 5;
let tablas = 5;
let cartera = 5;
let prioridadesArea = 1;
let validacionesInc = 2;
let boletin = 17;
//let desarrolloGerencia = 2;

//Elementos html
let dataMes = document.querySelector('.data-mes');
let dataProcesadas = document.querySelector('.data-procesadas');
let dataJohana = document.querySelector('.data-johana');
let dataAngel = document.querySelector('.data-angel');
let mes1 = document.querySelector('.mes1');
let mes2 = document.querySelector('.mes2');
let mes3 = document.querySelector('.mes3');
let mes1Data = document.querySelector('.mes1-data');
let mes2Data = document.querySelector('.mes2-data');
let mes3Data = document.querySelector('.mes3-data');
let reportesEnviadosData = document.querySelector('.reportes-enviados-data');
let reportesPorEnviarData = document.querySelector('.reportes-por-enviar-data');
let reportesEnviadosBar = document.querySelector('.reportes-enviados');
//let circleGraphContainer = document.querySelector('.circle-graph-container');
let estatusBar = document.querySelector('.estatus');
let creacionBar = document.querySelector('.creacion');
let topBar = document.querySelector('.top');
let incidenciaBar = document.querySelector('.incidencia');
let cierreBar = document.querySelector('.cierre');
let crqBar = document.querySelector('.crq');
let bandejaBar = document.querySelector('.bandeja');
let proyectoBar = document.querySelector('.proyecto');
let documentacionBar = document.querySelector('.documentacion');
let escalamientoBar = document.querySelector('.escalamiento');
let certificacionBar = document.querySelector('.certificacion');
let estatusData = document.querySelector('.estatus-data');
let creacionData = document.querySelector('.creacion-data');
let topData = document.querySelector('.top-data');
let incidenciaData = document.querySelector('.incidencia-data');
let cierreData = document.querySelector('.cierre-data');
let crqData = document.querySelector('.crq-data');
let bandejaData = document.querySelector('.bandeja-data');
let proyectoData = document.querySelector('.proyecto-data');
let documentacionData = document.querySelector('.documentacion-data');
let escalamientoData = document.querySelector('.escalamiento-data');
let certificacionData = document.querySelector('.certificacion-data');
//let circleGraphContainerMail = document.querySelector('.circle-graph-container-mails');
let efectividadCorreosData = document.querySelector('.porcentaje-correos');
let efectividadReportesData = document.querySelector('.porcentaje-reportes');
let desarrolloAreaBar = document.querySelector('.desarrollo');
let estatusAreaBar = document.querySelector('.estatus-area');
let gdpBar = document.querySelector('.gdp');
let clasificacionBar = document.querySelector('.clasificacion');
let tablasBar = document.querySelector('.tablas');
let carteraBar = document.querySelector('.cartera');
let prioridadesAreaBar = document.querySelector('.prioridades');
let validacionesIncBar = document.querySelector('.validaciones-inc');
let boletinBar = document.querySelector('.boletin');
let desarrolloGerenciaBar = document.querySelector('.desa-gerencia');
let desarrolloAreaData = document.querySelector('.desarrollo-data');
let estatusAreaData = document.querySelector('.estatus-area-data');
let gdpData = document.querySelector('.gdp-data');
let clasificacionData = document.querySelector('.clasificacion-data');
let tablasData = document.querySelector('.tablas-data');
let carteraData = document.querySelector('.cartera-data');
let prioridadesAreaData = document.querySelector('.prioridades-data');
let validacionesIncData = document.querySelector('.validaciones-inc-data');
let boletinData = document.querySelector('.boletin-data');
//let desarrolloGerenciaData = document.querySelector('.desa-gerencia-data');

const solicitudes1 = () => {
    dataMes.textContent = solicitudesMes;
    dataProcesadas.textContent = solicitudesProcesadas;
    dataJohana.textContent = solicitudesJohana;
    dataAngel.textContent = solicitudesAngel;
}

const solicitudesPorMes = () => {
    mes1.style.height = `${solicitudesAbril}%`;
    mes2.style.height = `${solicitudesMayo}%`;
    mes3.style.height = `${solicitudesJunio}%`;
    mes1Data.textContent = solicitudesAbril;
    mes2Data.textContent = solicitudesMayo;
    mes3Data.textContent = solicitudesJunio;
}

const calculoReportesEnviados = () => {
    reportesEnviadosData.textContent = reportesEnviados;
    reportesPorEnviarData.textContent = reportesPorEnviar;
    let porcentajeReportesEnviados = (reportesEnviados * 100) / reportesPorEnviar;
    reportesEnviadosBar.style.width = `${porcentajeReportesEnviados}%`;
}

const calculoEfectividadCorreos = () => {
    let efectividadCorreos;
    efectividadCorreos = (100 - (correosErrores * 100) / solicitudesProcesadas);
    efectividadCorreos = esEntero(efectividadCorreos);
    //circleGraphContainerMail.setAttribute('style', `--porcentaje: ${efectividadCorreos}`);
    efectividadCorreosData.style.left = `calc(${efectividadCorreos}% - 20px)`;
    efectividadCorreosData.textContent = `${efectividadCorreos}%`;
}

const calculoEfectividadReportes = () => {
    let efectividadReportes;
    efectividadReportes = (100 - ((reportesErrores * 100) / reportesEnviados));
    efectividadReportes = esEntero(efectividadReportes);
    //circleGraphContainer.setAttribute('style', `--porcentaje: ${efectividadReportes}`);
    efectividadReportesData.style.left = `calc(${efectividadReportes}% - 20px)`;
    efectividadReportesData.textContent = `${efectividadReportes}%`;
}


const calculoSolicitudesTipo = () => {
    let total = estatus + creacion + casoTop + incidencia + cierre + crq + bandeja + proyecto + documentacion + escalamiento + certificacion;

    estatusBar.style.width = `${(estatus * 100) / total}%`;
    creacionBar.style.width = `${(creacion * 100) / total}%`;
    topBar.style.width = `${(casoTop * 100) / total}%`;
    incidenciaBar.style.width = `${(incidencia * 100) / total}%`;
    cierreBar.style.width = `${(cierre * 100) / total}%`;
    crqBar.style.width = `${(crq * 100) / total}%`;
    bandejaBar.style.width = `${(bandeja * 100) / total}%`;
    proyectoBar.style.width = `${(proyecto * 100) / total}%`;
    documentacionBar.style.width = `${(documentacion * 100) / total}%`;
    escalamientoBar.style.width = `${(escalamiento * 100) / total}%`;
    certificacionBar.style.width = `${(certificacion * 100) / total}%`;

    estatusData.textContent = estatus;
    creacionData.textContent = creacion;
    topData.textContent = casoTop;
    incidenciaData.textContent = incidencia;
    cierreData.textContent = cierre;
    crqData.textContent = crq;
    bandejaData.textContent = bandeja;
    proyectoData.textContent = proyecto;
    documentacionData.textContent = documentacion;
    escalamientoData.textContent = escalamiento;
    certificacionData.textContent = certificacion;
}

const calculoReportesTipo = () => {
    let total = desarrolloArea + estatusArea + gdp + clasificacion + tablas + cartera + prioridadesArea + validacionesInc + boletin;
    desarrolloAreaBar.style.width = `${(desarrolloArea * 100) / total}%`;
    estatusAreaBar.style.width = `${(estatusArea * 100) / total}%`;
    gdpBar.style.width = `${(gdp * 100) / total}%`;
    clasificacionBar.style.width = `${(clasificacion * 100) / total}%`;
    tablasBar.style.width = `${(tablas * 100) / total}%`;
    carteraBar.style.width = `${(cartera * 100) / total}%`;
    prioridadesAreaBar.style.width = `${(prioridadesArea * 100) / total}%`;
    boletinBar.style.width = `${(boletin * 100) / total}%`;
    validacionesIncBar.style.width = `${(validacionesInc * 100) / total}%`;
    //desarrolloGerenciaBar.style.width = `${(desarrolloGerencia * 100) / reportesEnviados}%`;

    //desarrolloGerenciaBar.style.width = `${(desarrolloGerencia * 100) / reportesEnviados}%`;

    desarrolloAreaData.textContent = desarrolloArea;
    estatusAreaData.textContent = estatusArea;
    gdpData.textContent = gdp;
    clasificacionData.textContent = clasificacion;
    tablasData.textContent = tablas;
    carteraData.textContent = cartera;
    prioridadesAreaData.textContent = prioridadesArea; 
    boletinData.textContent = boletin;
    validacionesIncData.textContent = validacionesInc;
    //desarrolloGerenciaData.textContent = desarrolloGerencia;
}


//Funciones de Navegación

const abrirCasos = () => {
    location.href = './casos.html';
}

const abrirSolicitudes = () => {
    location.href = './index.html';
}

// Funciones de ayuda
const esEntero = (number) => {
    if (Number.isInteger(number)) {
        return number;
    }
    return number.toFixed(2);
}

solicitudes1();
solicitudesPorMes();
calculoReportesEnviados();
calculoSolicitudesTipo();
calculoEfectividadCorreos();
calculoEfectividadReportes();
calculoReportesTipo();
