$(document).ready(function(){
    $(".botaoMenu").dblclick(function(){
        $(".menuRespo").css("background","#00000090");
        $("#fotoUsuário").html("<img class='img_usuario' src='IMG/fotousuario.png' alt='foto do usuario'>");
        $("#Sair").html("<a  class='link_Sair'href='paginaInicial.html'>Sair</a>");
        $("#fotoCarrinho").html("<img class='img_carrinho' src='IMG/carrinho.png' alt='foto do carrinho' width = '5%'>");
        $("#Carrinho").html("<a class='link_carrinho'href='carrinho.html'>Meu carrinho!</a>");
       
        $("#RelatarErro").html("<a class='link_relatarErro'href='um pouco sobre nós.html'>Relatar Erro!</a>");
        $("#fotoRelatar").html("<img class='img_suporte' src='IMG/suporte.png' alt='suporte' width = '5%'>")
        $("#Configuração").html("<img class='img_configuração' src='IMG/cofiguracao.png' alt='configuração' width = '5%'>");
        $("#fotoConfiguracao").html("<a class='link_configuracao'href='configuracao.html'>Configuração!</a>");
    })});
$(document).ready(function(){
    $(".caixaPromoção1").mouseleave(function(){
        $(".caixaPromoção1").html("<p><br>Processador (CPU): AMD Zen 2 customizado com 8 núcleos e 16 threads a até 3,8 GHz.<br>Placa de vídeo (GPU): 52 UCs a até 1,825 GHz (12 TFLOPS)<br>Arquitetura do chip gráfico: RDNA 2 customizada.<br>Interface de memória: 16 GB GDDR6 (256-bit)</p><br>O Xbox Series X é o console de videogame mais poderoso da Microsoft. Lançado em 10 de novembro de 2020 no Brasil, o aparelho faz parte da família Series, que também conta com o Xbox Series S. Com preço de R$ 4.599, a plataforma é voltada para gamers exigentes que buscam rodar os jogos em resoluções de até 4K com imagens fluidas a até 120 quadros por segundo.");
        $(".caixaPromoção1").css("color","white");
        $(".caixaPromoção1").css("background","#00000090");
        $(".preçoPromoção1").css("background","#00000090");
        $(".preçoPromoção1").css("color","white");
        $(".caixaPromoção1").css("height","400px");
        $(".caixaPromoção1").css("width","400px");
        $(".preçoPromoção1").css("width","400px");

    });
    
    $(".caixaPromoção2").mouseleave(function(){
        $(".caixaPromoção2").html("<p><br>Processador (CPU): AMD Zen 2 customizado com 8 núcleos e 16 threads a até 3,5 GHz<br>Placa de vídeo (GPU): 36 UCs a até 2.23 GHz (10.28 TFLOPS)<br>Arquitetura do chip gráfico: RDNA 2 customizada<br>Interface de memória: 16 GB GDDR6 (256-bit)<br>Largura de memória: 448 GB/s<br><br>O Playstation 5 (PS5) é o console da Sony para a nona geração de videogames. Por ser um dos lançamentos mais aguardados de 2020 e um dos consoles mais queridos do mercado.</p>");
        $(".caixaPromoção2").css("color","white");
        $(".caixaPromoção2").css("background","#00000090");
        $(".preçoPromoção2").css("background","#00000090");
        $(".preçoPromoção2").css("color","white");
        $(".caixaPromoção2").css("height","400px");
        $(".caixaPromoção2").css("width","400px");
        $(".preçoPromoção2").css("width","400px");

    });  
    $(".caixaPromoção3").mouseleave(function(){
        $(".caixaPromoção3").html("<p>Estúdio:	DICE</p><p>Gênero: Ação/Tiro</p><p>Plataformas:	PlayStation®4 </p><p>Data de lançamento:	22 de outubro de 2020</p> Entre no maior conflito da humanidade no ar, na terra e no mar com todo o conteúdo de jogo desbloqueado desde o início. Escolha do arsenal completo de armas, veículos e dispositivos. Reviva as batalhas mais acirradas da Segunda Guerra Mundial. Não seja só mais um no campo de batalha com o elenco de Elites e o melhor conteúdo de personalização dos Anos 1 e 2.<p>");
        $(".caixaPromoção3").css("color","white");
        $(".caixaPromoção3").css("background","#00000090");
        $(".preçoPromoção3").css("background","#00000090");
        $(".preçoPromoção3").css("color","white");
        $(".caixaPromoção3").css("height","400px");
        $(".caixaPromoção3").css("width","400px");
        $(".preçoPromoção3").css("width","400px");

    });  
    $(".caixaPromoção4").mouseleave(function(){
        $(".caixaPromoção4").html("<p>Estúdio:	Ubsoft</p><p>Gênero: RPG de ação</p><p>Plataformas:	Xbox One, Xbox Series X e Series S</p><p>Data de lançamento: 10 de novembro de 2020<br>Libere o estilo de luta cruel de um guerreiro viking empunhando com as duas mãos machados, espadas ou até escudos contra inimigos ferozes e implacáveis. Escolha suas táticas para desmembrar adversários em combates corpo a corpo, crivá-los com flechas ou assassiná-los com sua lâmina oculta.</p>");
        $(".caixaPromoção4").css("color","white");
        $(".caixaPromoção4").css("background","#00000090");
        $(".preçoPromoção4").css("background","#00000090");
        $(".preçoPromoção4").css("color","white");
        $(".caixaPromoção4").css("height","400px");
        $(".caixaPromoção4").css("width","400px");
        $(".preçoPromoção4").css("width","400px");

    });    
   
});
