navios = [];

class Navio {
    constructor(cliente_id, intervalo, duracao) {
        this.cliente_id = cliente_id;
        this.intervalo = intervalo;
        this.duracao = duracao;
        if(this.cliente_id == 1)
            this.hora_de_chegada_na_fila = parseInt(intervalo) + 1;
        else 
            this.hora_de_chegada_na_fila = navios[cliente_id - 2].hora_de_chegada_na_fila + intervalo;
    }
}

navios.push(new Navio(1, 10, 5));
navios.push(new Navio(2, 1, 5));
navios.push(new Navio(3, 2, 3));
navios.push(new Navio(4, 8, 3));
navios.push(new Navio(5, 2, 6));
navios.push(new Navio(6, 8, 7));
navios.push(new Navio(7, 9, 6));
navios.push(new Navio(8, 14, 8));
navios.push(new Navio(9, 8, 2));
navios.push(new Navio(10, 14, 5));
navios.push(new Navio(11, 10, 8));
navios.push(new Navio(12, 9, 8));
navios.push(new Navio(13, 9, 8));
navios.push(new Navio(14, 8, 3));
navios.push(new Navio(15, 9, 4));
navios.push(new Navio(16, 7, 3));
navios.push(new Navio(17, 14, 3));
navios.push(new Navio(18, 10, 4));
navios.push(new Navio(19, 1, 5));
navios.push(new Navio(20, 13, 5));

function calcMedia(myArray, myObject_element) {
    let soma = 0;
    myArray.forEach(element => {
        soma += parseInt(element[myObject_element]);
    });

    return soma / myArray.length;
}

console.log(`a) Intervalo medio entre chegadas: ${calcMedia(navios, 'intervalo')}`);
console.log(`b) Duracao media da carga: ${calcMedia(navios, 'duracao')}`)
