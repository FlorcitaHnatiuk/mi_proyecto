const limite = 140;
const mitexto = document.getElementById('mi-texto');
const resultado = document.getElementById('resultado');

resultado.textContent= "0/"+limite;

function textArea(){
    const textLength = mitexto.value.length;

    resultado.textContent = textLength + "/" + limite;

    if(textLength > limite) {
        mitexto.classList.add('sobrepasa');
        mitexto.classList.remove('noSobrepasa');
    } else {
        mitexto.classList.add('noSobrepasa');
        mitexto.classList.remove('sobrepasa');
    }
}

mitexto.addEventListener('input',textArea);