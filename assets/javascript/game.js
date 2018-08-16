

 var img = ["db1.jpg", "db2.jpg", "db3.jpg", "db4.jpg"]
 function imgRandom(imgArr) {
    return imgArr[Math.floor(Math.random() * imgArr.length)];
}
    imgRandom(img)

 function play() 
 {
    alert("Hello! I am an alert box!!");
    document.querySelector(".hidden").style.display = "initial";
    document.querySelector(".hidden1").style.display = "initial";
    document.querySelector(".hidden3").innerHTML = "<h1>You will get a random character</h1>"
    document.querySelector("#footer").style.display = "initial";
    document.querySelector(".img-thumbnail").src="./assets/images/"+imgRandom(img);
 }

 