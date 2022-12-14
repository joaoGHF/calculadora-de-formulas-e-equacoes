var btnSomaAngulosInternosPoligonoLados = document.getElementById("soma-angulos-internos-poligono-n-lados");

btnSomaAngulosInternosPoligonoLados.addEventListener("click", function(){
    somaAngulosInternosPoligonoLados();
})

function somaAngulosInternosPoligonoLados(){  
    var divCampoEquacao = document.getElementById("div-campo-equacao");
    var campoEquacao = document.getElementById("campo-equacao");
    campoEquacao.remove()

    var novoCampoEquacao = campoEquacaoLimpo();
    divCampoEquacao.append(novoCampoEquacao);
    
    var formulario = document.createElement("form");

    var  ulErros = criarUl("ul-erros");

    var li1 = document.createElement("li");


    var label1 = criarLabel("input1", "label-input1", "Insira o valor da soma dos ângulos internos:");
    var input1 = criarInput("input1", "input1");


    var resposta = "";


    novoCampoEquacao.appendChild(formulario);

    formulario.appendChild(ulErros);

    formulario.appendChild(li1);
    li1.appendChild(label1);
    li1.appendChild(input1);


    var textoFormula = criarTextoFormula("S = (n - 2) * 180º");
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
            var p1 = criarParagraphDeErro("O campo da soma dos ângulos é invalido");
            ulErros.appendChild(p1);
            naoTemErros = false;
        }

        if (naoTemErros) {

            var respostaRemover = document.getElementById("resposta");
            if(respostaRemover != null){
                respostaRemover.remove();
            }

            var soma = parseFloat(input1.value);

            var resultado = (soma + 360) / (180);

            var textoResposta = "Número de lados = " + resultado;

            resposta = criarResposta(textoResposta, "resposta");

            formulario.appendChild(resposta);

            formulario.reset();
        }
    });

    novoCampoEquacao.classList.remove("invisivel");
}