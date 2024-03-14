const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")
for(let i=0;i <botoes.length;i++){
     botoes[i].onclick = function() {

for(let j=0;j<botoes.length;j++) { 
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo")
}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo")
}
}

const contadores = document.querySelector(".contador");
const tempoObjtivo1 = new Date("2024-10-05t00:00:00");
const tempoObjtivo2 = new Date("2024-12-05t00:00:00");
const tempoObjtivo3 = new Date("2024-12-30t00:00:00");
const tempoObjtivo4 = new Date("2024-02-01t00:00:00");

const tempos = [tempoObjtivo1, tempoObjtivo2, tempoObjtivo3, tempoObjtivo4]

contadores[0].textcontent =calculatempo(tempos[0]);

for(let i=0; i<contadores)

function calculatempo(tempoObjtivo) {
 let tempoAtual = new Date();
 let tempoFinal = tempoObjtivo - tempoAtual;
 let segundos = Math.floor(tempoFinal/1000);
 let minutos = math.floor(segundos/60);
 let horas = math.floor(minutos/60);
 let dias = math.floor(horas/24);
}