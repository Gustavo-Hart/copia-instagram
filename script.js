// fução: troca o banner a cada 30s
//document.addEventListener("DOMContentLoaded", function() {  
    let currentImageIndex = 0;  
    const imagem2 = "img/banner2.png";
    const imagem3 = "img/banner3.png"; 

    function switchImage() {  
        if(currentImageIndex === 0) {
            document.getElementById('banner').src = imagem2;
            currentImageIndex = 1;
        }
        else{
            document.getElementById('banner').src = imagem3;
            currentImageIndex = 0
        }
        
    }  

    setInterval(switchImage, 30000);  
