document.addEventListener("DOMContentLoaded",()=>{
login()
})
function login(){
    const btn=document.getElementById("button_1");
    btn.addEventListener("click",async ()=>{

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    try{
   const response=await fetch("http://localhost:3000/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
    })
    const result=await response.json();
    if(result.success){
        window.location.href="home.html";
    }
    else{
        alert("Invalid Cred!");
    }
}catch (err) {
        console.error("Login error:", err);
        alert("Something went wrong. Try again.");
    }
})
}