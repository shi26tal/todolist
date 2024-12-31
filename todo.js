const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

const addtask = () => {
  if (inputbox.value === "") {
    alert("write your todo list.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //cross icon
    li.appendChild(span);
  }
  inputbox.value = "";
  saveData();
};

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

let saveData = () => {
  localStorage.setItem("data", listcontainer.innerHTML);
};
let showtask = () => {
  listcontainer.innerHTML = localStorage.getItem("data");
};
showtask();
