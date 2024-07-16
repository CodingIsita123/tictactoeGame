let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#btn");
let  msgContainer=document.querySelectorAll(".msgContainer");
let newgamebutton=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let turn0=true;
let winPatterns=[[0,4,8],
[1,4,7],[2,5,8],[2,4,6],
[3,4,5],[6,7,8]
];
const resetGame =()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Box was clicked");
        if(turn0==true){
            box.innerText="0"
            turn0=false;
        }
        else
        {
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes =()=> {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(Winner)=>{
  msg.innerText=`Congratulations,Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
} ; 

const checkWinner=()=>{
    for( let pattern of winPatterns){
        let posvalue1=boxes[pattern[0]].innerText;
        let posvalue2=boxes[pattern[1]].innerText;
        let posvalue3=boxes[pattern[2]].innerText;


        if(posvalue1 !="" && posvalue2 !="" && posvalue3!=""){
            if(posvalue1==posvalue2 && posvalue2==posvalue3){
                console.log("Winner",posvalue1);

                showWinner(posvalue1);
            }
        }
    }
};
newgamebutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);