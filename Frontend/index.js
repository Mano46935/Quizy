document.addEventListener("DOMContentLoaded",()=>{
    const url=("https://the-trivia-api.com/api/questions?limit=1");
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        const question=data[0];
        correctAnswer = question.correctAnswer; 
        const options=[...question.incorrectAnswers,question.correctAnswer];
        document.getElementById("question").innerText=question.question;
        const buttons=document.querySelectorAll("#Options button");
            options.forEach((option,idx)=>{
                if(buttons[idx]){
                    buttons[idx].innerText=option;
                }
            

            })
        
    })
})
let score1 = 0;
document.getElementByID("Options").addEventListener("click",function(event){
    if(event.target.tagName==="BUTTON"){
        const clickedButtonId=event.target.id;
        const clickedButtontext=event.target.textContent;
       
        if(clickedButtontext==question.correctAnswer){
            const score=document.ElementByID("Score");
            score1=score1+1;
            score.innerText="Score: "+score1;
            
        }
        else{
            alert("You choose wrong option");
        }
    }
})