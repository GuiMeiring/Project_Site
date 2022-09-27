window.onload = function Sitecarrinho(){
    var carrinho = document.getElementById('carrinho');
    exibirCarrinho(carrinho);
    
}
function addCarrinho(nome, preco, quantidade, posicao){ //parâmetros
    if(quantidade > 0){
    //localStorage (armazenamento do navegador)
    //não é adequado para senhas (não é seguro)
    //localStorage = permanente
    //sessionStorage = válido por uma sessão
    localStorage.setItem("nome"+posicao, nome); // chave: nome1: valor: Macarrão
    localStorage.setItem("preco"+posicao, preco); // chave: preco1: 1,99   
    localStorage.setItem("quantidade"+posicao, quantidade);
    console.log(nome);
    console.log(preco);
    console.log(quantidade);
   }
}
function exibirCarrinho(carrinho){
    var valorTotal=0.0;
    //Ler os dados do localStorage.getItem("nome"+posicao) -> for(repetição)
    //Mostrar os dados dos produtos na página carrinho.html
    //for() -> repetir para todos os itens do localStorage
    for(var i=1;i<=100;i++){
        if(localStorage.getItem('nome'+i)!=null){ //produto adicionado no carrinho
            carrinho.innerHTML +="<br><div id='produto'><h1 id='letraNome'>"+localStorage.getItem('nome'+i)+"</h1>"+
                        "<h4 id='complemento'>Preço:R$ "+localStorage.getItem('preco'+i)+"| Quantidade: "+localStorage.getItem('quantidade'+i)+"</h4>"
                        +"</div>"+"<input type='button'  class='btn btn-danger' id='excluir' onclick ='excluirItem("+i+")' value='Excluir do carrinho!'><br>";
            valorTotal=parseFloat(localStorage.getItem('preco'+i)) * parseInt(localStorage.getItem('quantidade'+i)) + valorTotal;
        }
    }

    carrinho.innerHTML +="<br><h2 id='EscritaprecoCarrinho'>Preço total dos produtos: R$ "+"<span id='precoCarrinho'>"+valorTotal+"</span></h2><br><a href='#topo'> <button type='button' class='btn btn-danger botaoSectionPage'>Voltar ao topo!</button></a><br>";
    
}
function excluirItem(item){
    localStorage.removeItem('nome'+item);
    localStorage.removeItem('preco'+item);
    localStorage.removeItem('quantidade'+item);
}
//cria a chave do preço original do carrinho
function addPrecoCarrinho(valortotal){localStorage.setItem("precoCarrinho1", valortotal);console.log(valortotal);}
//


    



    




