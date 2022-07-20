function maior(){

    /* O método parseFloat() converte a string recebida como 
    argumento e a retorna como um número de ponto flutuante. */
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var maior = num1;

    if(num2 > maior)
    maior = num2;
    if(num3 > maior)
    maior = num3;

    alert("Maior: " + maior);

}