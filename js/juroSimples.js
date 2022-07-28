var btnJurSim = document.getElementById("juro-simples");

btnJurSim.addEventListener("click", function(){
    juroSimples();
})

function juroSimples(){  
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

    var label1 = criarLabel("input1", "label-input1", "Insira o valor do capital (C):");

    var input1 = criarInput("input1", "input1");

    var label2 = criarLabel("input2", "label-input2", "Insira o valor da taxa em porcentagem (i):");

    var input2 = criarInput("input2", "input2");

    var label3 = criarLabel("input3", "label-input3", "Insira o valor do tempo, na mesma unidade da taxa (t):");

    var input3 = criarInput("input3", "input3");

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

    var textoFormula = criarTextoFormula("Juro Simples = C . i . t");
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
            var p1 = criarParagraphDeErro("O campo do capital é invalido");
            ulErros.appendChild(p1);
            naoTemErros = false;
        }

        if (input2.value.length == 0 || isNaN(input2.value)){
            var p2 = criarParagraphDeErro("O campo da taxa é invalido");
            ulErros.appendChild(p2);
            naoTemErros = false;
        }

        if (input3.value.length == 0 || isNaN(input3.value)){
            var p3 = criarParagraphDeErro("O campo do tempo é invalido");
            ulErros.appendChild(p3);
            naoTemErros = false;
        }

        if (naoTemErros) {

            var respostaRemover = document.getElementById("resposta");
            if(respostaRemover != null){
                respostaRemover.remove();
            }

            var C = parseFloat(input1.value);
            var i = (parseFloat(input2.value))/100;
            var t = parseFloat(input3.value);

            var resultado = C * i *t;

            var textoResposta = "J = " + resultado;

            resposta = criarResposta(textoResposta, "resposta");

            formulario.appendChild(resposta);

            formulario.reset();
        }

        


    })

    novoCampoEquacao.classList.remove("invisivel");
}