//  formats pages based on device type
document.addEventListener("DOMContentLoaded", function() {
    
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    var aspectRatio = windowWidth / windowHeight;

    var mainContentBox = document.querySelector('.mainContentBox');

    if (aspectRatio > 1.4) {
        mainContentBox.style.width = "23vw";
        console.log("24")
    } else if (aspectRatio >= 1 && aspectRatio <= 1.4) {
        mainContentBox.style.width = "35vw";
    } else {
        mainContentBox.style.width = "80vw";
        mainContentBox.style.height = "80vh";
    }
});


// random flavor text for main page
document.addEventListener("DOMContentLoaded", function() {
    var flavorText = [
        "hacker by day, sleeper by night",
        "monster energy fiend",
        "ctrl + ccccccccccccc, ctrl + v",
        "interplanetary good vibe zone",
        "this is the return, of the space cowboy",
        "see you later, space cowboy",
    ];
    var randIndex = Math.floor(Math.random() * flavorText.length);
    var flavorText = flavorText[randIndex];
    
    var flavorTextElement = document.getElementById("flavorText");
    flavorTextElement.innerHTML = "<i>" + flavorText + "</i>";
});