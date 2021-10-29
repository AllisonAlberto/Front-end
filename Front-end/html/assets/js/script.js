/* 
Variaveis podem ser: var (global); let(local); const 

Case sensitive

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByNome()
por classe: getElementsByClassName()
por seletor: querySelector()

*/ 

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = "50%"

function validaNome(){
    let txt = document.querySelector("#txtnome");
    if(nome.value.length < 3 ) {
        txt.innerHTML = "nome inválido!";
        txt.style.color = "red";
    }
    else {
        txt.innerHTML = "nome válido!";
        txt.style.color = "green";     
    }
}

function validaEmail(){
    let txtemil = document.querySelector("#txtemail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
        txtemail.innerHTML = "E-mail inválido";
        txtemail.style.color = "red";
    }
    else {
        txtemail.innerHTML = "E-mail válido";
        txtemail.style.color = "green";
    }
}

function validaTexto(){
    let txtTexto = document.querySelector("#txtassunto")
    if(assunto.value.length > 100){
        txtTexto.innerHTML = "assunto inválido";
        txtTexto.style.color = "red";
    }
    else{
        txtTexto.style.display = "none"
    }
}