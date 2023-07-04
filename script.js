const recordButton = document.querySelector(".recordButton");
const recordContainer = document.querySelector(".record");
const todos = document.querySelector(".todos");

function record() {
  recordContainer.style.width = "95px";
  recordContainer.style.height = "95px";
  recordButton.style.transform =
    "rotate(0.05turn) translateY(33px) translateX(-15px)";
  recordButton.innerText = "recording...";
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "tr-TR";
  recognition.onresult = function (event) {
    console.log(event.results[0][0].transcript);
    todos.innerHTML += `
     <li>
     ${event.results[0][0].transcript}
     <button>Done</button>
     </li>
      `;
  };
  recognition.start();
}
