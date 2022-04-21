let titulo;
let imagem;
let quantPerguntas;
let quantNiveis;
function sumirBotao() {
    document.querySelector(".botao-criacao").classList.add("off")
    document.querySelector(".container-criacao").classList.remove("off")
    document.querySelector(".container-principal").classList.add("off")
    document.querySelector(".comece-pelo-comeco").classList.remove("off")
}

function prosseguirParaPerguntas() {
    titulo = document.querySelector(".titulo").value
    imagem = document.querySelector(".imagem").value
    quantPerguntas = document.querySelector(".quantPerguntas").value
    quantNiveis = document.querySelector(".quantNiveis").value
    if(titulo==""||imagem==""||quantPerguntas==""||quantNiveis==""){
        alert("É necessário preencher todos os campos!")
    }
    if(isNaN(quantPerguntas) ||quantPerguntas<=3){
        alert("É necessário pelo menos 3 perguntas!")
        quantPerguntas.value=""
    }
    if(isNaN(quantPerguntas)){
        alert("Por favor, informe uma quantidade de níveis")
        quantNiveis.value=""
    }else{
    document.querySelector(".comece-pelo-comeco").classList.add("off")
    document.querySelector(".perguntas").classList.remove("off")}
    gerarInputdePerguntas()
}
function gerarInputdePerguntas(){
    console.log(quantPerguntas)
    let inputPerguntas = document.querySelector(".container-perguntas")
    inputPerguntas.innerHTML = `
    <div class="container-pergunta selecionado">
        <div class="sub-titulos">
            <h3>Pergunta1 </h3>
            <button class="off" onclick="abreFecha(this)" ><ion-icon name="create"></ion-icon></button>
        </div>
        <div class="conteudoCriacao on">
            <div class="pergunta">
                <input type="text" placeholder="Texto da pergunta">
                <input type="text" placeholder="Cor de fundo da pergunta">
            </div>
            <div class="respota-correta">
                <h3>Resposta correta</h3>
                <input type="text" placeholder="Resposta correta">
                <input type="text" placeholder="URL da imagem">
            </div>
            <div class="respostas-incorretas">
                <h3>Respostas Incorretas</h3>
                <div class="resposta-incorreta">
                    <input type="text" placeholder="Resposta incorreta 1">
                    <input type="text" placeholder="URL da imagem 1">
                </div>
                <div class="resposta-incorreta">
                    <input type="text" placeholder="Resposta incorreta 2">
                    <input type="text" placeholder="URL da imagem 2">
                </div>
                <div class="resposta-incorreta">
                    <input type="text" placeholder="Resposta incorreta 3">
                    <input type="text" placeholder="URL da imagem 3">
                </div>
            </div>
        </div>
</div>
    `
    for(let i =2; i<=quantPerguntas;i++){
     inputPerguntas.innerHTML +=   `
    <div class="container-pergunta">
        <div class="sub-titulos">
            <h3>Pergunta ${i}</h3>
            <button class="on" onclick="abreFecha(this)"><ion-icon name="create"></ion-icon></button>
        </div>
        <div class="conteudoCriacao off">
            <div class="pergunta">
                <input type="text" placeholder="Texto da pergunta">
                <input type="text" placeholder="Cor de fundo da pergunta">
            </div>
            <div class="respota-correta">
                <h3>Resposta correta</h3>
                <input type="text" placeholder="Resposta correta">
                <input type="text" placeholder="URL da imagem">
            </div>
            <div class="respostas-incorretas">
                <h3>Respostas Incorretas</h3>
                <div class="resposta-incorreta">
                    <input type="text" placeholder="Resposta incorreta 1">
                    <input type="text" placeholder="URL da imagem 1">
                </div>
                <div class="resposta-incorreta">
                    <input type="text" placeholder="Resposta incorreta 2">
                    <input type="text" placeholder="URL da imagem 2">
                </div>
                <div class="resposta-incorreta">
                    <input type="text" placeholder="Resposta incorreta 3">
                    <input type="text" placeholder="URL da imagem 3">
                </div>
            </div>
        </div>
</div>
    `

    }
}
function abreFecha(elemento){
    let divContainerAnterior = document.querySelector(".selecionado")
    let divConteudoAnterior = divContainerAnterior.querySelector(".conteudoCriacao")
    divContainerAnterior.querySelector("button").classList.add("on")
    divContainerAnterior.querySelector("button").classList.remove("off")
    divConteudoAnterior.classList.remove("on") 
    divConteudoAnterior.classList.add("off")
    divContainerAnterior.classList.remove("selecionado")
    let divSubTitulo = elemento.parentNode
    let divContainer = divSubTitulo.parentNode
    divContainer.classList.add("selecionado")
    elemento.classList.remove("on")
    elemento.classList.add("off")
    let divConteudo = divContainer.querySelector(".conteudoCriacao") 
    divConteudo.classList.remove("off")
    divConteudo.classList.add("on")
}
function prosseguirParaNiveis(){

}

