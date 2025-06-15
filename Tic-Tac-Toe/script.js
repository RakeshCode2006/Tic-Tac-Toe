let boxes=document.querySelectorAll(".box");
let box=document.querySelector("button");
let rsb=document.querySelector(".rsb");
let ngb=document.querySelector(".ng");
let msgcont=document.querySelector(".hide");
let msg=document.querySelector(".msg");
let turn0=true;
let cont=document.querySelector(".container");


const winpat=[[0,1,2,],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];


const showwinner=(val)=>{
    msg.innerText=`Congretulation!..Winner is ${val}`;
    msgcont.classList.add("nonhide");
    for(let box of boxes){
        box.disable=true;
    }
    cont.classList.add("hide");
    rsb.classList.add("hide");  
}
const winner = () =>{
    for(let pattern of winpat){
        console.log(pattern[0],pattern[1],pattern[2]);
        let val1=boxes[pattern[0]].innerText;
        let val2 =boxes[pattern[1]].innerText;
        let val3 =boxes[pattern[2]].innerText;
        if(val1 !="" && val2 !="" && val3 !="")
        { 
            if(val1 === val2 && val2 === val3)
            {
                   console.log(`Winner is ${val1}`);
                   showwinner(val1);
            }
        }
    }
} 
const newgame=()=>{
    msgcont.classList.remove("nonhide");
    turn0=true;
     for(let box of boxes){
        box.innerText=" ";
        box.disabled=false;
    }
    cont.classList.remove("hide");
    rsb.classList.remove("hide"); 
}

boxes.forEach((box,idx)=>{
    box.addEventListener("click",()=>
    {
        if(turn0) 
        {
                box.innerText="O";
                turn0=false;
        }
        else 
        {
            box.innerText="X"
            turn0=true;
        }
        console.log("clicked ",idx,"th box");
        box.disabled=true;
        winner();
    });

});

rsb.addEventListener("click",newgame);
ngb.addEventListener("click",newgame);
