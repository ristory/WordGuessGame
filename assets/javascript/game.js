
 var randomWorld = ["SonGoku", "Bulma", "Yamcha", "Kuririn", "Chaozu", "Piccolo", "SonGohan", "Vegeta", "Trunks", 	"SonGoten"]
 var img = ["db1.jpg", "db2.jpg", "db3.jpg", "db4.jpg"]
 var unique = [];
 var randimg = imgRandom(img);
 var randw = worldRandom(randomWorld);
 let numberofGuess = 10;

 

 function resetfunc()
 
{
    
}
 function worldRandom(worldArr) {
    return worldArr[Math.floor(Math.random() * randomWorld.length)];
}

 function imgRandom(imgArr) {
    return imgArr[Math.floor(Math.random() * imgArr.length)];
}

function guess()
{
    numberofGuess--;
    var x = document.querySelector("#guessWorld");
    
    if(!/[^a-z]/i.test(x.value))
    {
        x.value = (x.value).toLowerCase();      
    }
    else{
        
        x.value = "";
    }

    $("guess").append("<div> ${numberofGuess}</div>");
    
}


 function play() 
 {
     numberofGuess--;

    document.querySelector(".hidden").style.display = "initial";
    document.querySelector(".hidden1").style.display = "initial";
    document.querySelector(".hidden3").innerHTML = "<h1>You will get a random character</h1>"
    document.querySelector("#footer").style.display = "initial";
    document.querySelector(".img-thumbnail").src="./assets/images/"+randimg;


    for (let i = 0; i < randw.length; i++) {   
        $("#space").append("<div class='letters' id='letters' + ${i}>_</div>");
      }   
 }

 function reset()
 {
    location.href = "https://ristory.github.io/WordGuessGame/";
 }

 