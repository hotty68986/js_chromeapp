const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

// function handleClick() {
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if (hasClass){
//         title.classList.remove(CLICKED_CLASS);
//         console.log("clicked")
//     }else {
//         title.classList.add(CLICKED_CLASS);
//         console.log("nope")
//     }
// }

// ^^^ same ^^^^
function handleClick(){
    title.classList.toggle(CLICKED_CLASS)
}
////////

function init() {
    title.addEventListener("click", handleClick);
}

init();
