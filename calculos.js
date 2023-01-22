
let receitaFinal = localStorage.getItem("receitFinal");
let somaDescontos = localStorage.getItem("somaDescontos");
let custoFinal = localStorage.getItem("custoFinal");

if (receitaFinal) {
    document.getElementById("valor_receita").value = receitaFinal;
}

if (somaDescontos) {
    document.getElementById("valor_descontos").value = somaDescontos;
}

if (custoFinal) {
    document.getElementById("valor_total").value = custoFinal;
}



function test(){

    

    let input1 =parseInt(document.getElementById("valor_base").value) 
    let input2 = parseInt(document.getElementById("valor_transporte").value)
    let input3 = parseInt(document.getElementById("valor_alimentacao").value)
    
   let soma = input1+input2+input3
   let receitaFinal =  document.getElementById("valor_receita").value = soma
   let desconto1 = parseInt(document.getElementById("valor_automovel").value)
   let desconto2 = parseInt(document.getElementById("faltas").value)

   let somaDescontos = desconto1+desconto2
   document.getElementById("valor_descontos").value = somaDescontos


   let custoFinal = receitaFinal-somaDescontos

   document.getElementById("valor_total").value = custoFinal

   localStorage.setItem("receitFinal", receitaFinal);
localStorage.setItem("somaDescontos", somaDescontos);
localStorage.setItem("custoFinal", custoFinal);




    
}


