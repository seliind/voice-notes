const recordButton = document.querySelector(".recordButton");
const recordContainer = document.querySelector(".record");
const todos = document.querySelector(".todos");
const voiceNote = document.querySelector("#note");

function record() {
  recordButton.innerText = "recording...";
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "tr-TR";
  recognition.onresult = function (event) {
    voiceNote.value = event.results[0][0].transcript;
    // console.log(event.results[0][0].transcript);
  };
  recordButton.innerHTML = `
  Record <i class="fa-solid fa-microphone"></i>
  `;
  recognition.start();
}

function addNote() {
    todos.innerHTML += `
     <li>
     ${voiceNote.value}
     <button><i class="fa-solid fa-check"></i></button>
     </li>
      `;
      voiceNote.value = "";
      window.alert("New note is adding!")
 
}
