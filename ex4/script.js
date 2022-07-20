/*  */

var numero;

/* O objeto Number() é um objeto encapsulado que permite
 você trabalhar com valores numéricos. */

/* O método prompt() é usado para exibir uma caixa de diálogo 
com uma mensagem opcional solicitando que o usuário insira algum texto. */
numero = Number(window.prompt("Digite um número:"));

/* O método Window. alert() mostra uma caixa de diálogo de 
aviso com o conteúdo opcionalmente especificado e um botão OK */

window.alert("Antecessor: " + String(numero - 1));

window.alert("Sucessor: " + String(numero + 1));