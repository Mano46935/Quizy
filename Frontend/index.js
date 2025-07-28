  let correctAnswer = "";
  let timer;
  let timeleft=10;
  function startTimer(){
    timeleft=10;
     document.getElementById("Timer").innerText = `Time left: ${timeleft}s`;
     clearInterval(timer);
     timer=setInterval(()=>{
        timeleft--;
         document.getElementById("Timer").innerText = `Time left: ${timeleft}s`;
        if(timeleft==0){
            clearInterval(timer);
            alert("Time up!");
            loadFunction();
        }
    },1000);
  }
function loadFunction(){
    const url=("https://the-trivia-api.com/api/questions?limit=1");
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        startTimer();
          const buttons = document.querySelectorAll("#Options button");
            buttons.forEach(btn => btn.disabled = false);
        const question=data[0];

        correctAnswer = question.correctAnswer; 
        const options=[...question.incorrectAnswers,question.correctAnswer];
   const shuffledOptions = shuffleArray(options);
        document.getElementById("question").innerText=question.question;
      
            shuffledOptions.forEach((option,idx)=>{
                if(buttons[idx]){
                    buttons[idx].innerText=option;
                }
            

            }); 
        
    }) 
}
document.addEventListener("DOMContentLoaded",()=>{
    loadFunction();
})
function shuffleArray(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}
let score1 = 0;
document.getElementById("Options").addEventListener("click",function(event){
    if(event.target.tagName==="BUTTON"){
        const clickedButtonId=event.target.id;
        const clickedButtontext=event.target.textContent;
         clearInterval(timer);
         const buttons = document.querySelectorAll("#Options button");
            buttons.forEach(btn => btn.disabled = true);
       
        if(clickedButtontext==correctAnswer){
            const score=document.getElementById("Score");
            score1=score1+1;
            score.innerText="Score: "+score1;
            loadFunction();
        }
        else{
            alert("You choose wrong option");
loadFunction();
        }
    }
})