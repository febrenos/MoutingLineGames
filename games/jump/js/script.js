//game over end reset
//add score
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const cloud = document.querySelector(".cloud");

// var m = $(element);
// var bottom = m.offset().offset.left + link.outerHeight();

const jump = () =>{//anonymate func
    mario.classList.add("jump");
    setTimeout(() =>{
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");//+ or Number() convert to int
    console.log(cloudPosition);
    if (pipePosition <= 125 && pipePosition > 33 && marioPosition <= 100){
        pipe.style.animation = "none";//stop animation
        pipe.style.left = `${pipePosition}px`;//finish in position

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        cloud.style.animation = "none";
        cloud.style.left = `${cloudPosition}px`;

        mario.src ="./img/game-over.png";
        mario.style.width="40px";
        mario.style.marginLeft="50px";

        clearInterval(loop);//stop loop
    }
}, 10);

document.addEventListener("keydown", jump)