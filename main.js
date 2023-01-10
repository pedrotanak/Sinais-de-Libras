sinal1="";
sinal2="";
Webcam.set({
    width:350,
    height:200,
    imageFormat:"png",
    pngQuality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function Tirar(){
    Webcam.snap(function(endereço){
        document.getElementById("foto").innerHTML="<img id='imagem' src='"+endereço+"'> ";
    })
}
classificador=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IfTMX-T19/",carregou);
function carregou(){
    console.log("Modelo Carregado")
}
function falar() {
    sintetizador = window.speechSynthesis;
    fala1 = "A primeira emoção é " + emoção1;
    fala2 = "A segunda emoção é " + emoção2;
    var voz = new SpeechSynthesisUtterance(fala1 + fala2);
    sintetizador.speak(voz);
}
function vereficar() {
    imagem = document.getElementById("imagem");
    classificador.classify(imagem, resposta);
}
function resposta(erro, resultados) {
    if (erro) {
        console.error(erro);
    } else {
        document.getElementById("nomeEmoção").innerHTML = resultados[0].label;
        document.getElementById("nomeEmoção2").innerHTML = resultados[1].label;
        emoção1 = resultados[0].label;
        emoção2 = resultados[1].label;
        falar()
        if (emoção1 == "Feliz") {
            document.getElementById("emogiEmoção").innerHTML = "&#128522;";
        }
        if (emoção1 == "Triste") {
            document.getElementById("emogiEmoção").innerHTML = "&#128532;";
        }
        if (emoção1 == "Irritado") {
            document.getElementById("emogiEmoção").innerHTML = "&#128548;";
        }
        if (emoção2 == "Feliz") {
            document.getElementById("emogiEmoção2").innerHTML = "&#128522;";
        }
        if (emoção2 == "Triste") {
            document.getElementById("emogiEmoção2").innerHTML = "&#128532;";
        }
        if (emoção2 == "Irritado") {
            document.getElementById("emogiEmoção2").innerHTML = "&#128548;";
        }
    }
}