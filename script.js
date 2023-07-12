var valoresEntrada = [];
var valoresSaida = [];
var totalEntradas = 0;
var totalSaidas = 0;
var saldo = 0;

function saldoTotal() {
    saldo = totalEntradas - totalSaidas;
    document.getElementById('txtsaldo').innerHTML = `Saldo Total: R$ ${saldo.toFixed(2)}`;
}

function somaTotais() {
    totalEntradas = valoresEntrada.reduce(function (cont, valor) {
        return cont + valor.valor;
    }, 0);

    totalSaidas = valoresSaida.reduce(function (cont, valor) {
        return cont + valor.valor;
    }, 0);

    document.getElementById('totalentradas').innerHTML = `<p>Total de entradas: R$ ${totalEntradas.toFixed(2)}</p>`;
    document.getElementById('totalsaidas').innerHTML = `<p>Total de saídas: R$ ${totalSaidas.toFixed(2)}</p>`;

    saldoTotal();
}

function addValoresEntrada(desc, valor) {
    if (desc === '' || valor === '' || valor === 'Valor') {
        alert('Por favor, preencha todos os campos.');
        return; 
    }

    var tabelaent = document.getElementById('tabelaentrada');
    var qtdlinhas = tabelaent.rows.length;
    var linha = tabelaent.insertRow(qtdlinhas);

    var celldesc = linha.insertCell(0);
    var cellvalor = linha.insertCell(1);
    var cellacao = linha.insertCell(2);

    celldesc.innerHTML = desc;
    cellvalor.innerHTML = `R$ ${parseFloat(valor).toFixed(2)}`;
    cellacao.innerHTML = '<img src="trash.png" button class="excluir" onclick="deleteValores    (this)"></img>';


    valoresEntrada.push({ descricao: desc, valor: parseFloat(valor) });

    somaTotais();
    saldoTotal();
}

function addValoresSaida(desc, valor) {
    if (desc === '' || valor === '' || valor === 'Valor') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var tabelasaida = document.getElementById('tabelasaida');
    var qtdlinhas = tabelasaida.rows.length;
    var linha = tabelasaida.insertRow(qtdlinhas);

    var celldesc = linha.insertCell(0);
    var cellvalor = linha.insertCell(1);
    var cellacao = linha.insertCell(2);

    celldesc.innerHTML = desc;
    cellvalor.innerHTML = `R$ ${parseFloat(valor).toFixed(2)}`;
    cellacao.innerHTML = '<img src="trash.png" button class="excluir" onclick="deleteValores(this)"></img>';


    valoresSaida.push({ descricao: desc, valor: parseFloat(valor) });

    somaTotais();
    saldoTotal();
}

function deleteValores(button) {
    var tabela = button.closest('table');
    var linha = button.closest('tr');
    var indice = linha.rowIndex - 1;
  
    if (tabela.id === 'tabelaentrada') {
      valoresEntrada.splice(indice, 1);
    } else if (tabela.id === 'tabelasaida') {
      valoresSaida.splice(indice, 1);
    }
  
    tabela.deleteRow(indice + 1);
  
    somaTotais();
    saldoTotal();
}
    



