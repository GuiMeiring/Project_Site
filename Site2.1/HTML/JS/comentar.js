window.onload = function caixaMostrarComentario(){
    var comentario =document.getElementById('verificaçãoComentário');
    verificarComentario(comentario);

}
function addComentario(nomeUsuario , mensagemUsuario ){
    if(localStorage.getItem("guardarPosicao")==null)
    {
        localStorage.setItem("guardarPosicao",0);
        var posicao=parseInt(localStorage.getItem("guardarPosicao"));
    }
    else{
    console.log(posicao);
    var posicao=parseInt(localStorage.getItem("guardarPosicao"));
    posicao++;
    console.log(posicao);
    localStorage.setItem("guardarPosicao",posicao);
    }
    localStorage.setItem("UsuarioDoComentario"+posicao , nomeUsuario);
    localStorage.setItem("mensagemDoUsuario"+posicao, mensagemUsuario);
    console.log(nomeUsuario);
    console.log(mensagemUsuario);
   
    

    
}
function verificarComentario(comentario){
    
    for(var i=0;i <=100;i++){
        if(localStorage.getItem('mensagemDoUsuario'+i)!=null){ 
            comentario.innerHTML +="<br><br><div id='caixaMostrarComentario'<p>Assunto: "+localStorage.getItem("UsuarioDoComentario"+i)+"   /    Nome do Usuário: "+localStorage.getItem('NomeConta')+"</p><p>"+localStorage.getItem('mensagemDoUsuario'+i)+"</p>"+
                                   "<h4>------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h4><div id='respostaEmpresa'>Resposta: nenhuma rsposta da empresa,aguarde...</div></div>"+
                                    "<br>"+"<input type='button' id='excluirComentario' onclick ='excluirComentario("+i+")' value='Excluir Comentario!'>";
       
    }
} 
        comentario.innerHTML+="<br><br><br><div id='caixaMostrarMais'><a href='comentarios.html' id='escritaVermaisSeusComentario'>Ver mais comentários em outra página <\a><a href='relatarerro.html' id='relatarErro'>   |Relatar erro<\div>"+
        "<br><br><br><footer><div id='footer2'><h3>Game_Mania/168,Avenida Paulista,São Paulo,SP,Brasil <a id='relatarErro' href='relatarErro.html'>|Relatar erro</a></h3></div><a href='https://www.instagram.com/'><img class='redes2' src='IMG/instagram.png'></a><a href='https://www.twitter.com/'><img class='redes2' src='IMG/twitter.png'></a>"+
        "<a href='https://www.tiktok.com/'><img class='redes2' src='IMG/tiktok.png'></a><a href='https://www.facebook.com/'><img class='redes2' src='IMG/facebok.webp'></a><a href='https://www.linkedin.com/'><img class='redes2' src='IMG/linkedin.png'></a>"+
        "<a href='https://www.youtube.com/'><img class='redes2' src='IMG/youtube.png'></a> <a href='https://www.whatsapp.com/'><img class='redes2' src='IMG/whatsapp.webp'><h2 id='whatsapp2'>(47)996954527</h2></a><\div></footer>";
}

function excluirComentario(item){
    localStorage.removeItem('UsuarioDoComentario'+item);
    localStorage.removeItem('mensagemDoUsuario'+item);
    let excluir = (localStorage.getItem("guardarPosicao"));
    console.log(excluir);
    excluir--;
    console.log(excluir);
    localStorage.setItem("guardarPosicao",excluir);
    
    
}