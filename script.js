function reservarQuarto1(nr, inicio, fim, preco){ 

    var tmp = [];
    n = nr;
    tmp.push(n);
    tmp.push(inicio);
    tmp.push(fim);
    tmp.push(preco);

    reservas.push(tmp);
    listarQuartos(n);
}

function reservarQuarto2(n, inicio, fim, preco){ 

    var tmp2 = [];
    tmp2.push(n);
    tmp2.push(inicio);
    tmp2.push(fim);
    tmp2.push(preco);

    reservas.push(tmp2);
    listarQuartos(n);
}
//-----------function reservarQuarto----------

/*function contarQuartos(){
    
    var n;

    for(var i = 0; i < quartos[0].length; i++){
        n++;
    }

    return n;
}*/
//-----------function para contar quartos disponiveis ou indisponiveis-----------
/*
window.addEventListener('click', function(){
    document.getElementById('AVquarto').innerHTML = contarQuartos();
});*/
//------------Dar update ao numero de quartos na pagina------------


function listarQuartos(x){
    var r = x-1;
    var n = 'n' + x;
    var q = 'q' + x;
    var b = 'i' + x;
    var f = 'f' + x;
    var p = 'p' + x;
    document.getElementById(n).innerHTML = reservas[r][0];
    document.getElementById(q).innerHTML = reservas[r][1];
    document.getElementById(b).innerHTML = reservas[r][2];
    document.getElementById(f).innerHTML = reservas[r][3];
    document.getElementById(p).innerHTML = reservas[r][4];
    
}
//----------------listar quartos reservados
var reservas = [];
var quartos = [['1', 'd']];
var total = [];

