var campoFiltro = document.getElementById("filtrar");

campoFiltro.addEventListener("input", function(){
    var formulas = document.querySelectorAll(".button");

    for(var i = 0; i < formulas.length; i++){
        if(this.value.length > 0){
            var formula = formulas[i];
            var nome = normalizar(formula.textContent);
            var expressao = new RegExp(normalizar(this.value), "i");

            if(!expressao.test(nome)){
                formula.classList.add("invisivel");
            } else {
                formula.classList.remove("invisivel");

            } 
        } else {
            for(var index = 0; index < formulas.length; index++){
                var formula = formulas[index];
                formula.classList.remove("invisivel");
            }
        }
    }
});