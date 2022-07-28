var btnPitagorasHipotenusa = document.getElementById("pitagoras-hipotenusa");

btnPitagorasHipotenusa.addEventListener("click", function(){
    pitagorasHipotenusa();
})

function pitagorasHipotenusa(){  
    var divCampoEquacao = document.getElementById("div-campo-equacao");
    var campoEquacao = document.getElementById("campo-equacao");
    campoEquacao.remove()

    var novoCampoEquacao = campoEquacaoLimpo();
    divCampoEquacao.append(novoCampoEquacao);
    
    var formulario = document.createElement("form");

    var  ulErros = criarUl("ul-erros");

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");

    var label1 = criarLabel("input1", "label-input1", "Insira o valor do cateto 'b':");

    var input1 = criarInput("input1", "input1");

    var label2 = criarLabel("input2", "label-input2", "Insira o valor do cateto 'c':");

    var input2 = criarInput("input2", "input2");

    var resposta = "";


    novoCampoEquacao.appendChild(formulario);

    formulario.appendChild(ulErros);

    formulario.appendChild(li1);

    li1.appendChild(label1);
    li1.appendChild(input1)

    formulario.appendChild(li2);

    li2.appendChild(label2);
    li2.appendChild(input2);

    var textoFormula = criarTextoFormula("a² = b² + c²");
    formulario.appendChild(textoFormula);

    var botaoCalcular = criarInputCalcular();
    formulario.appendChild(botaoCalcular);


    botaoCalcular.addEventListener("click", function (event){
        event.preventDefault();

        if(resposta.length > 0){
            resposta.remove()
        }

        ulErros.innerHTML = "";
        var naoTemErros = true;

        if (input1.value.length == 0 || isNaN(input1.value)){
            var p1 = criarParagraphDeErro("O campo do cateto 'b' é invalido");
            ulErros.appendChild(p1);
            naoTemErros = false;
        }

        if (input2.value.length == 0 || isNaN(input2.value)){
            var p2 = criarParagraphDeErro("O campo do cateto 'c' é invalido");
            ulErros.appendChild(p2);
            naoTemErros = false;
        }

        if (naoTemErros) {

            var respostaRemover = document.getElementById("resposta");
            if(respostaRemover != null){
                respostaRemover.remove();
            }

            var b = parseFloat(input1.value);
            var c = parseFloat(input2.value);

            var resultado = (b**2) + (c**2)
            resultado = Math.sqrt(resultado);

            var textoResposta = "";
            textoResposta = "Hipotenusa = " + resultado;

            resultado = diminuiCasasDecimais(resultado, 8);

            resposta = criarResposta(textoResposta, "resposta");

            formulario.appendChild(resposta);

            formulario.reset();
        }
    });
    novoCampoEquacao.classList.remove("invisivel");
}