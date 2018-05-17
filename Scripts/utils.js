// Hugo Roca - 2018

/*Copiar y pegar 
$(document).ready(function () {
    $('*').bind("cut copy paste", function (e) {
        e.preventDefault();
    });
});*/

function pintaConsola() {

    //console.API;

    //if (typeof console._commandLineAPI !== 'undefined') {
    //    console.API = console._commandLineAPI; //chrome
    //} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    //    console.API = console._inspectorCommandLineAPI; //Safari
    //} else if (typeof console.clear !== 'undefined') {
    //    console.API = console;
    //}

    //console.API.clear();

    /*var codeStyle = 'background: #454544; font-size: 14px; font-weight: bold;font-family: Courier; color: #FFB700;  border-radius: 4px; padding: 5px 5px;';

    log('[c="font-family: Courier; color: #FFB700; font-size: 70px; padding: 5px 5px; background: #454544; border-radius: 4px; line-height: 100px; font-weight: Bold;text-shadow: 0 1px #000"]¡Alto![c]');
    log.l('%cEsta funcion está pensada solo para desarrolladores, si alguien te indicó que', codeStyle);
    log.l('%ccopiaras y pegaras algo aquí para habilitar una funcion o para "hackear" la  ', codeStyle);
    log.l('%ccuenta de alguien, se trata de un fraude. Si lo haces esta persona podrá     ', codeStyle);
    log.l('%cacceder a tu cuenta.                                                         ', codeStyle);*/
}


function SoloLetrasInputs(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function SoloNumerosInputs(e) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || (key == 8))
}

var formatNumber = {
    separador: ",",
    sepDecimal: '.',
    formatear: function (num) {
        num += '';
        var splitStr = num.split('.');
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
        }

        var res = splitLeft + splitRight;
        var splitPrueba = res.split(".");
        if (splitPrueba.length < 2) res = splitLeft + splitRight + ".00"
        return res;

    },
    new: function (num, simbol) {
        this.simbol = simbol || '';
        return this.formatear(num);
    }
}

function formatoMiles(valor) {
    return formatNumber.new(valor);
}

function getDateFormat(fechaTime) {
    if (fechaTime == "0001-01-01T00:00:00") {
        return null;
    } else {
        var date = new Date(fechaTime);
        var Year = date.getFullYear();
        var Month = (1 + date.getMonth()).toString();
        Month = Month.length > 1 ? Month : '0' + Month;
        var Day = date.getDate().toString();
        Day = Day.length > 1 ? Day : '0' + Day;

        return Day + "/" + Month + "/" + Year;
    }
}

function getdate1(fecha) {
    var data = fecha;
    var Day = data.substring(0, 2);
    var Month = data.substring(3, 5);
    var Year = data.substring(6, 10);
    return Year + "/" + Month + "/" + Day;
}

function YYYYMMDDConvert(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function DiferenciaDias(fechaDesembolso, dFechaCalen) {
    var date1 = new Date(fechaDesembolso);
    var date2 = new Date(dFechaCalen);
    var timeDiff = Math.abs(date1.getTime() - date2.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

function codigoAleatorio() {
    var inferior = 1000;
    var superior = 9999;
    var numPosibilidades = 9999 - 1000
    var aleat = Math.random() * numPosibilidades
    aleat = Math.round(aleat)
    console.log(parseInt(inferior) + aleat);
    return parseInt(inferior) + aleat
}

function createObjectURL(file) {
    if (window.webkitURL) {
        return window.webkitURL.createObjectURL(file);
    } else if (window.URL && window.URL.createObjectURL) {
        return window.URL.createObjectURL(file);
    } else {
        return null;
    }
}

function abrirArchivoPDF(b64Data, nombreArchivo) {
    try {
        var contentType = 'application/pdf'; //contentType || '';
        var sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {
            type: contentType
        });

        download(blob, nombreArchivo, 'application/pdf');

        //var blobUrl = createObjectURL(blob);

        //window.open = blobUrl;
        //location.href = blobUrl;
        //window.open("data:application/pdf;base64," + b64Data);


    } catch (err) {
        console.log(err.message);
    }
}

function validarContraseña(pass) {
    var espacios = false;
    var cont = 0;
    while (!espacios && (cont < pass.length)) {
        if (pass.charAt(cont) == " ")
            espacios = true;
        cont++;
    }
    return espacios;
}

function validaFechaNacimiento(Fecha) {
    var values = Fecha.split("/");
    var dia = values[0];
    var mes = values[1];
    var ano = values[2];

    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getYear();
    var ahora_mes = fecha_hoy.getMonth() + 1;
    var ahora_dia = fecha_hoy.getDate();

    var edad = (ahora_ano + 1900) - ano;
    if (ahora_mes < mes) {
        edad--;
    }
    if ((mes == ahora_mes) && (ahora_dia < dia)) {
        edad--;
    }
    if (edad > 1900) {
        edad -= 1900;
    }

    if (edad > 18) {
        return true;
    } else {
        return false;
    }
}

function validaFechaExiste(fecha) {
    var fechaf = fecha.split("/");
    var d = fechaf[0];
    var m = fechaf[1];
    var y = fechaf[2];
    return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
}

function hallaRestaFecha(fecha, fechaPrincipal) {
    var date1 = new Date(fecha).getTime();
    var date2 = new Date(fechaPrincipal).getTime();
    var dif = date1 - date2;
    return (dif / (1000 * 60 * 60 * 24));
}

function ponerADecimales(val, decimal) {
    var valor = val.toFixed(parseInt(decimal + 1));
    var valorsplit = valor.split('.');
    var dec = valorsplit[1].substring(0, decimal);
    return valorsplit[0] + '.' + dec;
}

function TextoCombo(val) {
    var combo = document.getElementById(val);
    var selected = combo.options[combo.selectedIndex].text;
    return selected;
}

function PasarFechaGuionesMySql(val) {
    var fecha = val.split('/');
    return fecha[2] + '-' + fecha[1] + '-' + fecha[0];
}

function PasarFechaBarraMySql(val) {
    var fecha = val.split('-');
    return fecha[2] + '/' + fecha[1] + '/' + fecha[0];
}

////////////////////////////
function mostrarConsola(texto){
    return console.log(texto);
}

function MostrarModal(val) {
    $('#' + val).modal({ backdrop: 'static', keyboard: false });
}

function CerrarModal(val) {
    $('#' + val).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
}