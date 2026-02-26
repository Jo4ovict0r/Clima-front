
const btn = document.getElementById('btn');
const temp = document.getElementById('temp');
const temp_max = document.getElementById('temp_max');
const temp_min = document.getElementById('temp_min');
const termometria = document.querySelectorAll(".termometria");
const cidade = document.getElementById("cidade");
const status_umidade = document.getElementById('status');
const umidade = document.getElementById('umidade');

async function buscardados(){
    let inp_cidade = document.getElementById("inp_cidade")
    if (inp_cidade.value == ""){
        inp_cidade.value = "São Paulo"

    }
    const cidade_inp = encodeURIComponent(inp_cidade.value)
    const url = `https://clima-backend-ihxf.onrender.com/clima?cidade=${cidade_inp}`;


    try{
        const resposta = await fetch(url);
        const info_temp = await resposta.json();
        const info = info_temp.dados
       

        const cidade_nome = info["name"]
        const stats = info["weather"][0]["description"];
        const temperatura = info["main"]["temp"];
        const temperaturaMax = info["main"]["temp_max"];
        const temperaturaMin = info["main"]["temp_min"];
        const umidade_valor = info["main"]["humidity"];

        cidade.innerText = cidade_nome;
        status_umidade.innerText = stats;
        temp.innerText = temperatura;
        temp_max.innerText = temperaturaMax;
        temp_min.innerText = temperaturaMin;
        termometria.forEach(elemento =>{
            elemento.innerText = "°C";
        });
        umidade.innerText = umidade_valor
        
    }
    catch (error){
        console.log(error);
    }
}
buscardados()

btn.addEventListener("click", async () => await buscardados());