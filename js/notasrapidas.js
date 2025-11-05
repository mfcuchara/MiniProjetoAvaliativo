const cores = ["#2459f7ff", "#147d37ff", "#9b2be5ff"]  //array de cores 
let contadorCor = 0

function adicionar(){
    var nota = document.getElementById("InserirNota").value /*value: acessa ou define o conteúdo atual (o texto digitado ou selecionado) do elemento encontrado. Se o elemento for uma caixa de texto, ele retorna o que o usuário digitou nela.*/
    var urgente = document.getElementById("UrgenteBox").checked /*Acessa uma propriedade booleana (que só pode ser true ou false) desse elemento. Essa propriedade indica se a caixa de seleção está marcada (true) ou desmarcada (false).*/
    var naoUrgente = document.getElementById("NaoUrgenteBox").checked

    var novo = document.createElement("li")
    novo.textContent = nota
    novo.classList.add("notaBox")

    novo.style.color = cores[contadorCor]
    contadorCor = (contadorCor + 1) % cores.length


    if (urgente) {
        novo.classList.add("urgente")
        document.getElementById("listaUrgentes").appendChild(novo)
    } else if (naoUrgente) {
        novo.classList.add("naoUrgente")
         document.getElementById("listaNaoUrgentes").appendChild(novo)
    } else {
        alert("Selecione se a nota é urgente ou não urgente!")
        return
    }

    document.getElementById("InserirNota").value = ""
    document.getElementById("UrgenteBox").checked = false
    document.getElementById("NaoUrgenteBox").checked = false
}

function excluirNotaUrgente() {
    var nota = document.querySelector("#listaUrgentes li.urgente")
    if (nota) nota.remove()
    else alert("Não há notas urgentes para remover!")
}

function excluirTodasUrgentes() {
   var notas = document.querySelectorAll("#listaUrgentes li.urgente");
    if(notas.length==0){
    alert("Não há notas não urgentes para remover!")
    return
}
    notas.forEach(n => n.remove());
}

function excluirNotaNaoUrgente() {
    var nota = document.querySelector("#listaNaoUrgentes li.naoUrgente")
    if (nota) nota.remove()
     else alert("Não há notas não urgentes para remover!")
    
}

function excluirTodasNaoUrgentes() {
    var notas = document.querySelectorAll("#listaNaoUrgentes li.naoUrgente");
    if(notas.length==0){
    alert("Não há notas não urgentes para remover!")
    return
}
    notas.forEach(n => n.remove());

}
