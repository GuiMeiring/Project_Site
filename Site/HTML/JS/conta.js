function validarCriacaoConta(nome, endereco , email, cep){
    
    //validar nome
    console.log(nome);
    const nomeSobrenome = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/;
    // Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres. Aceita acentuação e rejeita números.
    // Faz a validacao do regex no campo indicado
    if((nomeSobrenome.test(nome))){
        //validar endereco
    console.log(endereco);
    if(endereco !=0){
         //validar email
    const valiEmail = /\S+@\S+\.\S+/;
    if((valiEmail.test(email))){
   
         //validar CEP
    
    console.log(cep);
    if(cep >9999999 && cep <=99999999){
       return true;
        
    }else{
        return false;
    }

    }
 }
} 
//Mensagens
console.log(nome);
    // Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres. Aceita acentuação e rejeita números.
    // Faz a validacao do regex no campo indicado
    if(!(nomeSobrenome.test(nome))){
        msgNome.innerHTML="<p>nome inválido</p>";
        console.log("nome inválido");
    }else if(nomeSobrenome.test(nome)){
        localStorage.setItem("NomeConta", nome); 
        msgNome.innerHTML="<p>"+localStorage.getItem('NomeConta')+" válido";
        console.log(localStorage.getItem('NomeConta')+" válido");
    } 
    //validar endereco
    console.log(endereco);
    if(endereco ==0){
        msgEndereco.innerHTML ="<p>Endereco inválido<p>";
        console.log("Endereco inválido");
    }else{
        msgEndereco.innerHTML ="<p>"+endereco+" válido<p>";
        console.log("Endereco válido");
    }
    //validar email
    const valiEmail = /\S+@\S+\.\S+/;
    if(!(valiEmail.test(email))){
        MsgEmail.innerHTML="<p>Email inválido</p>";
        console.log("Email inválido");
    }else{
        MsgEmail.innerHTML="<p>Email válido</p>";
        console.log("Email válido");
    }
    console.log(cep);
    if(cep >9999999 && cep <=99999999){
        msgCep.innerHTML="<p>"+ cep+" válido</p>";
        console.log("CEP válido")
        localStorage.setItem("CEPConta", cep);
        console.log(localStorage.setItem("CEPConta", cep));
    }else{
    msgCep.innerHTML="<p>verifique se  o CEP possui 8 digitos </p>";
    console.log("CEP inválido");
    }
}


function validar(senha , rep_senha){
    console.log(senha);
    console.log(rep_senha);
    const padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    ///^
  //(?=.*\d)              // deve conter ao menos um dígito
  //(?=.*[a-z])           // deve conter ao menos uma letra minúscula
  //(?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
  //(?=.*[$*&@#])         // deve conter ao menos um caractere especial
  //[0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
//$/
    if(!(padraoSenha.test(senha))){
        console.log(" A senha deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula , uma letra minuscula e um caractere especial");
        msgCriarSenha.innerHTML ="<p>A senha deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula , uma letra minuscula e um caractere especial</p>";
       
    }else{
        msgCriarSenha.innerHTML ="<p>Senha aceita</p>";
        console.log("Senha aceita");
    }
    if(senha != rep_senha || senha == null || !(padraoSenha.test(senha))){
        console.log("As senhas não comferem");
        msgComfereSenha.innerHTML ="<p>As senhas não conferem!</p>";
        return false;
            
    }else{
        msgComfereSenha.innerHTML ="<p>Senhas conferem!</p>";
        botaoSenha.innerHTML += "<a href='menu.html'><input id='continuar'type='button' value='Continuar'></a>";
        console.log(senha);
        return true;
    }
    
}

function validarMsgEmail(numeroEnviado){
    const  enviado=/^(?=.*\d)(?=.*[A-Z])[0-9A-Z$*&@#]{8,}$/;
    ///^(?=.*\d)              //deve conter ao menos um dígito
             
    //(?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
          
    //[0-9A-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
  //$/
    console.log(numeroEnviado);
    if(!(enviado.test(numeroEnviado))){
        msgEnviadaEmail.innerHTML="<p>O código deve conter pelo menos uma letra maiúscula e pelo menos oito caracteres<p>";
        console.log("O código deve conter pelo menos uma letra maiúscula e pelo menos oito caracteres");
        return false;
    }else{
        msgEnviadaEmail.innerHTML="<p>Código válido</p>";
        console.log("Código válido")
        BotaoEmail.innerHTML="<a href='criaçãosenha1.html'><input id='continuar'type='button' value='Continuar'></a>";
        return true;
    }

}
function login(senha  , nome){
    console.log(senha);
    console.log(nome);
    console.log(localStorage.getItem('NomeConta'));
    if(nome == localStorage.getItem('NomeConta')){
       msgLoginNome.innerHTML="<p>Nome válido</p>";
       console.log("Nome válido");

    }else{
        msgLoginNome.innerHTML="<p>Nome inválido</p>";
        console.log("Nome inválido");
    }
    const padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    if(padraoSenha.test(senha) && nome== localStorage.getItem('NomeConta')){
        msgLoginSenha.innerHTML="<p> Senha válida</p>";
        console.log("Senha válida");
        BotaoLogin.innerHTML="<a href='menu.html'><input type='button' value='logar' id='continuar'></a>";
        return true;
    }else{
        msgLoginSenha.innerHTML="<p>  A senha deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula , uma letra minuscula e um caractere especial</p>";
        console.log(" A senha deve conter ao menos 8 dos caracteres mencionados, uma letra minúscula , uma letra minuscula e um caractere especial");
        return false;
    }
}

