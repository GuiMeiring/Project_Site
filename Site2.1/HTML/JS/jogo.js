function verificarCupom(cupom , posicaoCupom){
    localStorage.setItem("cupom"+posicaoCupom ,cupom);
    console.log(cupom);
    let mostrarDesconto =document.getElementById('mostrarDesconto');
    if(parseFloat(localStorage.getItem('cupom'+1))>999999999 && parseFloat(localStorage.getItem('cupom'+1))<=2222222222){
        mostrarDesconto.innerHTML ="<br><p>Cupom encontrado.Desconto de 8%=R$"+((parseFloat(localStorage.getItem('preco5'))*8)/100)+"<\p>";
        console.log(mostrarDesconto);
    
    
    }
    else if(parseFloat(localStorage.getItem('cupom'+1))>2222222222 && parseFloat(localStorage.getItem('cupom'+1))<=4444444444){
        mostrarDesconto.innerHTML ="<br><p>Cupom encontrado.Desconto de 15%=R$"+((parseFloat(localStorage.getItem('preco5'))*15)/100)+"<\p>";
        console.log(mostrarDesconto);
    
    
    }
    else if(parseFloat(localStorage.getItem('cupom'+1))>4444444444 && parseFloat(localStorage.getItem('cupom'+1))<=6666666666){
        mostrarDesconto.innerHTML ="<br><p>Cupom encontrado.Desconto de 27%=R$"+((parseFloat(localStorage.getItem('preco5'))*27)/100)+"<\p>";
        console.log(mostrarDesconto);
    
    
    }
    else if(parseFloat(localStorage.getItem('cupom'+1))>6666666666 && parseFloat(localStorage.getItem('cupom'+1))<=8888888888){
        mostrarDesconto.innerHTML ="<br><p>Cupom encontrado.Desconto de 36%=R$"+((parseFloat(localStorage.getItem('preco5'))*36)/100)+"<\p>";
        console.log(mostrarDesconto);
    
    
    }
    else if(parseFloat(localStorage.getItem('cupom'+1))>8888888888 && parseFloat(localStorage.getItem('cupom'+1))<=9999999999){
        mostrarDesconto.innerHTML ="<br><p>Cupom encontrado.Desconto de 45%=R$"+((parseFloat(localStorage.getItem('preco5'))*45)/100)+"<\p>";
        console.log(mostrarDesconto);
    
    
    }
    else{
        mostrarDesconto.innerHTML ="<br><p>Cupom não encontrado!</p>";
        console.log(mostrarDesconto);
        
    }
    
}
function verificarCEP(frete , posicaoFrete){
    localStorage.setItem("Precofrete"+posicaoFrete , frete);
    console.log(frete);
    let precoFrete=0;
    let mostrarFrete=document.getElementById('mostrarFrete');
        if(parseFloat(localStorage.getItem('Precofrete'+1))>9999999 && parseFloat(localStorage.getItem('Precofrete'+1))<=22222222){
            precoFrete=16;
            console.log(posicaoFrete);
            mostrarFrete.innerHTML="<br><p>Total do frete:R$ "+precoFrete+"</p>";
            console.log(mostrarFrete);
        }
        else if(parseFloat(localStorage.getItem('Precofrete'+1))>22222222 && parseFloat(localStorage.getItem('Precofrete'+1))<=44444444){
            precoFrete=20;
            console.log(posicaoFrete);
            mostrarFrete.innerHTML="<br><p>Total do frete:R$ "+precoFrete+"</p>";
            console.log(mostrarFrete);
        }
        else if(parseFloat(localStorage.getItem('Precofrete'+1))>44444444 && parseFloat(localStorage.getItem('Precofrete'+1))<=66666666){
            precoFrete=28;
            console.log(posicaoFrete);
            mostrarFrete.innerHTML="<br><p>Total do frete:R$ "+precoFrete+"</p>";
            console.log(mostrarFrete);
        }
        else if(parseFloat(localStorage.getItem('Precofrete'+1))>66666666 && parseFloat(localStorage.getItem('Precofrete'+1))<=88888888){
            precoFrete=32;
            console.log(posicaoFrete);
            mostrarFrete.innerHTML="<br><p>Total do frete:R$ "+precoFrete+"</p>";
            console.log(mostrarFrete);
        }
        else if(parseFloat(localStorage.getItem('Precofrete'+1))>88888888 && parseFloat(localStorage.getItem('Precofrete'+1))<=99999999){
             precoFrete=48;
            console.log(posicaoFrete);
            mostrarFrete.innerHTML="<br><p>Total do frete:R$ "+precoFrete+"</p>";
            console.log(mostrarFrete);
        }else{
            mostrarFrete.innerHTML = "<br><p>Não foi possível encontrar o CEP</p>";
            console.log(mostrarFrete);
        }
}