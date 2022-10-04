$(document).ready(function(){
    $("#calcular").click(function(){
        let cartao = $("#escrevacartao").val();
        let numSeg= $("#escrevasegurancaa").val();
        let cupom = $("#escrevaCupom").val();
        let valor = localStorage.getItem("precoCarrinho1");
        console.log(cartao);
        console.log(numSeg);
        console.log(cupom);
        console.log(valor);
        if(cartao!=0 && numSeg!=0 && valor !=0){
            if(localStorage.getItem("CEPConta")>00000000 && localStorage.getItem("CEPConta")<=22222222){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-(((valor*5)/100)+25));
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+25;
                    console.log(valor);
                    console.log("oi")
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else{
                    valor=valor+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                } 
            }
            else if(localStorage.getItem("CEPConta")>2222222222 && localStorage.getItem("CEPConta")<=44444444){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-((valor*5)/100))+50;
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+50;
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+50;
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+50;
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+50;
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else{
                    valor=valor+50;
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                } 
            }
            else if(localStorage.getItem("CEPConta")>44444444 && localStorage.getItem("CEPConta")<=66666666){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-((valor*5)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else{
                    valor=valor+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                } 
            }
            else if(localStorage.getItem("CEPConta")>66666666 && localStorage.getItem("CEPConta")<=88888888){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-((valor*5)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else{
                    valor=valor+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                } 
            }
            else if(localStorage.getItem("CEPConta")>88888888 && localStorage.getItem("CEPConta")<=99999999){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-(((valor*5)/100)+100));
                    console.log("oi");
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+100;
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                }else{
                    valor=valor+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").html("<span>R$ </span><span id='parcelas'>"+valor+"</span>");
                } 
            }
            
        }

    })
    
    $("#vezes1").click(function(){
        let parcela = $("#parcelas").text();
        let parcelas=parcela/1;
        if(parcelas != 0){
            let parcelas=parcela/1;
            $("#escritaParcela").html("<span>10 parcela de </span><span id='parcelas'>R$ "+parcelas+"</span>")
            $(".buttonConfirmacao").html("<a href='confirmacao.html'><button type='button' class='btn btn-danger'>Confirmar Compra! </button></a>")
        }

    })
    $("#vezes2").click(function(){
        let parcela = $("#parcelas").text();
        if(parcelas != 0){
            let parcelas=parcela/2;
            $("#escritaParcela").html("<span>10 parcela de </span><span id='parcelas'>R$ "+parcelas+"</span>")
            $(".buttonConfirmacao").html("<a href='confirmacao.html'><button type='button' class='btn btn-danger'>Confirmar Compra! </button></a>")
        }

    })
    $("#vezes3").click(function(){
        let parcela = $("#parcelas").text();
        let parcelas=parcela/2;
       if(parcelas != 0){
            let parcelas=parcela/3;
            $("#escritaParcela").html("<span>10 parcela de </span><span id='parcelas'>R$ "+parcelas+"</span>")
            $(".buttonConfirmacao").html("<a href='confirmacao.html'><button type='button' class='btn btn-danger'>Confirmar Compra! </button></a>")
        }

    })
    $("#vezes5").click(function(){
        let parcela = $("#parcelas").text();
        if(parcelas != 0){
            let parcelas=parcela/5;
            $("#escritaParcela").html("<span>10 parcela de </span><span id='parcelas'>R$ "+parcelas+"</span>")
            $(".buttonConfirmacao").html("<a href='confirmacao.html'><button type='button' class='btn btn-danger'>Confirmar Compra! </button></a>")
        }

    })
    $("#vezes10").click(function(){
        let parcela = $("#parcelas").text();
        if(parcelas != 0){
            let parcelas=parcela/10;
            $("#escritaParcela").html("<span>10 parcela de </span><span id='parcelas'>R$ "+parcelas+"</span>")
            $(".buttonConfirmacao").html("<a href='confirmacao.html'><button type='button' class='btn btn-danger'>Confirmar Compra! </button></a>")
        }
       

    })
    $("#vezes12").click(function(){
        let parcelas = $("#parcelas").text();
        if(parcelas != 0){
            parcelas=parcelas/12;
            $("#escritaParcela").html("<span>12 parcela de </span><span id='parcelas'>R$ "+parcelas+"</span>")
            $(".buttonConfirmacao").html("<a href='confirmacao.html'><button type='button' class='btn btn-danger '>Confirmar Compra! </button></a>")
            
        }
        
        

    })


});

