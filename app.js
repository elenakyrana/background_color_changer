{/* <div class="container"></div>
    <h2>BACKGROUND COLOR CHANGER</h2>
    <button id="btnRed">Red</button>
    <button id="btnYellow">Yellow</button>
    <button id="btnBlue">Blue</button>
    <button id="btnGreen">Green</button>
    <button id="btnReset">Reset</button>
</div>

my_body */}

let my_body=document.querySelector("#my_body");

// my_body.style.background= "green";
let btnRed=document.querySelector("#btnRed");
let btnYellow=document.querySelector("#btnYellow");
let btnBlue=document.querySelector("#btnBlue");
let btnGreen=document.querySelector("#btnGreen");
let btnReset=document.querySelector("#btnReset");

btnRed.addEventListener('click',function(){
    my_body.style.background="#e94560";
});

btnYellow.addEventListener('click',function(){
    my_body.style.background="#ffd66b";
});

btnBlue.addEventListener('click',function(){
    my_body.style.background="#0278ae";
});

btnGreen.addEventListener('click',function(){
    my_body.style.background="#61b15a";
});

btnReset.addEventListener('click',function(){
    my_body.style.background="white";
});



