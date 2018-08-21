
 var randomWorld = ["SonGoku", "Bulma", "Yamcha", "Kuririn", "Chaozu", "Piccolo", "SonGohan", "Vegeta", "Trunks", 	"SonGoten"]
 var activeWorld = []
 var space = []
 var peopleguess = []
 var img = ["db1.jpg", "db2.jpg", "db3.jpg", "db4.jpg"]
 var unique = [];
 var randimg = imgRandom(img);
 var randw = worldRandom(randomWorld);
 let numberofGuess = 11;

 

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
    document.querySelector("#guess").innerHTML = numberofGuess.toString();
    if(numberofGuess === 0)
    {
        reset();
    }
    var x = document.querySelector("#guessWorld");
    
    if(!/[^a-z]/i.test(x.value))
    {
        x.value = (x.value).toLowerCase(); 
        peopleguess.push(x.value)
        x.value = "";
        console.log(peopleguess)    
        for (let i = 1; i < peopleguess.length +1 ; i++) 
        {
            activeWorld.forEach(function (element)
            {
                if(peopleguess[i - 1] === element)
                {
                    document.querySelector("#space" + i).innerHTML = peopleguess[i]
                }
            })
            
        }
    }
    else{
        
        x.value = "";
    }

    for(i = 0 ; i<activeWorld.length; i++)
    {
        if(activeWorld[i] === peopleguess[-1])
        {
            document.querySelector("#space")
        }
    }


    
    
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
        space.push("_");
        
        activeWorld.push(randw.toLowerCase().slice(i,i +1))
      }     
    console.log(randw)
    console.log(space.slice(0, space.length));
    for(i = 1 ; i<space.length + 1; i++)
    {
        document.querySelector("#space" + i).innerHTML = "<div id = space" +    i  + ">_</div>"
    }
    console.log(activeWorld) 
 }

 function reset()
 {
    location.href = "https://ristory.github.io/WordGuessGame/";
 }

 