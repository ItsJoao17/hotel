function reservarQuarto1(n, inicio, fim, preco){ 
    
    // Alterar o estado do vetor dos quartos de 'd' para 'r'
    if(quartos[0][1] == 'd'){
        quartos[0][1] = 'r';

        document.getElementById('estado1').innerHTML = "Reservado";
        var tmp = [];
        tmp.push(n);
        

        //Alterar estado no frontend
        
        tmp.push(inicio);
        tmp.push(fim);
        tmp.push(preco);

        reservas.push(tmp);
        listarQuartos(n);
    }else{
        alert('Quarto ja reservado');
    }
}

// Reservar quarto nr.2
function reservarQuarto2(n, inicio, fim, preco){ 

    // Verificar e alterar dados de estado
    if(quartos[1][1] == 'd'){
        quartos[1][1] = 'r';

        document.getElementById('estado2').innerHTML = "Reservado";
        var tmp2 = [];
        tmp2.push(n);
        tmp2.push(inicio);
        tmp2.push(fim);
        tmp2.push(preco);

        reservas.push(tmp2);
        listarQuartos();
    }else{
        alert('Quarto ja reservado');
    }
}

// Listar quartos reservados na tabela
function listarQuartos(){
    var x = 1;
    for (var i = 0, l1 = reservas.length; i < l1; i++) {

        // This loop is for inner-arrays
        for (var j = 0, l2 = reservas[i].length; j < l2; j++) {
            
            // Accessing each elements of inner-array
            document.getElementById('n' + x).innerHTML = reservas[i][j];
            x++;
        }
    }
    
}

//----------------listar quartos reservados
var reservas = [];
var quartos = [['1', 'd'], ['2', 'd'], ['3','d'], ['4', 'd']];
var total = [];

