const resultado = document.querySelector("#resultado")
const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")



//Função da calculadora de IMC
function calcIMC() {
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');

    if (altura.value !== '' && peso.value !== '') {
        const alturaEmMetros = parseFloat(altura.value);
        const pesoEmKg = parseFloat(peso.value);

        if (alturaEmMetros <= 0 || pesoEmKg <= 0) {
            resultado.innerHTML = 'Valores invalidos.';
            return;
        }

        const imc = (pesoEmKg / (alturaEmMetros ** 2)).toFixed(2);
        let classification = '';

        if (imc < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imc < 25) {
            classification = 'Peso normal';
        } else if (imc < 30) {
            classification = 'Acima do peso';
        } else if (imc < 40) {
            classification = 'Obesidade 1';
        } else if (imc < 50) {
            classification = 'Obesidade 2';
        } else {
            classification = 'Obesidade grave';
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`;
    } else {
        resultado.innerHTML = 'Preencha todos os campos.';
    }
}


//Função do botão de voltar para o topo
window.onscroll = function() {
    let btn = document.getElementById("btnTopo");
        if (document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
        } else {
        btn.style.display = "none";
  }
};

document.getElementById("btnTopo").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const botao = document.getElementById("btnEscuro");

botao.addEventListener("click", () => document.body.classList.toggle("escuro"));