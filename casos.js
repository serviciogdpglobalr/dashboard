//Variables
let totalCasos = 95;
let casosDiagnostico = 8;
let casosDesarrollo = 87;
let diagnosticoTerceros = 0;
let gestionadosDiagnostico = 10;
let totalEscalados = 10;
let diasDiagnostico = 58;
let diasDesarrollo = 97;
let diasCierre = 68;
let casosNuevos = 4;
let casosCerrados = 7;
let pkeSoporteCliente = 0;
let pkeIntegracionServicios = 23;
let pkeInteraccionCliente = 13;
let pkePlanesPromociones = 1;
let pkePlataformasDatos = 23;
let pkeSoporteOperacion = 7;
let pkeSoporteNegocio = 20;
let pkePlataformasInfraestructura = 1;
let pkeControlOperaciones = 4;
let pkeSeguridad = 0;
let totalCasosGrupos = 16;
let casosGlobal = 6;
let casosTelefonica = 1;
let casosSinAsignar = 1;
let casosSip = 9;
let casosMm = 4;
let casosProyecto = 20;
let casosWa = 7;
let casosTop = 8;
//let casosDevueltos = 4;
//let casosReabiertos = 2;

//Elementos html
let diagnosticoBar = document.querySelector('.diagnostico');
let desarrolloBar = document.querySelector('.desarrollo');
let totalCasosSpan = document.querySelector('.total-casos');
let diagnosticoTercerosBar = document.querySelector('.terceros');
let gestionadosDiagnosticoBar = document.querySelector('.gestion');
let totalEscaladosSpan = document.querySelector('.total-escalados');
let diasDiagnosticoData = document.querySelector('.dias-diagnostico');
let diasDesarrolloData = document.querySelector('.dias-desarrollo');
let diasCierreData = document.querySelector('.dias-cierre');
let casosNuevosData = document.querySelector('.nuevos');
let casosCerradosData = document.querySelector('.cerrados');
let soporteClienteBar = document.querySelector('.soporte-cliente');
let integracionServiciosBar = document.querySelector('.integracion-servicios');
let interaccionClienteBar = document.querySelector('.interaccion-cliente');
let planesPromocionesBar = document.querySelector('.planes-promociones');
let plataformasDatosBar = document.querySelector('.plataformas-datos');
let soporteOperacionBar = document.querySelector('.soporte-operacion');
let soporteNegocioBar = document.querySelector('.soporte-negocio');
let plataformasInfraestructuraBar = document.querySelector('.plataformas-infraestructura');
let controlOperacionesBar = document.querySelector('.control-operaciones');
let seguridadBar = document.querySelector('.seguridad');
let soporteClienteSpan = document.querySelector('.soporte-cliente-data');
let integracionServiciosSpan = document.querySelector('.integracion-servicios-data');
let interaccionClienteSpan = document.querySelector('.interaccion-cliente-data');
let planesPromocionesSpan = document.querySelector('.planes-promociones-data');
let plataformasDatosSpan = document.querySelector('.plataformas-datos-data');
let soporteOperacionSpan = document.querySelector('.soporte-operacion-data');
let soporteNegocioSpan = document.querySelector('.soporte-negocio-data');
let plataformasInfraestructuraSpan = document.querySelector('.plataformas-infraestructura-data');
let controlOperacionesSpan = document.querySelector('.control-operaciones-data');
let seguridadSpan = document.querySelector('.seguridad-data');
let casosGlobalBar = document.querySelector('.global');
let casosTelefonicaBar = document.querySelector('.telefonica');
let casosSinAsignarBar = document.querySelector('.sin-asignar');
let casosGlobalSpan = document.querySelector('.global-data');
let casosTelefonicaSpan = document.querySelector('.telefonica-data');
let casosSinAsignarSpan = document.querySelector('.sin-asignar-data');
let casosSipBar = document.querySelector('.sip');
let casosMmBar = document.querySelector('.mm');
let casosProyectoBar = document.querySelector('.proyecto');
let casosWaBar = document.querySelector('.wa');
let casosTopBar = document.querySelector('.top');
//let casosDevueltosBar = document.querySelector('.devueltos');
//let casosReabiertosBar = document.querySelector('.reabiertos');
let casosSipSpan = document.querySelector('.sip-data');
let casosMmSpan = document.querySelector('.mm-data');
let casosProyectoSpan = document.querySelector('.proyecto-data');
let casosWaSpan = document.querySelector('.wa-data');
let casosTopSpan = document.querySelector('.top-data');
//let casosDevueltosSpan = document.querySelector('.devueltos-data');
//let casosReabiertosSpan = document.querySelector('.reabiertos-data');

const calculoCasosCurso = () => {
    diagnosticoBar.style.width = `${(casosDiagnostico * 100) / totalCasos}%`;
    desarrolloBar.style.width = `${(casosDesarrollo * 100) / totalCasos}%`;
    diagnosticoBar.textContent = casosDiagnostico;
    desarrolloBar.textContent = casosDesarrollo;
    totalCasosSpan.textContent = totalCasos;
}

const calculoCasosEscalados = () => {
    diagnosticoTercerosBar.style.width = `${(diagnosticoTerceros * 100) / totalEscalados}%`;
    gestionadosDiagnosticoBar.style.width = `${(gestionadosDiagnostico * 100) / totalEscalados}%`;
    if (diagnosticoTerceros > 0) {
        diagnosticoTercerosBar.textContent = diagnosticoTerceros;
    }
    if (gestionadosDiagnostico > 0) {
        gestionadosDiagnosticoBar.textContent = gestionadosDiagnostico;
    }
    totalEscaladosSpan.textContent = totalEscalados;
}

const calculoPromediosDias = () => {
    diasDiagnosticoData.textContent = diasDiagnostico;
    diasDesarrolloData.textContent = diasDesarrollo;
    diasCierreData.textContent = diasCierre;
}

const calculoCasosNuevosCerrados = () => {
    casosNuevosData.textContent = casosNuevos;
    casosCerradosData.textContent = casosCerrados;
}

calculoPkeGerencia = () => {
    let totalPke = pkeSoporteCliente + pkeIntegracionServicios + pkeInteraccionCliente + pkePlanesPromociones + pkePlataformasDatos + pkeSoporteOperacion + pkeSoporteNegocio + pkePlataformasInfraestructura + pkeControlOperaciones + pkeSeguridad;
    soporteClienteBar.style.width = `${(pkeSoporteCliente * 100) / totalPke}%`;
    integracionServiciosBar.style.width = `${(pkeIntegracionServicios * 100) / totalPke}%`;
    interaccionClienteBar.style.width = `${(pkeInteraccionCliente * 100) / totalPke}%`;
    planesPromocionesBar.style.width = `${(pkePlanesPromociones * 100) / totalPke}%`;
    plataformasDatosBar.style.width = `${(pkePlataformasDatos * 100) / totalPke}%`;
    soporteOperacionBar.style.width = `${(pkeSoporteOperacion * 100) / totalPke}%`;
    soporteNegocioBar.style.width = `${(pkeSoporteNegocio * 100) / totalPke}%`;
    plataformasInfraestructuraBar.style.width = `${(pkePlataformasInfraestructura * 100) / totalPke}%`;
    controlOperacionesBar.style.width = `${(pkeControlOperaciones * 100) / totalPke}%`;
    seguridadBar.style.width = `${(pkeSeguridad * 100) / totalPke}%`;

    soporteClienteSpan.textContent = pkeSoporteCliente;
    integracionServiciosSpan.textContent = pkeIntegracionServicios;
    interaccionClienteSpan.textContent = pkeInteraccionCliente;
    planesPromocionesSpan.textContent = pkePlanesPromociones;
    plataformasDatosSpan.textContent = pkePlataformasDatos;
    soporteOperacionSpan.textContent = pkeSoporteOperacion;
    soporteNegocioSpan.textContent = pkeSoporteNegocio;
    plataformasInfraestructuraSpan.textContent = pkePlataformasInfraestructura;
    controlOperacionesSpan.textContent = pkeControlOperaciones;
    seguridadSpan.textContent = pkeSeguridad;
}

const calculoCasosAsignados = () => {
    casosGlobalBar.style.width = `${(casosGlobal * 100) / totalCasosGrupos}%`;
    casosTelefonicaBar.style.width = `${(casosTelefonica * 100) / totalCasosGrupos}%`;
    casosSinAsignarBar.style.width = `${(casosSinAsignar * 100) / totalCasosGrupos}%`;

    casosGlobalSpan.textContent = casosGlobal;
    casosTelefonicaSpan.textContent = casosTelefonica;
    casosSinAsignarSpan.textContent = casosSinAsignar;
}

const calculoCasosImportantes = () => {
    let totalCasosImportantes = casosSip + casosMm + casosProyecto + casosWa;
    casosSipBar.style.width = `${(casosSip * 100) / totalCasosImportantes}%`;
    casosMmBar.style.width = `${(casosMm * 100) / totalCasosImportantes}%`;
    casosProyectoBar.style.width = `${(casosProyecto * 100) / totalCasosImportantes}%`;
    casosWaBar.style.width = `${(casosWa * 100) / totalCasosImportantes}%`;
    casosTopBar.style.width = `${(casosTop * 100) / totalCasosImportantes}%`;
    //casosDevueltosBar.style.width = `${(casosDevueltos * 100) / totalCasosImportantes}%`;
    //casosReabiertosBar.style.width = `${(casosReabiertos * 100) / totalCasosImportantes}%`;

    casosSipSpan.textContent = casosSip;
    casosMmSpan.textContent = casosMm;
    casosProyectoSpan.textContent = casosProyecto;
    casosWaSpan.textContent = casosWa;
    casosTopSpan.textContent = casosTop;
    //casosDevueltosSpan.textContent = casosDevueltos;
    //casosReabiertosSpan.textContent = casosReabiertos;
}

//Funciones de Navegación

const abrirCasos = () => {
    location.href = './casos.html';
}

const abrirSolicitudes = () => {
    location.href = './index.html';
}

calculoCasosCurso();
calculoCasosEscalados();
calculoPromediosDias();
calculoCasosNuevosCerrados();
calculoPkeGerencia();
calculoCasosAsignados();
calculoCasosImportantes();