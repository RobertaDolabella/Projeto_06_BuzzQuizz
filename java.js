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
let listaContainerPerguntas;
let listaContainerInputNiveis;
let i;
let x;
let verificacaoNiveis;
let verificacaoPercentual;
let acertoMinimo = [];
let idCriacao;
let listaIdCriacao = [];
let corpoSucesso;
// let mensagemCriacao = {
// 	title: `${titulo}`,
// 	image: `${imagem}`,
// 	questions: [`${listaPerguntas}`],
// 	levels: [`${listaLevels}`]
// }
function sumirBotao() {
    document.querySelector(".botao-criacao").classList.add("off");
    document.querySelector(".container-quizzes-criacao").classList.remove("off");
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
    // verifica condição para o titulo
    if (tituloCriacao.length < 20 || tituloCriacao.length > 65) {
        return alert("Por favor, insira um titulo que tenha mais de 20 caracteres e menos que 65.")
    }
    // verificação da url da imagem
    try {
        let url = new URL(imagemCriacao)
        console.log("Valid URL!")
    } catch (err) {
        return alert("URL invalida")
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
            <input class="inputCor" type="color" placeholder="Cor de fundo da pergunta" list="colors">
            <datalist id="colors">
            <option value="#4169E1"/>
            <option value="#FF1493"/>
            <option value="#EE82EE"/>
            <option value="#8B0000"/>
            <option value="#FF7F50"/>
            <option value="#00CED1"/>
            <option value="#7FFFD4"/>
            <option value="#228B22"/>
            <option value="#BC8F8F"/>
            </datalist>
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
                <input class="inputCor" type="color" placeholder="Cor de fundo da pergunta" list="colors">
                <datalist id="colors">
                <option value="#4169E1"/>
                <option value="#FF1493"/>
                <option value="#EE82EE"/>
                <option value="#8B0000"/>
                <option value="#FF7F50"/>
                <option value="#00CED1"/>
                <option value="#7FFFD4"/>
                <option value="#228B22"/>
                <option value="#BC8F8F"/>
                </datalist>
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
    listaContainerPerguntas = document.querySelectorAll(".container-pergunta")
    console.log("nodelits que estao sendo selecionados")
    console.log(listaContainerPerguntas)
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
    let divPrincipal = listaContainerPerguntas[i - 1]
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
function verificacaodosCampos(i) {
    verificacao = ""
    console.log("pergunta que esta sendo verificada")
    console.log(i)
    console.log("contadoe da verificacao")
    console.log(contador)
    if (perguntaCriacao.length < 20 || perguntaCorCriacao == "") {
        alert('É necessário o preenchimento do completo da Pergunta' + (i))
        limparFormulario()
        return
    }
    try {
        let url = new URL(imagemCorretaCriacao)
        console.log("Valid URL!")
    } catch (err) {
        limparFormulario()
        return alert("URL da imagem é invalida ")
    }
    try {
        let url = new URL(imagemIncorretaCriacao1)
        console.log("Valid URL!")
    } catch (err) {
        limparFormulario()
        return alert("URL da imagem 1 é invalida ")
    }
    if (contador > 1) {
        try {
            let url = new URL(imagemIncorretaCriacao2)
            console.log("Valid URL!")
        } catch (err) {
            limparFormulario()
            return alert("URL da imagem 2 é invalida ")
        }
    }
    if (contador > 2) {
        try {
            let url = new URL(imagemIncorretaCriacao3)
            console.log("Valid URL!")
        } catch (err) {
            limparFormulario()
            return alert("URL da imagem 3 é invalida ")
        }
    }
    if (contador < 1 || respostaCorretaCriacao == "") {
        alert("É necessário o preenchimento dos campos referente a resposta correta e, pelo menos, uma resposta incorreta")
        limparFormulario()
        return
    }
    else {
        verificacao = "ok"
        console.log("passou pela verificaçao")
        return verificacao
    }
}
function contagemderespostasIncorretas() {
    contador = 0
    console.log("inicio do contador")
    console.log(contador)
    if (respostaIncorretaCriacao1 !== "" && imagemIncorretaCriacao1 !== "") {
        contador = 1
        console.log("contagem do contador")
        console.log(contador)
        console.log("contagem de resposta part 1")
        console.log(contador)
        listaAuxAnswer.push(respostaIncorretaCriacao1, imagemIncorretaCriacao1)
        console.log(listaAuxAnswer)
        if (respostaIncorretaCriacao2 !== "" && imagemIncorretaCriacao2 !== "") {
            contador = 2
            listaAuxAnswer.push(respostaIncorretaCriacao2, imagemIncorretaCriacao2)
            if (respostaIncorretaCriacao3 !== "" && imagemIncorretaCriacao3 !== "") {
                contador = 3
                listaAuxAnswer.push(respostaIncorretaCriacao3, imagemIncorretaCriacao3)
            }
        }
    }
    console.log("resultado final do contador")
    console.log(contador)
    return listaAuxAnswer
}
function limparFormulario() {
    listaAuxAnswer = []
}
function textodasPerguntas() {
    for (i = 1; i <= quantPerguntas; i++) {
        listaAnswer = []
        objetoAnswer = []
        inputdoFormulariodePerguntas()
        contagemderespostasIncorretas()
        console.log(contador)
        console.log(listaAuxAnswer)
        console.log("vai entrar na verificação")
        verificacaodosCampos(i)
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
            <div class="container-input selecionado nivel">
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
    for (let n = 2; n <= quantNiveis; n++) {
        inputNiveis.innerHTML += `
            <div class="container-input nivel">
                <div class="sub-titulos">
                    <h3>Nível ${n}</h3>
                    <button class="" onclick="abreFecha(this)">
                    <ion-icon name="create"></ion-icon></button>
                </div>
                <div class="conteudoCriacao off">
                    <input class="titulo-nivel-criacao" type="text" placeholder="Titulo do nível">
                    <input class="acerto-minimo-criacao" type="text" placeholder="% de acerto mínimo">
                    <input class="url-nivel-criacao" type="text" placeholder="URL da imagem do nível">
                    <input class="descricao-criacao" type="text" placeholder="Descrição do nível">
                </div>
            </div>`


    }
    listaContainerInputNiveis = document.querySelectorAll(".nivel")
    console.log('verificação da lista de nodes')
    console.log(listaContainerInputNiveis)
}

function inputdoFormulariodeNiveis(x) {
    let divPrincipalnivel = listaContainerInputNiveis[x - 1]
    tituloNivelcriacao = divPrincipalnivel.querySelector(".titulo-nivel-criacao").value
    porcentagemNivelCriacao = divPrincipalnivel.querySelector(".acerto-minimo-criacao").value
    imagemNivelCriacao = divPrincipalnivel.querySelector(".url-nivel-criacao").value
    descricaoNivelCriacao = divPrincipalnivel.querySelector(".descricao-criacao").value
    acertoMinimo.push(porcentagemNivelCriacao)
    console.log(divPrincipalnivel)
    console.log("passou pelo formulario de niveis")
}
function verificacaodosNiveis(x) {
    if (tituloNivelcriacao.length < 10) {
        return alert("É necessário que o titulo tenha pelo menos 10 caracteres")
    }
    if (porcentagemNivelCriacao < 0 || porcentagemNivelCriacao > 100 || isNaN(porcentagemNivelCriacao)) {
        return alert("porcentagem de acerto invalida do nível" + x)
    }
    if (descricaoNivelCriacao.length < 30) {
        return alert(`É necessário que a descrição de nível${x} tenha pelo menos 30 caracteres`)
    }
    if (imagemNivelCriacao == "") {
        return alert("É necessário preencher o campo de imagem do nível" + x)
    }
    if (imagemNivelCriacao !== "") {
        try {
            let url = new URL(imagemNivelCriacao)
            console.log("Valid URL!")
        } catch (err) {
            return alert("URL da imagem é invalida ")
        }
    }
    verificacaoNiveis = "ok"
    console.log("passou pela verificaçao")
    return verificacaoNiveis
}
function verificacaodosPercentuais() {
    console.log(acertoMinimo)
    for (let w = 0; w < acertoMinimo.length; w++) {
        if (acertoMinimo[w] == 0) {
            return verificacaoPercentual = "ok"
        }
    }
    return verificacaoPercentual = "errada"
}
function textodosNiveis() {
    let objetoNivel = [];
    acertoMinimo = [];
    listaLevels = []
    for (x = 1; x <= quantNiveis; x++) {
        inputdoFormulariodeNiveis(x)
        console.log("vai entrar na verificação")
        verificacaodosNiveis(x)
        if (verificacaoNiveis !== "ok") {
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
    verificacaodosPercentuais()
    if (verificacaoPercentual == "errada") {
        return alert("Pelo menos um dos níveis deve ter o indice mínimo de acert de 0%")
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
function enviarCriacaoAPI(elemento) {
    console.log(elemento)
    let promisseEnviarCriacao = axios.post("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes", elemento)
    promisseEnviarCriacao.then(sucesso)
    promisseEnviarCriacao.catch(falha)
}
function sucesso(resposta) {
    console.log("sucesso! esperara o id")
    idCriacao = resposta.data.id
    listaIdCriacao.push(idCriacao)
    console.log("O IDcRIACAO")
    console.log(idCriacao)
    sucessodoQuizz()
    alert("tudo certo!")
}
function sucessodoQuizz() {
    console.log("entrou no sucesso do quiz")
    telaSucesso()
    promisseSucesso = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${idCriacao}`)
    promisseSucesso.then(quizzSucesso)
}
function falha(erro) {
    let codeStatus = erro.status()
    console.log(codeStatus)
    alert("deu errado!")
}

function telaSucesso() {
    console.log("entrou na função telaSucesso")
    document.querySelector(".niveis").classList.add("off")
    document.querySelector(".sucesso-quizz").classList.remove("off")
}
function quizzSucesso(resposta) {
    corpoSucesso = document.querySelector(".container-sucesso")
    let imagemSucesso = resposta.data.image
    let tituloSucesso = resposta.data.title
    corpoSucesso.innerHTML = `
    <div  class="quiz">
                <img 
                src="${imagemSucesso}">
                <div class="filter"></div>
                <div class="titulo">${tituloSucesso}</div>
                <div class="codidoId">${idCriacao}</div>
            </div>        
        `
}
function buscarQuizCriacao() {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${idCriacao}`)
    promise.then(gerarQuizCriacao)
}
function gerarQuizCriacao(resposta) {
    carregarTelaQuizCriacao()
    let imagemBanner = resposta.data.image
    let tituloQuiz = resposta.data.title
    let gerarQuizPagina = document.querySelector('.tela-quiz').querySelector('.conteudo')
    gerarQuizPagina.innerHTML =
        `   
        <div class="banner centralizar">
        <img src="${imagemBanner}">
        <div class="titulo">${tituloQuiz}</div>
        </div>
        
    `
    gerarPerguntasQuiz(resposta)
}
function carregarTelaQuizCriacao() {
    document.querySelector('.sucesso-quizz').classList.add('off')
    document.querySelector('.tela-quiz').classList.remove('off')
}
function telaInicial() {
    document.querySelector('.sucesso-quizz').classList.add('off')
    document.querySelector('.container-principal').classList.remove("off")
    let inputQuizzCriacao = document.querySelector(".criacao")
    for (let r = 0; r < listaIdCriacao.length; r++) {
        promisseSucesso = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${listaIdCriacao[r]}`)
        promisseSucesso.then(quizzSucesso)
        console.log(corpoSucesso.innerHTML)
        inputQuizzCriacao.innerHTML += corpoSucesso.innerHTML
    }
}



//variveis globais
const API = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes'
let id_quiz;
let objeto_alternativas = [];
let adicionar_objeto;
let adicionar_array_respostas;
let alternativa_texto;
let alternativasPagina;
let resultados = [];
let quantidadePerguntas = 0;
let alternativa_escolhida;

//carregar dados servidor
function buscarQuizzes() {
    const promise = axios.get(API);
    promise.then(carregarMenuQuizzes)
}


function carregarMenuQuizzes(resposta) {
    console.log('carregar menu quizzes')

    let carregar_pagina = document.querySelector('.quizzes-prontos');
    for (let i = 0; i < 6; i++) {
        let codigo_id = resposta.data[i].id;
        let imagem = resposta.data[i].image;
        let titulo = resposta.data[i].title;

        carregar_pagina.innerHTML += `
            <div onclick="acessarQuiz(this)" class="quiz">
                <img
                src="${imagem}">
            
                <div class="filter"></div>
                <div class="titulo">${titulo}</div>
                <div class="codidoId">${codigo_id}</div>
            </div>        
        `
    }
}


function acessarQuiz(elemento) {
    // id_quiz = elemento.querySelector(".codidoId").innerHTML
 
     // teste com quiz id:8097 da turma 4
     id_quiz = 8097;
     buscarQuizSelecionado()
 }
 
 function buscarQuizSelecionado () {
     const promise = axios.get(`${API}/${id_quiz}`);
     promise.then(gerarQuizSelecionado)
 }
 
 function gerarQuizSelecionado(resposta) {
     carregarTelaQuiz()
     //coletando dados do quiz
     let imagemBanner = resposta.data.image
     let tituloQuiz = resposta.data.title
     // imprime quizz no HTML
     let gerarQuizPagina = document.querySelector('.tela-quiz').querySelector('.conteudo')
     gerarQuizPagina.innerHTML =
         `   
         <div class="banner centralizar">
         <img src="${imagemBanner}">
         <div class="titulo">${tituloQuiz}</div>
         </div>
     `
     gerarPerguntasQuiz(resposta)
 }
 
 function gerarPerguntasQuiz (resposta) {
     let perguntasPagina = document.querySelector('.tela-quiz').querySelector('.conteudo');
     quantidadePerguntas = (resposta.data.questions).length;
 
     for (let i = 0 ; i < quantidadePerguntas; i++) {
         let quantidadeAlternativas = (resposta.data.questions[i].answers).length
         // carregar dados pergunta
         let tituloPergunta = resposta.data.questions[i].title;
         let corPergunta = resposta.data.questions[i].color;
 
         perguntasPagina.innerHTML += `
             <div class="pergunta_${i + 1}">
             <div class="titulo-pergunta centralizar">${tituloPergunta}</div>
             <div class="alternativas answer_${i + 1}">
             </div>            
         `
                 for (let j = 0 ; j < quantidadeAlternativas ; j++) {
                 adicionar_array_respostas = resposta.data.questions[i].answers[j];
                 objeto_alternativas.push(adicionar_array_respostas);
                 //adiciona ordem aleatória
                 objeto_alternativas.sort(comparador);
                 }
 
                     for (let k = 0 ; k < quantidadeAlternativas ; k++) {
                     let alternativa_texto = objeto_alternativas[k].text;
                     let imagem = objeto_alternativas[k].image;
 
                     //salva alternativas corretas num array
                     if ((objeto_alternativas[k].isCorrectAnswer) == true) {
                         resultados.push(alternativa_texto);
                     }
 
                     // adiciona no HTML
                     alternativasPagina = document.querySelector(`.alternativas.answer_${i+1}`);
                     console.log(alternativasPagina)
                     alternativasPagina.innerHTML += `
                             <ul onclick="respostaSelecionada(this)" class="opcao">
                             <img src="${imagem}">
                             <h1 class="resposta">${alternativa_texto}</h1>
                             </ul> `
                         }
                 objeto_alternativas = [];
         }
 }
 
 function comparador() {
     return Math.random() - 0.5;
   }
 
 function respostaSelecionada(escolha_usuario) {
     alternativa_escolhida = escolha_usuario.querySelector('.resposta').innerHTML
    let questao_selecionada;
    
    
     for (let i = 0 ; i < resultados.length ; i++) {
         if (alternativa_escolhida == resultados[i]) {
             escolha_usuario.classList.add('correta');
             questao_selecionada = escolha_usuario.parentNode;
             let m =1 

         }
        }
         if (m!==1) {
            questao_selecionada.classList.add('errada');   
         }
         
         
     }
 
 
 function carregarTelaQuiz() {
     document.querySelector('.container-principal').classList.add('off')
     document.querySelector('.tela-quiz').classList.remove('off')
 }
 //invocação de função
 buscarQuizzes()
