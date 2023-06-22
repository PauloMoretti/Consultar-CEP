const cep = document.querySelector("#cep")

const logradouro = document.querySelector("#logradouro");
const bairro = document.querySelector("#bairro");
const localidade = document.querySelector("#localidade");
const uf = document.querySelector("#uf");
const ddd = document.querySelector("#ddd");
const complemento = document.querySelector("#complemento");

async function consultaEndereco(cep) {
    var msgErro = document.querySelector("#erro")
    msgErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPformatado = await consultaCEP.json();

        if (consultaCEPformatado.erro){
            throw Error("CEP inválido!")
        };
        
        logradouro.value = consultaCEPformatado.logradouro;
        bairro.value = consultaCEPformatado.bairro;
        localidade.value = consultaCEPformatado.localidade;
        uf.value = consultaCEPformatado.uf;
        ddd.value = consultaCEPformatado.ddd;
        complemento.value = consultaCEPformatado.complemento;

        console.log(consultaCEPformatado);
        return consultaCEPformatado;
    }
    catch(erro){
        console.log(erro)
        msgErro.innerHTML = "CEP incorreto! Tente novamente."
    }
}

cep.addEventListener("blur", () => consultaEndereco(cep.value))



//CÓDIGO MELHOR E MAIS LIMPO
/*const showData = (result) => {
    for (const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")

    const options = {
        method: 'GET',
        node: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => { response.json() 
        .then( data => showData(data))
    })
    .catch( e => console.log('Deu erro: ' + e,message))
}) 
*/

