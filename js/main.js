document.querySelector('#contar').addEventListener('click', calcular);

function calcular() {
    let inicio = Number(document.querySelector('#inicio').value);
    let passo = Number(document.querySelector('#passo').value);
    let fim = Number(document.querySelector('#fim').value);
    res = document.querySelector('#res');

    res.innerHTML = '';

    document.querySelector('#res').style.visibility = 'visible';

    if (inicio == fim) {
        alert('Início e fim não podem ser iguais');
    }
    else if (passo <= 0) {
        alert('Passo não pode ser zero ou negativo');
    }
    else if (document.querySelector('#inicio').value == '' || document.querySelector('#fim').value == '' || document.querySelector('#passo') == '') {
        alert('Você precisa preencher todos os campos');
    }
    else {
        if (inicio > fim) {
                for (i = inicio; i >= fim; i = i-passo) {
                    res.innerHTML += `${i} &#128073 `;
               }
        }
        else {
                for (i = inicio; i <= fim; i=i+passo) {
                    res.innerHTML += `${i} &#128073 `;
                }
        }
        res.innerHTML += '&#127937';
    }
}