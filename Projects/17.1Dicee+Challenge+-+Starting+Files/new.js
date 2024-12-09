let img1 = document.getElementsByClassName("img1")
let img2 = document.getElementsByClassName("img2")
let random1=Math.ceil(Math.random()*6);
let random2=Math.ceil(Math.random()*6);
img1[0].src = `./images/dice${random1}.png`
img2[0].src = `./images/dice${random2}.png`