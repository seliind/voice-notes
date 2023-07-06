const recordButton = document.querySelector(".recordButton");
const recordContainer = document.querySelector(".record");
const todos = document.querySelector(".todos");
const voiceNote = document.querySelector("#note");

const storedtodoListString = localStorage.getItem("todoList");
const todoList = storedtodoListString ? JSON.parse(storedtodoListString) : [];
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
  todoList.push(voiceNote.value);
  const updatedTodoListString = JSON.stringify(todoList);
  localStorage.setItem("todoList", updatedTodoListString);
  renderList();
  voiceNote.value = "";
  window.alert("New note is adding!");
}

function deleteNote(index) {
  console.log(index);
  const alltodos = localStorage.getItem("todoList");
  const storedAlltodos = JSON.parse(alltodos);
  storedAlltodos.splice(index, 1);
  const newTodoList = JSON.stringify(storedAlltodos);
  localStorage.setItem("todoList", newTodoList);
  const todoItems = document.querySelectorAll(".todo-item");
  if (todoItems.length > index) {
    todoItems[index].remove();
  }
}

function renderList() {
  todos.innerHTML = todoList
    .map(
      (item, i) =>
        `  
        <li key=${i} class="todo-item">
            ${item}
            <button onclick="deleteNote(${i})">
            <i class="fa-solid fa-check"></i>
            </button>
        </li>
        `
    )
    .join("");
}

renderList();
