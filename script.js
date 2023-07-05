const recordButton = document.querySelector(".recordButton");
const recordContainer = document.querySelector(".record");
const todos = document.querySelector(".todos");

function record() {
  recordButton.innerText = "recording...";
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "tr-TR";
  recognition.onresult = function (event) {
    console.log(event.results[0][0].transcript);
    todos.innerHTML += `
     <li>
     ${event.results[0][0].transcript}
     <button><i class="fa-solid fa-check"></i></button>
     </li>
      `;
      recordButton.innerHTML = `
      Record <i class="fa-solid fa-microphone"></i>
      `;
  };
  recognition.start();
}
