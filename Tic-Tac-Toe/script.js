let boxes=document.querySelectorAll(".box");
let box=document.querySelector("button");
let rsb=document.querySelector(".rsb");
let game=document.querySelector(".game");
let container=document.querySelector(".container");
let turn0=true;


const winpat=[[0,1,2,],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];


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
    });
    winner();

});

const winner = () =>{
    for(let pattern of winpat){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(box[pattern[0]].innerText,
            box[pattern[1]].innerText,
            box[pattern[2]].innerText);
        // let val1=boxes[pattern[0]].innerText;
        // let val2 =boxes[pattern[1]].innerText;
        // let val3 =boxes[pattern[2]].innerText;
        // if(val1 !="" && val2 !="" && val3 !="")
        // { 
        //     if(val1 === val2 && val2 === val3)
        //     {
        //            console.log("winner");
        //         //  return 0;
        //     }
         
        // }
    }
} 