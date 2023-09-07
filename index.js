const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task!");
  } else {
    let liElement = document.createElement("li");
    liElement.innerHTML = inputBox.value;
    listContainer.appendChild(liElement);
    let span = document.createElement("span");

    // yo \u007 cross icon ho
    span.innerHTML = "\u00d7";
    liElement.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  
}
//for the checked list
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
//enter key
inputBox.addEventListener("keyup", function (event) {
  //13 is key for enter
  if (event.keyCode === 13) {
    event.preventDefault();
    addTask();
  }
});

//save the data

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showData(){
        listContainer.innerHTML=localStorage.getItem('data');
}
showData();