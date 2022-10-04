
$(document).ready(function(){
//----------------------------------------------------------------------LOGIN
      $("#validar").click(function(){
        let nomeLogin = $("#Nome").val(); //valor do input nome
        let nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/;
        console.log(nomeLogin);
        if( nomeSobrenome.test(nomeLogin)){
            $(".imgConta1").html("<img id='verificado' src='IMG/contaVerificada.png' alt='conta verificada, nome encontrado'>");
            $("#TrueNome").text("Nome válido");
            $("#TrueNome").css("color","#79df91");
            console.log("Nome válido");
     
         }else{
            $(".imgConta1").html("<img id='verificado' src='IMG/Erro.png' alt='Nome não encontrada>");
            $("#FalseNome").text("Nome inválido");
            $("#FalseNome").css("color","#8b0000");
             console.log("Nome inválido");
         }
         let senhaLogin= $("#Senha").val(); //valor do input senha
         let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
         console.log(senhaLogin);
         if(padraoSenha.test(senhaLogin)){
            $("#TrueSenha").prepend("<p>Senha válido</p>");
            $(".imgConta").html("<img id='verificadoSenha' src='IMG/contaVerificada.png' alt='conta verificada, senha encontrada'>");
            $("#TrueSenha").css("color","#74df7b");
            console.log("Senha válida");
         }else{
            $(".imgConta").html("<img id='verificadoSenha' src='IMG/Erro.png' alt='senha não encontrada'>");
            $("#FalseSenha").text(" A senha deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula , uma letra minuscula e um caractere especial");
            $("#FalseSenha").css("color","#8b0000");
            console.log(" A senha deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula , uma letra minuscula e um caractere especial");
         }
    });
//-------------------------------------------------------------Validar Email
    $("#validarEmail").click(function(){
        let email = $("#escrevanumero").val();
        console.log(email);
        let  enviado=/^(?=.*\d)(?=.*[A-Z])[0-9A-Z$*&@#]{8,}$/;
    ///^(?=.*\d)              //deve conter ao menos um dígito
             
    //(?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
          
    //[0-9A-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
  //$/
  console.log(enviado);
  if(!(enviado.test(email))){
      $(".imgConta").html("<img id='verificadoEmail' src='IMG/Erro.png' alt='Email inválido'>");
      $("#FalseEmail").text("O código deve conter pelo menos uma letra maiúscula e pelo menos oito caracteres");
      $("#FalseEmail").css("color","#8b0000");
      console.log("O código deve conter pelo menos uma letra maiúscula e pelo menos oito caracteres");
      return false;
  }else{
      $(".imgConta").html("<img id='verificadoEmail2' src='IMG/contaVerificada.png' alt='Email válido'>");
      $("#TrueEmail").text("Código válido");
      $("#TrueEmail").css("color","#74df7b");
      console.log("Código válido");
      return true;
      
  }

    });
    $("#validarCriacao").click(function(){
        var nome =$("#escrevanome").val();
        let email=$("#escrevaemail3").val();
        let  cpf=$("#escrevaCPF").val();
        
        //validar nome
         console.log(nome);
         console.log(email);
         let nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/;
         // Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres. Aceita acentuação e rejeita números.
        // Faz a validacao do regex no campo indicado
         let valiEmail= /\S+@\S+\.\S+/;
         //validar
//Mensagens
    // Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres. Aceita acentuação e rejeita números.
    // Faz a validacao do regex no campo indicado
    if(!(nomeSobrenome.test(nome))){
        $(".imgContaCriacao1").html("<img id='verificadoNomeCriacao' src='IMG/Erro.png' alt='Nome inválido'>");
        $("#FalseNomeCriacao").text("Nome inválido");
        $("#FalseNomeCriacao").css("color","#8b0000");
        console.log("Nome inválido");
    }else if(nomeSobrenome.test(nome)){
        $(".imgContaCriacao1").html("<img id='verificadoNomeCriacao' src='IMG/contaVerificada.png' alt='Nome válido>");
        $("#TrueNomeCriacao").text("Nome válido");
        $("#TrueNomeCriacao").css("color","#74df7b");
        localStorage.setItem("Usuario",nome);
        console.log("Nome válido");
            //validar email
            if(!(valiEmail.test(email))){
                $(".imgContaCriacao2").html("<img id='verificadoEmailCriacao' src='IMG/Erro.png' alt='Email inválido'>");
                $("#FalseEmailCriacao").text("O código deve conter pelo menos uma letra maiúscula e pelo menos oito caracteres");
                $("#FalseEmailCriacao").css("color","#8b0000");
                 console.log("Email inválido");
            }else if(valiEmail.test(email)){
                 $(".imgContaCriacao2").html("<img id='verificadoEmailCriacao' src='IMG/contaVerificada.png' alt='Email válido'>");
                $("#TrueEmailCriacao").text("Email válido");
                $("#TrueEmailCriacao").css("color","#74df7b");
                console.log("Email válido");
                //funçao
                cpf =cpf.replace(/\.|-/g,"");
                let  soma =0;
                console.log(cpf);
                soma +=cpf[0] * 10; //-----pga o char de tal posicao do cpf
                soma +=cpf[1] * 9;
                soma +=cpf[2] * 8;
                soma +=cpf[3] * 7;
                soma +=cpf[4] * 6;
                soma +=cpf[5] * 5;
                soma +=cpf[6] * 4;
                soma +=cpf[7] * 3;
                soma +=cpf[8] * 2;
                soma =(soma *10)% 11;//modulo 11  vai fazer a divisao por onze e vai dar o resto da divisao
                if(soma ==10 || soma  ==11){
                    soma =0;
                }
                if (soma != cpf[9]){
                    $(".imgContaCriacao3").html("<img id='verificadoCPFCriacao' src='IMG/Erro.png' alt='CPF não valido'>");
                    $("#FalseCPFCriacao").text("CPF inválida");
                    $("#FalseCPFCriacao").css("color","#8b0000");
                    return false;
                }
                console.log("Primeiro digito: "+soma);
                soma=0;
                soma +=cpf[0] * 11; //-----pga o char de tal posicao do cpf
                soma +=cpf[1] * 10;
                soma +=cpf[2] * 9;
                soma +=cpf[3] * 8;
                soma +=cpf[4] * 7;
                soma +=cpf[5] * 6;
                soma +=cpf[6] * 5;
                soma +=cpf[7] * 4;
                soma +=cpf[8] * 3;
                soma +=cpf[9] * 2;
                soma =(soma *10)% 11;//modulo 11  vai fazer a divisao por onze e vai dar o resto da divisao
                if(soma ==10 || soma  ==11){
                    soma =0;
                }
                if (soma != cpf[10]){
                    $(".imgContaCriacao3").html("<img id='verificadoCPFCriacao' src='IMG/Erro.png' alt='CPF não valido'>");
                    $("#FalseCPFCriacao").text("CPF inválido");
                    $("#FalseCPFCriacao").css("color","#8b0000");
                    return false;
                }   
                console.log("Segundo digito: "+ soma);
                if(soma == cpf[10]){
                $(".imgContaCriacao3").html("<img id='verificadoCPFCriacao' src='IMG/contaVerificada.png' alt='CPF valido'>");
                $("#TrueCPFCriacao").text("CPF válido");
                $("#TrueCPFCriacao").css("color","#74df7b");
                }
            }
    }
    }
);
//------------------------------------------------------------------Encontra CEP
$(".botaoCEP").click(
    function(){
        let cep = $("#cep").val(); //recebe o valor do input cep
        if(cep ==null){
            return false;
        }
        //Webservice -> respondem consulta -> ViaCEP
        //Dados do endereço JSON -> formato de dados:
        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", 
        function(dados){ //dados -> rua, bairro, cidade,...
            if(!("erro" in dados)) //se não encontrou erro
            {
                localStorage.setItem("CEPConta",cep);
                $("#rua").val(dados.logradouro);
                $("#bairro").val(dados.bairro);
                $("#cidade").val(dados.localidade);
                $("#estado").val(dados.uf);
                $(".botaoCEP").html("<a id='aCont' href='MetodoDeCompraCarrinho.html'>Continuar</a>")
                $("#aCont").css("text-decoration","none");
                $("#aCont").css("color","white");
            }
            else{
                //Tratar o erro... cep inválido
                return false;
            }
        })
});
$("#BuscarConta").click(
    function(){
        let BuscarNome =$("#BuscarNome").val();
        console.log(BuscarNome);
        let nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/;
        if(nomeSobrenome.test(BuscarNome)){
            $(".imgConta").html("<img id='buscarConta' src='IMG/contaVerificada.png' alt='nome encontrado'>");
            $("#NomeEncontrado").text("Nome de Conta encontrado");
            $("#NomeEncontrado").css("color","#79df91");
            console.log("Nome de Conta encontrado");
             return true;
         }else{
            $(".imgConta").html("<img id='buscarConta' src='IMG/Erro.png' alt='nome não encontrada'>");
            $("#NomeNaoEncontrado").text("Nome de Conta não encontrado");
            $("#NomeNaoEncontrado").css("color","#8b0000");
             console.log("Nome de Conta não encontrado");
             return false;
         }
        
    
    
    });
//-------------------------------------------------------------Validar senha

$("#validarSenha").click(
    function(){
         let senha= $("#escrevasenha").val(); //valor do input senha
         let confirmacao =$("#escrevacaofirmacao").val();
         let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
         console.log(senha);
         console.log(confirmacao);
         if(padraoSenha.test(senha)){
            $("#TrueCriacaoSenha").prepend("<p>Senha válido</p>");
            $(".imgConta1").html("<img id='verificadoSenha' src='IMG/contaVerificada.png' alt='senha aceita '>");
            $("#TrueCriacaoSenha").css("color","#74df7b");
            console.log("Senha válida");
         }else{
            $(".imgConta1").html("<img id='verificadoSenha' src='IMG/Erro.png' alt='senha não aceita '>");
            $("#FalseCriacaoSenha").text(" A senha deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula , uma letra minuscula e um caractere especial");
            $("#FalseCriacaoSenha").css("color","#8b0000");
            console.log("Deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula,uma maiuscula e um caractere especial");
         }
         if(confirmacao == senha && padraoSenha.test(confirmacao)){
            $("#TrueConfirmacaoSenha").text("Confirmação válida! ")
            $(".imgConta2").html("<img id='verificadoSenha' src='IMG/contaVerificada.png' nalt='senha aceita '>");
            $("#TrueConfirmacaoSenha").css("color","#74df7b");
            console.log("Confirnação válida");
         }else{
            $(".imgConta2").html("<img id='verificadoSenha' src='IMG/Erro.png' alt='senha não aceita '>");
            $("#FalseConfirmacaoSenha").text("As senhas são diferentes! ");
            $("#FalseConfirmacaoSenha").css("color","#8b0000");
            console.log("As senhas são diferentes");
         }
         }
);
}
);

