function tocarSom (seletorAudio) {
  const elemento =  document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
            elemento.play();
    }
  
else 
          //alert('elemento não encontrado')
          console.log('elemento não encontrado ou seletor invalido')

}

  


const listaDeTeclas =  document.querySelectorAll('.tecla');

//Para

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
//template string 
    const idAudio = `#som_${instrumento}`;

     tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log (evento.code)
        if (evento.code === 'space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    
    }
 
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
}

