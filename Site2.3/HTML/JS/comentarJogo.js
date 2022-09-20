window.onload = function caixaMostrarComentario2(){
    var comentario =document.getElementById('verificaçãoComentário2');
    verificarComentario(comentario);
}
function addComentario(nomeUsuario , mensagemUsuario , posicao){
    localStorage.setItem("UsuarioDoComentariojogo"+posicao , nomeUsuario);
    localStorage.setItem("mensagemDoUsuariojogo"+posicao , mensagemUsuario);
    console.log(nomeUsuario);
    console.log(mensagemUsuario);
}
function verificarComentario(comentario){
    if(localStorage.getItem('mensagemDoUsuariojogo1')!=null){ 
            comentario.innerHTML +="<br><div id='caixaMostrarComentario'><p>Assunto: "+localStorage.getItem('UsuarioDoComentariojogo'+1)+"   /    Nome do Usuário: "+localStorage.getItem('NomeConta')+"</p><p>"+localStorage.getItem('mensagemDoUsuariojogo'+1)+"</p>"+
                                   "<h4>-------------------------------------------------------------</h4><div id='respostaEmpresa'>nenhuma resposta da empresa,aguarde...</div></div>"+
                                  "<br>"+"<input type='button' id='excluirComentario' onclick ='excluirComentario("+1+")' value='Excluir Comentario!'>";
    }else{
            comentario.innerHTML+="<br><p id='nenhumComentário'>nenhum comentário</p>";
    }
}


function excluirComentario(item){
    localStorage.removeItem('UsuarioDoComentariojogo'+item);
    localStorage.removeItem('mensagemDoUsuariojogo'+item);
}