function criarLabel(para, id, texto){
    var label = document.createElement("label");
    label.setAttribute("for", para);
    label.setAttribute("id", id);
    label.classList.add("label-input");
    label.textContent = texto;

    return label;
}


function criarInput(name, id){
    var input = document.createElement("input");
    input.required = true
    input.classList.add("input-number");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "2.56");
    input.setAttribute("name", name);
    input.setAttribute("id", id);

    return input
}


function criarInputCalcular(){
    var button =document.createElement("button")
    button.setAttribute("type", "submit");
    button.setAttribute("id", "calcular");
    button.classList.add("button-calcular");
    button.textContent = "Calcular";

    return button;
}


function campoEquacaoLimpo(){
    var campoLimpo = document.createElement("ul");
    campoLimpo.setAttribute("id", "campo-equacao");
    campoLimpo.classList.add("invisivel");
    window.scroll(0, 0);
    return campoLimpo;
}


function criarParagraphDeErro(text){
   var p = document.createElement("p");
   p.textContent = text;
   p.classList.add("p-erro");

   return p;
}


function criarUl(id){
   var ul = document.createElement("ul");
   ul.setAttribute("id", id);

   return ul;
}

function criarResposta(texto, id){
   var resposta = document.createElement("h2");
   resposta.textContent = texto;
   resposta.classList.add("resposta")
   resposta.setAttribute("id", id);

   return resposta
}


function criarTextoFormula(texto, id){
   var formula = document.createElement("h3");
      formula.textContent = texto;
   formula.classList.add("formula");
   formula.classList.add("sublinhado");
   formula.setAttribute("id", id);

   return formula;

}


function diminuiCasasDecimais(resultado, num){
   var stringResultado = resultado + "";
   var splitResultado = stringResultado.split(".");
   console.log(splitResultado)
   
   if(splitResultado.length > 1){
      console.log(splitResultado[1])
         var splitDecimais = splitResultado[1];
         if (splitDecimais.length > num){
            resultado = resultado.toFixed(num);
         }
   }

   return resultado;

}

function normalizar(str) {
   return str.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
}