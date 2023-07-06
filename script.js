const recordButton = document.querySelector(".recordButton");
const recordContainer = document.querySelector(".record");
const todos = document.querySelector(".todos");
const voiceNote = document.querySelector("#note");

const storedtodoListString = localStorage.getItem('todoList')
const todoList = storedtodoListString ? JSON.parse(storedtodoListString) : [];
console.log(todoList);

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
  const storedArray = localStorage.getItem("todoList");
  const parseTodoList = JSON.parse(storedArray)
  parseTodoList.push(voiceNote.value);
  const updatedTodoList = JSON.stringify(parseTodoList);
  localStorage.setItem("todoList", updatedTodoList);
  todos.innerHTML += `
     <li>
     ${voiceNote.value}
     <button><i class="fa-solid fa-check"></i></button>
     </li>
      `;
  voiceNote.value = "";
  window.alert("New note is adding!");
}

todos.innerHTML = 
JSON.parse(storedtodoListString).map((item) => (
`  <li>
  ${item}
  <button><i class="fa-solid fa-check"></i></button>
  </li>`
)).join('')
