let count = 0; 

const button = document.getElementById("increment");
const button2 = document.getElementById("decrement");
const counter = document.getElementById("count");
counter.innerHTML = count;

button.addEventListener("click", function() {
    counter.innerHTML = ++count;
});

button2.addEventListener("click", function()  {
    counter.innerHTML = --count;
});


