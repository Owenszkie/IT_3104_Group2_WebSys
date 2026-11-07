const message = document.getElementById("message");
const changeMessageBtn = document.getElementById("changeMessageBtn");
const changeBgBtn = document.getElementById("changeBgBtn");

const messages =[
    "Hello! Welcome to my webpage.",
    "My name is Aeron Sandrei Dapat.",
    "My name is Clark Owen Marasigan.",
    "My name is John Jerick Caguimbal."
    
]

let currentMessage = 0;

changeMessageBtn.addEventListener("click", function () {
  message.textContent = messages[currentMessage];

  currentMessage++;

  if(currentMessage >= messages.length) {
    currentMessage = 0;
  }
});

changeBgBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
});