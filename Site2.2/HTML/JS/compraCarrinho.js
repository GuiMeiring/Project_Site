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
                    valor =valor-((valor*8)/100);
                     console.log(valor);
                     $("#EscritaTotalEntrega").text(valor);
                }else if(cupom >2222222222 && cupom <=4444444444){
                    valor =valor-((valor*15)/100);
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }
                else if(cupom >4444444444 && cupom <=6666666666){
                    valor =valor-((valor*27)/100);
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }
                else if(cupom >6666666666 && cupom <=8888888888){
                    valor =valor-((valor*36)/100);
                    console.log(valor);
                    $("#EscritaTotalEntrega").text(valor);
                }
                else if(cupom >8888888888 && cupom <=9999999999){
                    valor =valor-((valor*45)/100);
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

    })
    

});
function adicionarPreco(cartao , numSeg , cupom , valor){
    if(cartao!=0 && numSeg!=0){
        if(valor!=0){
             if(cupom >999999999 && cupom <=2222222222){
            let valorTotal=valor-((valor*8)/100);
                 console.log(valor);
                 console.log(valorTotal);

                 
             }
             else if(localStorage.getItem('cupom1')>2222222222 && localStorage.getItem('cupom1')<=4444444444){
                TotalPrecoCarrinho=(parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*15)/100));
                console.log(TotalPrecoCarrinho);
                EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
             }
             else if(localStorage.getItem('cupom1')>4444444444 && localStorage.getItem('cupom1')<=6666666666){
                TotalPrecoCarrinho=(parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*27)/100));
                console.log(TotalPrecoCarrinho);
                EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
             }
             else if(localStorage.getItem('cupom1')>6666666666 && localStorage.getItem('cupom1')<=8888888888){
                TotalPrecoCarrinho=(parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*36)/100));
                console.log(TotalPrecoCarrinho);
                EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
             }
             else if(localStorage.getItem('cupom1')>8888888888 && localStorage.getItem('cupom1')<=9999999999){
                TotalPrecoCarrinho=(parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*45)/100));
                console.log(TotalPrecoCarrinho);
                EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
             }else{
        TotalPrecoCarrinho=parseFloat(localStorage.getItem('precoCarrinho1'));
        console.log(TotalPrecoCarrinho);
        EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
    }
}
}
}


function entregaCasa(numCartao , numSeguranca , cupom , posicao){
    localStorage.setItem("Cartao"+posicao, numCartao); 
    localStorage.setItem("SegurancaCartao"+posicao, numSeguranca); 
    localStorage.setItem("cupom"+posicao, cupom);
    console.log(numCartao);
    console.log(numSeguranca);
    console.log(cupom);
    let TotalPrecoCarrinho=0;
    console.log(TotalPrecoCarrinho);
    let EscritaTotalEntrega =document.getElementById('EscritaTotalEntrega');
    adicionarPrecoEntrega(TotalPrecoCarrinho ,EscritaTotalEntrega);
}
function adicionarPrecoEntrega(TotalPrecoCarrinho , EscritaTotalEntrega){
    let botaoEntrega =document.getElementById('casa');
    botaoEntrega.style.background="#2D9BF0";
    botaoEntrega.style.borderRadius="12px";
    if(localStorage.getItem('Cartao1')!=0 && localStorage.getItem('SegurancaCartao1')!=0){
    if(EscritaTotalEntrega!=0){
        let preçoFrete=0;
        if(localStorage.getItem("CEPConta")>00000000 && localStorage.getItem("CEPConta")<=22222222){
            preçoFrete=16;
        } else if(localStorage.getItem("CEPConta")>22222222 && localStorage.getItem("CEPConta")<=44444444){
            preçoFrete=20;
        }else if(localStorage.getItem("CEPConta")>44444444 && localStorage.getItem("CEPConta")<=66666666){
        preçoFrete=28;
        }
        else if(localStorage.getItem("CEPConta")>66666666 && localStorage.getItem("CEPConta")<=88888888){
            preçoFrete=32;
        }else if(localStorage.getItem("CEPConta")>88888888 && localStorage.getItem("CEPConta")<=99999999){
            preçoFrete=48;
        }
        
        if(localStorage.getItem('cupom2')>999999999 && localStorage.getItem('cupom2')<=2222222222){
            TotalPrecoCarrinho=((parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*8)/100))+ preçoFrete)
            console.log(TotalPrecoCarrinho);
            EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
        }
        else if(localStorage.getItem('cupom2')>2222222222 && localStorage.getItem('cupom2')<=4444444444){
            TotalPrecoCarrinho=((parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*15)/100))+ preçoFrete)
           console.log(TotalPrecoCarrinho);
           EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
        }
        else if(localStorage.getItem('cupom2')>4444444444 && localStorage.getItem('cupom2')<=6666666666){
            TotalPrecoCarrinho=((parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*27)/100))+ preçoFrete)
           console.log(TotalPrecoCarrinho);
           EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
        }
        else if(localStorage.getItem('cupom2')>6666666666 && localStorage.getItem('cupom2')<=8888888888){
            TotalPrecoCarrinho=((parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*36)/100))+ preçoFrete)
           console.log(TotalPrecoCarrinho);
           EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
        }
        else if(localStorage.getItem('cupom2')>8888888888 && localStorage.getItem('cupom2')<=9999999999){
           TotalPrecoCarrinho=((parseFloat(localStorage.getItem('precoCarrinho1')-(parseFloat(localStorage.getItem('precoCarrinho1'))*45)/100))+ preçoFrete);
           console.log(TotalPrecoCarrinho);
           EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";
        }else{
        TotalPrecoCarrinho=parseFloat(localStorage.getItem('precoCarrinho1'))+preçoFrete;
        console.log(TotalPrecoCarrinho);
        EscritaTotalEntrega.innerHTML="<h1 id='frete'>R$</h1><h1 id='precototalComFrete'>"+TotalPrecoCarrinho+"</h1>";

    }
}
}
}
function vezes1(precoComFrete, posicaoFrete){
    localStorage.setItem("precoComFrete"+posicaoFrete, precoComFrete);
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