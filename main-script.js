// Dark and light mode
function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
  }

function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }

// Reservas
function efetuarReserva(code_room){
    switch(code_room){
        case '123':
            var inicio = document.getElementById('start_01').value;
            var fim = document.getElementById('end_01').value;
            var tmp = [];
            tmp.push('123');
            tmp.push(inicio);
            tmp.push(fim);
            tmp.push(100);
            reservas.push(tmp);
            gerarTabela();
            break;

        case '456':
            var inicio = document.getElementById('start_02').value;
            var fim = document.getElementById('end_02').value;
            var tmp = [];
            tmp.push('456');
            tmp.push(inicio);
            tmp.push(fim);
            tmp.push(100);
            reservas.push(tmp);
            gerarTabela();
            break;
        case '789':
            var inicio = document.getElementById('start_03').value;
            var fim = document.getElementById('end_03').value;
            var tmp = [];
            tmp.push('789');
            tmp.push(inicio);
            tmp.push(fim);
            tmp.push(100);
            reservas.push(tmp);
            gerarTabela();
            break;
        
        case '1011':
            var inicio = document.getElementById('start_04').value;
            console.log(inicio);
            var fim = document.getElementById('end_04').value;
            var tmp = [];
            tmp.push('1011');
            tmp.push(inicio);
            tmp.push(fim);
            tmp.push(100);
            reservas.push(tmp);
            gerarTabela();
            break;
    }
}

// Gerar tabela com Javascipt
function criarTheader(){
    // Table head
    document.getElementById('tabela-reservas').innerHTML += "<div id='reservas'>" +
        "<p>Quarto</p>"+ 
        "<p>Entrada</p>"+
        "<p>Saida</p>"+
        "<p>Preco</p>"+
        "</div>" + 
        "<br><hr>";
        var element = document.getElementById('reservas');
        element.classList.toggle('reservas');
}
function gerarTabela(){
    document.getElementById('tabela-reservas').innerHTML = "";
    criarTheader();
    for (var i = 0, l1 = reservas.length; i < l1; i++) {
        document.getElementById('tabela-reservas').innerHTML += "<div id='reservas'>" +
        "<p>" + reservas[i][0] + "</p>"+ 
        "<p>" + reservas[i][1] + "</p>"+
        "<p>" + reservas[i][2] + "</p>"+
        "<p>" + reservas[i][3] + "€</p>"+
        "</div>" + 
        "<br>";
    }
    var element = document.getElementById('reservas');
    element.classList.toggle('reservas');
}
// Vetores

criarTheader();

var quartos = [
    ['123', 'VIP Executive Arts Hotel', 'Disponivel', '97'],
    ['456', 'Tivoti Orient Hotel', 'Disponivel', '119'],
    ['789', 'Hotel Roma', 'Disponivel', '69'],
    ['1011', 'Radison Blu Hotel Lisbon', '105.50']
];

var reservas = [];