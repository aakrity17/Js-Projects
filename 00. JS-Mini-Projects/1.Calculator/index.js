// Grabbing elements from the HTML
let screen = document.querySelector(".inputField");
let buttons = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".btn-clear");
let equalBtn = document.querySelector('.btn-equal')

// Looping through each button (since querySelectorAll provides an array of elements matching the classname btn)
buttons.forEach(function (button) {
    // yesma, loop gareko harek button click garda k hune bhanne define gareko
    button.addEventListener('click', function (e) {
        // yesle, click gareko button ma data-num ma j xa teslai value bhanne variable ma rakhxa
        let value = e.target.dataset.num;
        // yesle, inputField ma , hamile click gareko button ko value add garxa
        screen.value += value;
    })
});
// equal button ma click event rakheko... yesma hamile forEach rakhenam kina bhane, querySelector le first ma match hune button matra dinxa, not an array
equalBtn.addEventListener('click', function (e) {
    // answer variable ma , screen( inputField) ma bhayeko value eval function ma pass hunxa ani tesko result answer variable ma janxa
    let answer = eval(screen.value);
    // yo chai, equal button press garepaxi mathi ko calculation bhayera , answer variable ko stuff input field ma janxa
    screen.value = answer;
})

clearBtn.addEventListener('click', function (e) {
    // yesle,answer field ko value clear garxa
    screen.value = '';
})