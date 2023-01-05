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