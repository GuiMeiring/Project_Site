$(document).ready(function(){
     $("#loja").click(function(){
        let cartao = $("#escrevacartao").val();
        let numSeg= $("#escrevasegurancaa").val();
        let cupom = $("#escrevaCupom").val();
        let valor = localStorage.getItem("precoCarrinho1");
        console.log(cartao);
        console.log(numSeg);
        console.log(cupom);
        console.log(cupom);
        if(cartao!=0 && numSeg!=0){
            if(valor!=0){
                 if(cupom >999999999 && cupom <=2222222222){
                    valor =valor-((valor*5)/100);
                     console.log(valor);
                     $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =valor-((valor*10)/100);
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }
                else if(cupom >4444444444 && cupom <=6666666666){
                    valor =valor-((valor*15)/100);
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }
                else if(cupom >6666666666 && cupom <=8888888888){
                    valor =valor-((valor*18)/100);
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }
                else if(cupom >8888888888 && cupom <=9999999999){
                    valor =valor-((valor*20)/100);
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else{
          console.log(valor);
          $("#EscritaTotalEntrega").text(valor);
       }
                }
            }


    })
    $("#casa").click(function(){
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
                    valor =(valor-((valor*5)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else{
                    valor=valor+25;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                } 
            }
            if(localStorage.getItem("CEPConta")>2222222222 && localStorage.getItem("CEPConta")<=44444444){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-((valor*5)/100))+50;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+50;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+50;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+50;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+50;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else{
                    valor=valor+50;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                } 
            }
            if(localStorage.getItem("CEPConta")>44444444 && localStorage.getItem("CEPConta")<=66666666){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-((valor*5)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else{
                    valor=valor+75;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                } 
            }
            if(localStorage.getItem("CEPConta")>66666666 && localStorage.getItem("CEPConta")<=88888888){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-((valor*5)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else{
                    valor=valor+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                } 
            }
            if(localStorage.getItem("CEPConta")>88888888 && localStorage.getItem("CEPConta")<=99999999){
                if(cupom >999999999 && cupom <=2222222222){
                    valor =(valor-((valor*5)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =(valor-((valor*10)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >4444444444 && cupom <=6666666666){
                    valor =(valor-((valor*15)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >6666666666 && cupom <=8888888888){
                    valor =(valor-((valor*18)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >8888888888 && cupom <=9999999999){
                    valor =(valor-((valor*20)/100))+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }else{
                    valor=valor+100;
                    console.log(valor);
                    $("#EscritaTotalEntrega").value(valor);
                } 
            }
            
        }

    })
    $("#vezes1").click(function(){
        let parcela = $("#EscritaTotalEntrega").val();
        let cupom = $("#EscritaTotalEntrega").val();
        console.log(cupom);
        console.log("1x");
         parcela = parcela/1;
        $("#escritaParcela").html("<span>1 parcela de </span><span id='parcelas'>R$ "+cupom+"</span>")

    })
    

});

function vezes1(precoComFrete, posicaoFrete){
    
    let parcela=0;
    console.log(precoComFrete);
    parcela=parseFloat(localStorage.getItem('precoComFrete'+1))/1;
    console.log(parcela);
    let escritaParcela=document.getElementById('escritaParcela');
    escritaParcela.innerHTML="<h1 id='escrevaParcela'>1 parcela de: R$"+parcela+"</h1>"+"<a href='comprovante.html'><input type='button' id='comprar' value='comprar'></a>";
}
function vezes2(precoComFrete, posicaoFrete){
    localStorage.setItem("precoComFrete"+posicaoFrete, precoComFrete);
    let parcela=0;
    console.log(precoComFrete);
    parcela=parseFloat(localStorage.getItem('precoComFrete2')/2);
    console.log(parcela);
    let escritaParcela2=document.getElementById('escritaParcela');
    escritaParcela2.innerHTML="<h1 id='escrevaParcela'>2 parcela de: R$"+parcela+"</h1>"+"<a href='comprovante.html'><input type='button' id='comprar' value='comprar'></a>";
}
function vezes5(precoComFrete, posicaoFrete){
    localStorage.setItem("precoComFrete"+posicaoFrete, precoComFrete);
    let parcela=0;
    console.log(precoComFrete);
    parcela=parseFloat(localStorage.getItem('precoComFrete'+3))/5;
    console.log(parcela);
    let escritaParcela3=document.getElementById('escritaParcela');
    escritaParcela3.innerHTML="<h1 id='escrevaParcela'>5 parcela de: R$"+parcela+"</h1>"+"<a href='comprovante.html'><input type='button' id='comprar' value='comprar'></a>";
}
function vezes10(precoComFrete, posicaoFrete){
    localStorage.setItem("precoComFrete"+posicaoFrete, precoComFrete);
    let parcela=0;
    console.log(precoComFrete);
    parcela=parseFloat(localStorage.getItem('precoComFrete'+4))/10;
    console.log(parcela);
    let escritaParcela4=document.getElementById('escritaParcela');
    escritaParcela4.innerHTML="<h1 id='escrevaParcela'>10 parcela de: R$"+parcela+"</h1>"+"<a href='comprovante.html'><input type='button' id='comprar' value='comprar'></a>";
}
function vezes12(precoComFrete, posicaoFrete){
    localStorage.setItem("precoComFrete"+posicaoFrete, precoComFrete);
    let parcela=0;
    console.log(precoComFrete);
    parcela=parseFloat(localStorage.getItem('precoComFrete'+5))/12;
    console.log(parcela);
    let escritaParcela5=document.getElementById('escritaParcela');
    escritaParcela5.innerHTML="<h1 id='escrevaParcela'>12 parcela de: R$"+parcela+"</h1>"+"<a href='comprovante.html'><input type='button' id='comprar' value='comprar'></a>";
}
function SegurançaCartao(){
    localStorage.removeItem('Cartao'+1);
    localStorage.removeItem('Cartao'+2);
    localStorage.removeItem('SegurancaCartao'+1);
    localStorage.removeItem('SegurancaCartao'+2);
    localStorage.removeItem('cupom'+1);
    localStorage.removeItem('cupom'+2);
}