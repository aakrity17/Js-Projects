const header = document.getElementById("header");
const btn = document.getElementById("btn");
const name = document.getElementById("name");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    header.style.color ="red";
    header.innerHTML = "I am " + name.value;
    console.log(name.value);
});

console.log(header.innerHTML);
