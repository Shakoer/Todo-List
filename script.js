let addbtn = document.getElementById("add");
let container = document.getElementById("todos")
let input = document.getElementById("input")

addbtn.addEventListener("click", function(){
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling')
  paragraph.innerText = input.value;
  container.appendChild(paragraph);
  input.value = ""
  paragraph.addEventListener("click", function(){
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener("dblclick", function(){
    paragraph.removeChild(paragraph)
  })
})