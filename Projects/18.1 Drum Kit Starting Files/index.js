// let w = document.getElementsByClassName("w")[0]
// w.addEventListener("click",(e)=>{//e - event
//     let audio = new Audio('./sounds/tom-1.mp3')
//     audio.play()
//     alert("w");
// })
// w.addEventListener("onkeydown",(e)=>{//e - event
//     console.log(e.key);
//     console.log(e.keydown);
    
    
//     if (e.key=='w'){

//         alert("w");
//     }
 
// })
const drum = document.querySelectorAll(".drum");
for(let i = 0;i<drum.length;i++){
    drum[i].addEventListener("click",function(){
        console.log();
        switch (this.innerHTML) {
            case 'w':
                new Audio('./sounds/tom-1.mp3').play()
                break;
            case 'a':
                new Audio('./sounds/tom-2.mp3').play()
                break;
            case 's':
                new Audio('./sounds/tom-3.mp3').play()
                break;
            case 'd':
                new Audio('./sounds/tom-4.mp3').play()
            case 'j':
                new Audio('./sounds/snare.mp3').play()
                break;
            case 'k':
                new Audio('./sounds/crash.mp3').play()
            case 'l':
                new Audio('./sounds/kick-bass.mp3').play()
                break;

            default:
                break;
        }
    })
    
}