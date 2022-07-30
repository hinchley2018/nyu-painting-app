//select the div by its class and store it in a variable
let painting = document.querySelector(".painting")

//select the div with my paint colors
let pallete = document.querySelector(".palette")

//once you have figured out how to color it a pre-defined color, how to change that color?
//to change your paintbrush click the color in the palette
//write the code to allow paintbrush to change color when clicked

//this variable will store our paint brush color
//change it when pallete is clicked
let paintbrushColor = "blue"

//define the paint function
function paint(event) {
    //log the element you clicked
    console.log(event.target)
    //now htat i have that element, color it something
    event.target.style.backgroundColor = paintbrushColor
    console.log("clicked the painting")
}

//listen for clicks on the painting and execute paint function when they happen
painting.addEventListener("click", paint )

//listen for clicks on palletes and then change color based on the event
pallete.addEventListener("click", function (event) {
    console.log(event.target, "was clicked")
    //my event.target is the element clicked
    //how can i gte color from it?
    //the id is the color
    let newColor = event.target.id
    //make sure we were right
    console.log(newColor)
    //update box with new value
    paintbrushColor = newColor
})