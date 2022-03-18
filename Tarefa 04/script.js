controle = 0

function ligardesligar(){
    if(controle %2 == 0)
    {
        document.getElementById("Lamp").src="assets/on.png";
    }
    else
    {
        document.getElementById("Lamp").src="assets/off.png";
    }
    controle +=1
}

function desligar(){
    document.getElementById("Lamp").src="assets/off.png";
}

function ligar(){
    document.getElementById("Lamp").src="assets/on.png";
}

