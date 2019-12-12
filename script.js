function show(){
    var menuIcon = document.getElementById("menu");
    if (menuIcon.style.display === "block"){
        menuIcon.style.display = "none";
    }else{
        menuIcon.style.display = "block";
    }
}

function playAudio(){
    var audio = document.getElementById("audioID");
    audio.play();
}