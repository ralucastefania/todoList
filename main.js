const listInput = document.querySelector("#list_input_box");
const btnAddList = document.querySelector("#addList");
const listNames = document.querySelector("#list_names");
const pages = document.querySelector("#pages")

init()

function init() {
  Object.keys(todos).forEach((key) => {
    addList(key)    
  })
}

function addList(name) {
  let li = document.createElement("li");
  let btnRadio = document.createElement("input");
  btnRadio.type = "radio";
  btnRadio.id = "list_" + name;
  btnRadio.name = "my_lists";

  let label = document.createElement("label");
  label.htmlFor = btnRadio.id;
  label.innerHTML = name;

  let btnDelete = document.createElement("button");
  btnDelete.classList.add("delete");
  btnDelete.innerHTML = "x";
  btnDelete.addEventListener("click", (e) => {
    listNames.removeChild(li);
  });

  li.appendChild(btnRadio);
  li.appendChild(label);
  li.appendChild(btnDelete);
  listNames.insertBefore(li, listNames.firstChild);

  listInput.value = "";
}

function newList() {
  let text = listInput.value;
  if (text === undefined || text === "") return;
  addList(text)
  addPage(text)
}

function addPage(name) {
  let pageDiv = document.createElement("div")
  pageDiv.classList.add("main_divs")
  pageDiv.id = "page_" + name

  let todoTitle = document.createElement("h4")
  todoTitle.innerHTML = "my todos"

  let todoItems = document.createElement("ul")
  todoItems.id = "incompleteTasks_" + name

  let deedsTitle = document.createElement("h4")
  deedsTitle.innerHTML = "my deeds"

  let deedItems = document.createElement("ul")
  deedItems.id = "completedTasks_" + name

  let deleteAll = document.createElement("img")
  deleteAll.src = "bin.png"

  pageDiv.appendChild(todoTitle)
  pageDiv.appendChild(todoItems)
  pageDiv.appendChild(deedsTitle)
  pageDiv.appendChild(deedItems)
  pageDiv.appendChild(deleteAll)
  pages.appendChild(pageDiv)
}

listInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    newList();
  }
});

btnAddList.addEventListener("click", newList);

// const addButton = document.querySelector("#addButton");
// const incompleteTasks = document.querySelector("#incompleteTasks");
// const todosInput = document.querySelector("#todosInput");
// const completedTasks = document.querySelector("#completedTasks");
// const binButton = document.querySelector("#bin")
// const delPopup = document.querySelector("#delPopup")
// const btnYes = document.querySelector("#btnYes")
// const btnNo = document.querySelector("#btnNo")

// function newEvent() {
//   let text = todosInput.value;
//   if (text === undefined || text === "") return;

//   let checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.id = "checkbox";

//   let deleteButton = document.createElement("button");
//   deleteButton.classList.add("delete");
//   deleteButton.textContent = "X";

//   let span = document.createElement("span")
//   span.appendChild(document.createTextNode(text))

//   let li = document.createElement("li");
//   li.classList.add("todoItem");
//   li.appendChild(checkbox);
//   li.appendChild(span);
//   li.appendChild(deleteButton);

//   deleteButton.addEventListener("click", () => {
//     if (incompleteTasks.contains(li)) {
//         // OR use -> if(!checkbox.checked)
//       incompleteTasks.removeChild(li);
//     } else {
//       completedTasks.removeChild(li);
//     }
//   });

//   checkbox.addEventListener("click", () => {
//     if (checkbox.checked) {
//       incompleteTasks.removeChild(li);
//       completedTasks.insertBefore(li, completedTasks.firstChild);
//     } else {
//       completedTasks.removeChild(li);
//       incompleteTasks.insertBefore(li, incompleteTasks.firstChild);
//     }
//   });

//   incompleteTasks.insertBefore(li, incompleteTasks.firstChild);

//   todosInput.value = "";
// }

// addButton.addEventListener("click", newEvent);
// todosInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     newEvent();
//   }
// });

// binButton.addEventListener("click", (e) => {
//     delPopup.style.visibility = "visible"
// })

// btnNo.addEventListener("click", () => {
//     delPopup.style.visibility = "hidden"
// })

// btnYes.addEventListener("click", () => {
//   completedTasks.innerHTML = ''
//   delPopup.style.visibility = "hidden"
// })
