let tituloCriacao;
let imagemCriacao;
let quantPerguntas;
let quantNiveis;
let perguntaCriacao;
let perguntaCorCriacao;
let respostaCorretaCriacao;
let imagemCorretaCriacao;
let respostaIncorretaCriacao1;
let respostaIncorretaCriacao2;
let respostaIncorretaCriacao3;
let imagemIncorretaCriacao1;
let imagemIncorretaCriacao2;
let imagemIncorretaCriacao3;
let tituloNivelcriacao;
let porcentagemNivelCriacao;
let imagemNivelCriacao;
let descricaoNivelCriacao;
let verificacao;
let listaAuxAnswer = [];
let listaAnswer = [];
let listaPerguntas = [];
let listaLevels = [];
let contador;
let contadorNiveis;
// let mensagemCriacao = {
// 	title: `${titulo}`,
// 	image: `${imagem}`,
// 	questions: [`${listaPerguntas}`],
// 	levels: [`${listaLevels}`]
// }
function sumirBotao() {
    document.querySelector(".botao-criacao").classList.add("off");
    document.querySelector(".container-criacao").classList.remove("off");
    document.querySelector(".container-principal").classList.add("off");
    document.querySelector(".comece-pelo-comeco").classList.remove("off");
    console.log('iniciar quiz acionado')
}

//coleta valores criação
function prosseguirParaPerguntas() {
    tituloCriacao = document.querySelector(".tituloCriacao").value
    console.log(tituloCriacao)
    imagemCriacao = document.querySelector(".imagemCriacao").value
    quantPerguntas = document.querySelector(".quantPerguntas").value
    quantNiveis = document.querySelector(".quantNiveis").value

    //verifica campos
    if (tituloCriacao == "" || imagemCriacao == "" || quantPerguntas == "" || quantNiveis == "") {
        return alert("É necessário preencher todos os campos!")
    }

    //verifica valores numericos dos campos e reinicia quant perguntas
    if (isNaN(quantPerguntas) || quantPerguntas < 3) {
        alert("É necessário pelo menos 3 perguntas!")
        return document.querySelector(".quantPerguntas").value = ""
    }

    //verifica valores numericos dos campos e reinicia quant niveis
    if (isNaN(quantNiveis || quantNiveis < 2)) {
        alert("Por favor, informe a quantidade de níveis, a quantidade mínima é 2")
        return document.querySelector(".quantNiveis").value = ""
    } else {
        document.querySelector(".comece-pelo-comeco").classList.add("off")
        document.querySelector(".perguntas").classList.remove("off")
    }
    gerarInputdePerguntas()
    return (tituloCriacao, imagemCriacao)
}
function variaveis() {
    titulo
    imagem
    console.log(titulo)
}
function gerarInputdePerguntas() {
    console.log(quantPerguntas)
    let inputPerguntas = document.querySelector(".container-perguntas")
    inputPerguntas.innerHTML = `
    <div class="container-pergunta n selecionado">
        <div class="sub-titulos">
            <h3>Pergunta 1 </h3>
            <button class="off" onclick="abreFecha(this)" ><ion-icon name="create"></ion-icon></button>
        </div>
        <div class="conteudoCriacao on">
            <div class="pergunta">
            <input class="inputPergunta" type="text" placeholder="Texto da pergunta">
            <input class="inputCor" type="text" placeholder="Cor de fundo da pergunta">
        </div>
        <div class="respota-correta">
            <h3>Resposta correta</h3>
            <input class="inputCorreta"type="text" placeholder="Resposta correta">
            <input class="imagemCorreta"type="text" placeholder="URL da imagem">
        </div>
        <div class="respostas-incorretas">
            <h3>Respostas Incorretas</h3>
            <div class="resposta-incorreta1">
                <input class="inputIncorreta1" type="text" placeholder="Resposta incorreta 1">
                <input class="imagemIncorreta1"type="text" placeholder="URL da imagem 1">
            </div>
            <div class="resposta-incorreta2">
                <input class="inputIncorreta2"type="text" placeholder="Resposta incorreta 2">
                <input class="imagemIncorreta2" type="text" placeholder="URL da imagem 2">
            </div>
            <div class="resposta-incorreta3
            ">
                <input class="inputIncorreta3" type="text" placeholder="Resposta incorreta 3">
                <input class="imagemIncorreta3"type="text" placeholder="URL da imagem 3">
            </div>
            </div>
        </div>
</div>
    `
    for (let i = 2; i <= quantPerguntas; i++) {
        inputPerguntas.innerHTML += `
    <div class="container-pergunta n">
        <div class="sub-titulos">
            <h3>Pergunta ${i}</h3>
            <button class="on" onclick="abreFecha(this)"><ion-icon name="create"></ion-icon></button>
        </div>
        <div class="conteudoCriacao off">
            <div class="pergunta">
                <input class="inputPergunta" type="text" placeholder="Texto da pergunta">
                <input class="inputCor" type="text" placeholder="Cor de fundo da pergunta">
            </div>
            <div class="respota-correta">
                <h3>Resposta correta</h3>
                <input class="inputCorreta"type="text" placeholder="Resposta correta">
                <input class="imagemCorreta"type="text" placeholder="URL da imagem">
            </div>
            <div class="respostas-incorretas">
                <h3>Respostas Incorretas</h3>
                <div class="resposta-incorreta1">
                    <input class="inputIncorreta1" type="text" placeholder="Resposta incorreta 1">
                    <input class="imagemIncorreta1"type="text" placeholder="URL da imagem 1">
                </div>
                <div class="resposta-incorreta2">
                    <input class="inputIncorreta2"type="text" placeholder="Resposta incorreta 2">
                    <input class="imagemIncorreta2" type="text" placeholder="URL da imagem 2">
                </div>
                <div class="resposta-incorreta3
                ">
                    <input class="inputIncorreta3" type="text" placeholder="Resposta incorreta 3">
                    <input class="imagemIncorreta3"type="text" placeholder="URL da imagem 3">
                </div>
            </div>
        </div>
</div>
    `

    }
}
function abreFecha(elemento) {
    let divContainerAnterior = document.querySelector(".selecionado")
    let divConteudoAnterior = divContainerAnterior.querySelector(".conteudoCriacao")
    divContainerAnterior.querySelector("button").classList.remove("off")
    divConteudoAnterior.classList.add("off")
    divContainerAnterior.classList.remove("selecionado")
    let divSubTitulo = elemento.parentNode
    let divContainer = divSubTitulo.parentNode
    divContainer.classList.add("selecionado")
    elemento.classList.add("off")
    let divConteudo = divContainer.querySelector(".conteudoCriacao")
    divConteudo.classList.remove("off")
}
function inputdoFormulariodePerguntas() {
    let divPrincipal = document.querySelector(".container-pergunta.n")
    perguntaCriacao = divPrincipal.querySelector(".inputPergunta").value
    perguntaCorCriacao = divPrincipal.querySelector(".inputCor").value
    respostaCorretaCriacao = divPrincipal.querySelector(".inputCorreta").value
    imagemCorretaCriacao = divPrincipal.querySelector(".imagemCorreta").value
    respostaIncorretaCriacao1 = divPrincipal.querySelector(".inputIncorreta1").value
    imagemIncorretaCriacao1 = divPrincipal.querySelector(".imagemIncorreta1").value
    respostaIncorretaCriacao2 = divPrincipal.querySelector(".inputIncorreta2").value
    imagemIncorretaCriacao2 = divPrincipal.querySelector(".imagemIncorreta2").value
    respostaIncorretaCriacao3 = divPrincipal.querySelector(".inputIncorreta3").value
    imagemIncorretaCriacao3 = divPrincipal.querySelector(".imagemIncorreta3").value
    console.log("passou pelo formulario")
}
function verificacaodosCampos(i, contador) {
    verificacao = ""
    console.log(contador)
    if (perguntaCriacao == "" || perguntaCorCriacao == "") {
        alert('É necessário o preenchimento do completo da Pergunta' + i)
        document.querySelectorAll(".container-pergunta").classList.remove("n")
        document.querySelectorAll(".container-pergunta").classList.add("n")
        textodasPerguntas()
        return
    }
    if (contador < 1 || (respostaCorretaCriacao == "" || imagemCorretaCriacao == "")) {
        alert("É necessário o preenchimento dos campos referente a resposta correta e, pelo menos, uma resposta incorreta")
        document.querySelectorAll(".container-pergunta").classList.remove("n")
        document.querySelectorAll(".container-pergunta").classList.add("n")
        textodasPerguntas()
        return
    }
    else {
        verificacao = "ok"
        console.log("passou pela verificaçao")
        return verificacao
    }
}
function contagemderespostasIncorretas() {
    if (respostaIncorretaCriacao1 !== "" && imagemIncorretaCriacao1 !== "") {
        contador++
        console.log("contagem de resposta part 1")
        console.log(contador)
        listaAuxAnswer.push(respostaIncorretaCriacao1, imagemIncorretaCriacao1)
        console.log(listaAuxAnswer)
    }
    if (respostaIncorretaCriacao2 !== "" && imagemIncorretaCriacao2 !== "") {
        contador++
        listaAuxAnswer.push(respostaIncorretaCriacao2, imagemIncorretaCriacao2)
    }
    if (respostaIncorretaCriacao2 !== "" && imagemIncorretaCriacao2 !== "") {
        contador++
        listaAuxAnswer.push(respostaIncorretaCriacao3, imagemIncorretaCriacao3)
    }
    return (contador, listaAuxAnswer)
}
function textodasPerguntas() {
    for (let i = 1; i <= quantPerguntas; i++) {
        contador = 0
        listaAnswer = []
        objetoAnswer = []
        inputdoFormulariodePerguntas()
        contagemderespostasIncorretas()
        console.log(contador)
        console.log(listaAuxAnswer)
        console.log("vai entrar na verificação")
        verificacaodosCampos(i, contador)
        if (verificacao !== "ok") {
            return
        }
        console.log(listaAuxAnswer)
        let objetoCorreto = {
            text: `${respostaCorretaCriacao}`,
            image: `${imagemCorretaCriacao}`,
            isCorrectAnswer: true
        }
        listaAnswer.push(objetoCorreto)
        for (let m = 0; m < contador * 2; m = m + 2) {
            let objetoAnswer = {
                text: `${listaAuxAnswer[m]}`,
                image: `${listaAuxAnswer[m + 1]}`,
                isCorrectAnswer: false
            }
            listaAnswer.push(objetoAnswer)
        }
        console.log(listaAnswer)
        let objectListaPerguntas =
        {
            title: `${perguntaCriacao}`,
            color: `${perguntaCorCriacao}`,
            answers: listaAnswer
        }
        listaPerguntas.push(objectListaPerguntas)
    }
    console.log(listaPerguntas)
    let mensagemCriacao = {
        title: `${tituloCriacao}`,
        image: `${imagemCriacao}`,
        questions: listaPerguntas,
        levels: ""
    }
    console.log(mensagemCriacao)
    prosseguirParaNiveis()
}
function prosseguirParaNiveis() {
    document.querySelector(".perguntas").classList.add("off")
    document.querySelector(".niveis").classList.remove("off")
    gerarInputdeNiveis()
    document.querySelector(".selecionado").classList.remove("selecionado")
}
function gerarInputdeNiveis() {
    let inputNiveis = document.querySelector(".container-niveis")
    inputNiveis.innerHTML = `
            <div class="container-input selecionado n">
                <div class="sub-titulos">
                    <h3>Nível 1</h3>
                    <button class="off" onclick="abreFecha(this)"><ion-icon name="create"></ion-icon></button>
                </div>
                <div class="conteudoCriacao">
                    <input class="titulo-nivel-criacao" type="text" placeholder="Titulo do nível">
                    <input class="acerto-minimo-criacao" type="text" placeholder="% de acerto mínimo">
                    <input class="url-nivel-criacao" type="text" placeholder="URL da imagem do nível">
                    <input class="descricao-criacao" type="text" placeholder="Descrição do nível">
                </div>
            </div>
            `
    for (let n = 2; n <=quantNiveis; n++) {
        inputNiveis.innerHTML +=`
            <div class="container-input n">
                <div class="sub-titulos">
                    <h3>Nível ${n}</h3>
                    <button class="" onclick="abreFecha(this)"><ion-icon name="create"></ion-icon></button>
                </div>
                <div class="conteudoCriacao off">
                    <input class="titulo-nivel-criacao" type="text" placeholder="Titulo do nível">
                    <input class="acerto-minimo-criacao" type="text" placeholder="% de acerto mínimo">
                    <input class="url-nivel-criacao" type="text" placeholder="URL da imagem do nível">
                    <input class="descricao-criacao" type="text" placeholder="Descrição do nível">
                </div>
            </div>`


    }
}
function inputdoFormulariodeNiveis(){
    let divPai = document.querySelector(".container-niveis")
    let divPrincipal = divPai.querySelector(".container-input.n")
    tituloNivelcriacao = divPrincipal.querySelector(".titulo-nivel-criacao").value
    porcentagemNivelCriacao = divPrincipal.querySelector(".acerto-minimo-criacao").value
    imagemNivelCriacao = divPrincipal.querySelector(".url-nivel-criacao").value
    descricaoNivelCriacao = divPrincipal.querySelector(".descricao-criacao").value
    console.log(divPrincipal)
    divPrincipal.classList.remove("n")
    console.log(divPrincipal)
    console.log("passou pelo formulario de niveis")
}
function verificacaodosNiveis(i) {
    if (tituloNivelcriacao == "" || porcentagemNivelCriacao == ""|| imagemNivelCriacao==""||descricaoNivelCriacao=="") {
        return alert('É necessário o preenchimento de todos os campos' + i)
    }
    else {
        verificacao = "ok"
        console.log("passou pela verificaçao")
        return verificacao
    }
}
function textodosNiveis() {
    let objetoNivel = [];
    for (let i = 1; i <= quantNiveis; i++) {
        inputdoFormulariodeNiveis()
        console.log("vai entrar na verificação")
        verificacaodosNiveis(i)
        if (verificacao !== "ok") {
            return
        }
        objetoNivel = {
			title: tituloNivelcriacao,
			image: imagemNivelCriacao,
			text: descricaoNivelCriacao,
			minValue: porcentagemNivelCriacao
		}
        
        listaLevels.push(objetoNivel)
    }
    console.log(listaLevels)
    let mensagemCriacao = {
        title: `${tituloCriacao}`,
        image: `${imagemCriacao}`,
        questions: listaPerguntas,
        levels: listaLevels
    }
    console.log(mensagemCriacao)
    enviarCriacaoAPI(mensagemCriacao)
}
function enviarCriacaoAPI(elemento){
    console.log(elemento)
    let promisseEnviarCriacao = axios.post("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes",elemento)
    promisseEnviarCriacao.then(sucesso)
    promisseEnviarCriacao.catch(falha)
}
function sucesso(){
    alert("tudo certo!")
}
function falha(erro){
    let codeStatus = promisseEnviarCriacao.erro.status()
    console.log(codeStatus)
    alert("deu errado!")
}


//carregar dados servidor
