document.addEventListener("DOMContentLoaded", () => {
  Signup();
});

function Signup() {
  const btn = document.getElementById("button_1");

  btn.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();
      console.log("Server response:", result);

      alert(result.message);
      window.location.href="login.html"; 
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register. Is the backend running?");
    }
  });
}
