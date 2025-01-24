let userscore=0;
let computerscore=0;

const userchoice=document.querySelectorAll(".images");
const msg=document.querySelector("#message");

const userscoreline=document.querySelector("#user-scores");
const compscoreline=document.querySelector("#computer-scores");


const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}


const startgame=(userchoice)=>{
    const compchoice=gencompchoice();

    let showwinner=(userwin,userchoice,compchoice)=>{
        if(userwin){
            userscore++;
            userscoreline.innerText=userscore;
            msg.innerText=`You win! Your  ${compchoice} beats${userchoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            computerscore++;
            compscoreline.innerText=computerscore;
            msg.innerText=`You lost.${userchoice} beats your ${compchoice}`;
            msg.style.backgroundColor="red";

        }
    }
    if(userchoice==compchoice){

        msg.innerText="Game was draw.Play again!";
        msg.style.backgroundColor="brown";
    }
else{

    let userwin=true;
    if(userchoice=="rock"){
        userwin=compchoice==="paper"?false:true;

    }
    else if(userchoice=="paper"){
        userwin=compchoice=="scissor"?false:true;
    }
    else{
        userwin=compchoice=="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}

    

};
userchoice.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userchoiceid=choice.getAttribute("id");
    startgame(userchoiceid);
});
}
);


