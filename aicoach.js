const aiCoachBtn = document.getElementById("aicoach-manu")
      
     aiCoachBtn.addEventListener("click",()=>{
       const aiCoachSection = document.getElementById("aicoach-section");
       aiCoachSection.scrollIntoView({behavior: "smooth"});
        
       
     })
const aiCoachBtnMobile = document.getElementById("aicoach-manu-mobile")
      
     aiCoachBtnMobile.addEventListener("click",()=>{
       const aiCoachSection = document.getElementById("aicoach-section");
       aiCoachSection.scrollIntoView({behavior: "smooth"});
        
       
     })


    //  chatboard dynamic
    const chatBox = document.getElementById("chatBox");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
    const suggestionBtns = document.querySelectorAll(".suggestion-btn");

    // Append message function
    const appendMessage = (message, type = "user") => {
      const messageDiv = document.createElement("div");
      messageDiv.className = `p-3 m-3 rounded-lg w-fit ${type === 'user' ? 'bg-blue-100 text-blue-900 self-end ml-auto' : 'bg-gray-100 text-black self-start'}`;
      messageDiv.innerText = message;
      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight; // scroll to bottom
    };

    // Send input
    sendBtn.addEventListener("click", (e) => {
        e.preventDefault()
      const message = chatInput.value.trim();
      if (message) {
        appendMessage(message, "user");
        chatInput.value = "";
      }
    });

    // Enter key support
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendBtn.click();
    });

    // Handle suggestion button clicks
    suggestionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        appendMessage(btn.innerText, "user");
      });
    });

    //  clear history
document.getElementById("clear-history-btn").addEventListener("click",()=>{
  const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML=""
//  document.getElementById("history-container").style.display="none"
})