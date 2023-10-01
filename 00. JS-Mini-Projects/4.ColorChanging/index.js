//var is the keyword that tells JavaScript you're declaring a variable. 
// var is function scoped and let is block scoped. Variable declared 
// by let cannot be redeclared and must be declared before use whereas
//  variables declared with var keyword are hoisted.

var index = 0;
function changeColors()
//  This js function named "changeColors() is used to change the background
//  color of a webpage,
{
    // It first declared an arry of string, "colors", that
    //  contains the different color options.
    var colors = ["red", "blue", "orange", "yellow", "green", "purple"];
    //  to select the first element with the tag name "body" and sets it's "style.background"
    // Property to the value of the "colors" array  at the current index.The index is increamented  by 1 each 
    document.querySelectorAll("body")[0].style.background = colors[index++];

    // Then, it uses the DOM method "querySelectorAll()" - which selects all the  elements that match a CSS selector
    //   getElementById(): selects the first element with a matching id attribute
    // querySelector(): selects the first element that matches a CSS selector
    // querySelectorAll(): selects all elements that match a CSS selector
    // For example, if you want to target an element with a specific class name, you could use document.querySelector('.classname') instead of document.getElementsByTagName("body")[0].

    // It's also worth noting that jQuery, a popular JavaScript library, also provides a number of methods for selecting elements, such as $('#elementId') and $('.className') which are similar to getElementById and querySelector respectively.
    //time the function is called. If the index exceeds the lenth of the "colos" array,
    if (index > colors.length - 1)
        index = 0;
    // it is reset to 0 so that the colors repreat in a loop.

}
