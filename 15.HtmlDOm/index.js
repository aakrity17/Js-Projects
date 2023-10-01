const header = document.getElementById("header");
const btn = document.getElementById("btn");
const name = document.getElementById("name");
const body = document.getElementById("body");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    // let color = name.value;
    body.style.backgroundColor = name.value;
    name.value = "";
    // console.log(name.value);
    header.style.color = "white";
    // header.innerHTML = "I am " + name.value;
    console.log("hello");
    localStorage.setItem(key.value, data.value);
});

