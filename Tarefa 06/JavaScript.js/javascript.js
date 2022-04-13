var prods = [
    { id: 1, name: "Bife com Batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 },
];

var quantadd = false;
var add = [30, 25, 22, 10, 8, 12];


function javascript(){
    exit2.innerHTML = '';
    finalexit.innerHTML = '';

    var quantities = document.getElementsByName("quantity");
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    var name = "Caro(a) " + document.querySelector('#name').value;
    document.querySelector('#exit').innerHTML = name;

    var request = "<br><br>Seguem os dados do seu pedido. <br><br> O seu Pedido é:";
    document.querySelector('#exit1').innerHTML = request;

    var add = [30, 25, 22, 10, 8, 12];
    var finalsum = 0;
    

    for(i = 0 ; i < 6 ; i++){
        quantrequeset = document.getElementById(i + 1).value;

        if (quantrequeset != 0) {
            var totalprice = add[i] * quantrequeset;
            finalsum += totalprice;
            quantadd = true;
            exit2.innerHTML += `<br><li>Prato: ${prods[i].name} - Preço unitário: ${formatter.format(prods[i].price)} - Quantidade: ${quantrequeset}`
        }
    }

    if(quantadd == false){
        exits.innerHTML = "<br> Selecione pelo menos um item"; 
    }
    else{quantadd = false}

    finalexit.innerHTML += "<br><br>Preço final R$ " + finalsum + ",00";
}

