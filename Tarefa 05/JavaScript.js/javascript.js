var prods = [
    { id: 1, name: "Bife com Batata", price: 30.00 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00 },
    { id: 3, name: "Carne de Panela", price: 22.00 },
    { id: 4, name: "Farofa", price: 10.00 },
    { id: 5, name: "Salada", price: 8.00 },
    { id: 6, name: "Torresmo", price: 12.00 },
];

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

    for (let input of quantities) {
        exit2.innerHTML += `<br><li>Prato: ${prods[input.id-1].name} - Preço unitário: ${formatter.format(prods[input.id-1].price)} - Quantidade: ${input.value}`
    }

    var add = [30, 25, 22, 10, 8, 12];
    var finalsum = 0;
    var quantadd = 0;

    for(i = 0 ; i < 6 ; i++){
        quantrequeset = document.getElementById(i + 1).value;

        if (quantrequeset != 0) {
            var totalprice = add[i] * quantrequeset;
            finalsum += totalprice;
            quantadd += quantrequeset;
        }
    }

    finalexit.innerHTML += "<br><br>Preço final R$ " + finalsum + ",00";
}