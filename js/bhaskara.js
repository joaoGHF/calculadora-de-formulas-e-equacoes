var btnBhaskara = document.getElementById("bhaskara");

btnBhaskara.addEventListener("click", function(){
    bhaskara();
})

function bhaskara(){
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

    var label1 = criarLabel("input1", "label-input1", "Insira o valor a:");
    var input1 = criarInput("input1", "input1");

    var label2 = criarLabel("input2", "label-input2", "Insira o valor b:");
    var input2 = criarInput("input2", "input2");

    var label3 = criarLabel("input3", "label-input3", "Insira o valor c:");
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

    var textoFormula = criarTextoFormula("x = (-b ± √(b² -4.a.c))/(2.a)");
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
            var p1 = criarParagraphDeErro("O campo 'a' é invalido");
            ulErros.appendChild(p1);
            naoTemErros = false;
        }

        if (input2.value.length == 0 || isNaN(input2.value)){
            var p2 = criarParagraphDeErro("O campo 'b' é invalido");
            ulErros.appendChild(p2);
            naoTemErros = false;
        }

        if (input3.value.length == 0 || isNaN(input3.value)){
            var p3 = criarParagraphDeErro("O campo 'c' é invalido");
            ulErros.appendChild(p3);
            naoTemErros = false;
        }

        if (naoTemErros) {

            var respostaRemover = document.getElementById("resposta");
            if(respostaRemover != null){
                respostaRemover.remove();
            }

            var a = parseFloat(input1.value);
            var b = parseFloat(input2.value);
            var c = parseFloat(input3.value);

            // formula de bhaskara

            var x1 = 0;
            var x2 = 0;
            var textoResposta = "";
            var delta = (b**2) - (4 * a * c);
            var raisDelta = Math.sqrt(delta)

            
            if(delta < 0){
                x1 = "x = (-("+ b + ")± √(" + delta + ")) / " + 2*a
                textoResposta = "Não existem raíses reais; " + x1;
            } else if(delta == 0){
                x1 = -b/(2*a);
                textoResposta = "x' = x'' = "+ x1;
            } else {

                x1 = (-b + raisDelta) / (2 * a);
                x2 = (-b - raisDelta) / (2 * a);

                x1 = diminuiCasasDecimais(x1, 4);
                x2 = diminuiCasasDecimais(x2, 4);

                textoResposta = "x' = " + x1 + " e x'' = " +x2;
                
            }

            resposta = criarResposta(textoResposta, "resposta");

            formulario.appendChild(resposta);

            formulario.reset();
        }
    });

    novoCampoEquacao.classList.remove("invisivel");
}