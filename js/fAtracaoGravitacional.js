var btnForcaAtracaoGravitacional = document.getElementById("forca-atracao-gravitacional");

btnForcaAtracaoGravitacional.addEventListener("click", function(){
    forcaAtracaoGravitacional();
})

function forcaAtracaoGravitacional(){  
    var divCampoEquacao = document.getElementById("div-campo-equacao");
    var campoEquacao = document.getElementById("campo-equacao");
    campoEquacao.remove()

    var novoCampoEquacao = campoEquacaoLimpo();
    divCampoEquacao.append(novoCampoEquacao);
    
    var formulario = document.createElement("form");

    var  ulErros = criarUl("ul-erros");

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    var label1 = 
    criarLabel("input1", "label-input1", "Insira o valor da constante de gravitação universal (G):");
    var input1 = criarInput("input1", "input1");

    var label2 = criarLabel("input2", "label-input2", "Insira o valor da massa 1 (M):");
    var input2 = criarInput("input2", "input2");

    var label3 = criarLabel("input3", "label-input3", "Insira o valor da massa 2 (m):");
    var input3 = criarInput("input3", "input3");

    var label4 = criarLabel("input3", "label-input3", "Insira o valor da distância entre as massas (d):");
    var input4 = criarInput("input3", "input3");

    var resposta = "";


    novoCampoEquacao.appendChild(formulario);

    formulario.appendChild(ulErros);

    formulario.appendChild(li1);

    li1.appendChild(label1);
    li1.appendChild(input1)

    formulario.appendChild(li2);

    li2.appendChild(label2);
    li2.appendChild(input2);

    formulario.appendChild(li3);

    li3.appendChild(label3);
    li3.appendChild(input3);

    formulario.appendChild(li4);

    li4.appendChild(label4);
    li4.appendChild(input4);

    var textoFormula = criarTextoFormula("Força de Atração Gravitacional = (G * M * m) / d²");
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
            var p1 = criarParagraphDeErro("O campo 'G' é invalido");
            ulErros.appendChild(p1);
            naoTemErros = false;
        }

        if (input2.value.length == 0 || isNaN(input2.value)){
            var p2 = criarParagraphDeErro("O campo 'M' é invalido");
            ulErros.appendChild(p2);
            naoTemErros = false;
        }

        if (input3.value.length == 0 || isNaN(input3.value)){
            var p3 = criarParagraphDeErro("O campo 'm' é invalido");
            ulErros.appendChild(p3);
            naoTemErros = false;
        }

        if (input4.value.length == 0 || isNaN(input4.value)){
            var p4 = criarParagraphDeErro("O campo 'd' é invalido");
            ulErros.appendChild(p4);
            naoTemErros = false;
        }

        if (naoTemErros) {

            var respostaRemover = document.getElementById("resposta");
            if(respostaRemover != null){
                respostaRemover.remove();
            }

            var G = parseFloat(input1.value);
            var m1 = parseFloat(input2.value)
            var m2 = parseFloat(input3.value);
            var d = parseFloat(input4.value);

            var resultado = (G * m1 * m2)/(d**2);
            resultado = diminuiCasasDecimais(resultado, 8);

            var textoResposta = "F = " + resultado + " N";

            resposta = criarResposta(textoResposta, "resposta");

            formulario.appendChild(resposta);

            formulario.reset();
        }

        


    })

    novoCampoEquacao.classList.remove("invisivel");
}