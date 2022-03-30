// change user name
function changeName(element) {
    var name = prompt("Enter your name: ");
    element.innerText = name;
}


// clicking accept or reject request 
function hide(element) {
    element.remove();
}

// change request count
function requestCount(element) {
    element.innerText--;
}