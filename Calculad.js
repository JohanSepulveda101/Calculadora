function calcular() {

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var radios = document.getElementsByName('operacion');
    var operacion = null; 

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, introduzca los valores.',
        });
        return;
    }

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, introduzca números válidos (No Negativos). ',
        });
        return;
    }

    var i = 0;
    while (i < radios.length) {
        if (radios[i].checked) {
            operacion = radios[i].value;
            break;
        }
        i++;
    }

    if (!operacion) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, seleccione una operación.',
        });
        return;
    }

    var resultado;
    if (operacion === 'suma') {
        resultado = num1 + num2;
    } else if (operacion === 'resta') {
        resultado = num1 - num2;
    } else if (operacion === 'multiplicacion') {
        resultado = num1 * num2;
    } else if (operacion === 'division') {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede dividir por cero.',
            });
            return;
        }
    }

    document.getElementById('resultado').value = resultado;
}

window.onload = function() {
    var radios = document.getElementsByName('operacion');
    var i = 0;
    while (i < radios.length) {
        radios[i].checked = false;
        i++;
    }
}
