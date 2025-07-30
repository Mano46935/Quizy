let correctAnswer="";
document.addEventListener("DOMContentLoaded",()=>{
            sixtysec();
    loadquestions();
})
let timer;
let timeleft;
function sixtysec(){
    timeleft=60;
    document.getElementById("Timer1").innerText=`Time Left:${timeleft}`;
  
    timer=setInterval(()=>{
   timeleft--;
         document.getElementById("Timer1").innerText = `Time left: ${timeleft}s`;
        if(timeleft==0){
            clearInterval(timer);
            alert("Time up!");
            
        }
    },1000)

}
function loadquestions(){
    const url="https://the-trivia-api.com/api/questions?limit=1";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{

        const buttons=document.querySelectorAll("#options button");
        buttons.forEach(btn=>btn.disabled=false);
        const question=data[0];
         correctAnswer = question.correctAnswer; 
        const options=[...question.incorrectAnswers,question.correctAnswer];
        const shuffledOptions=shuffleArray(options);
        document.getElementById("questions").innerText=question.question;
        shuffledOptions.forEach((option,idx)=>{
            if(buttons[idx]){
                buttons[idx].innerText=option;
            }
        })
        
    })
}
function shuffleArray(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;

}
let score1=0;
document.getElementById("options").addEventListener("click",function(event){
    if(event.target.tagName==="BUTTON"){
        const clickedButtonId=event.target.id;
        const clickedButtonText=event.target.textContent;
        const buttons=document.querySelectorAll("#options button");
        buttons.forEach(btn => btn.disabled = true);
  if(clickedButtonText==correctAnswer){
            const score=document.getElementById("Score");
            score1=score1+1;
            score.innerText="Score: "+score1;
            loadquestions();
        }
        else{
            alert("You choose wrong option");
loadquestions();
        }
    }
})
