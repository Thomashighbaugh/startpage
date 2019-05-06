// Search on enter key event
function search(e) {
    if (e.keyCode === 13) {
        const val = document.getElementById("search-field").value;
        window.open("https://google.com/search?q=" + val);
    }
}
window.onload = () => {
    let xhr = new XMLHttpRequest();

    xhr.send();
    // Set up the clock
    document.getElementById("clock").innerHTML = getTime();
    // Set clock interval to tick clock
    setInterval(() => {
        document.getElementById("clock").innerHTML = getTime();
    }, 100);
};

document.addEventListener("keydown", event => {
    if (event.keyCode === 32) {
        // Spacebar code to open search
        document.getElementById("search").style.display = "flex";
        document.getElementById("search-field").focus();
    } else if (event.keyCode === 27) {
        // Esc to close search
        document.getElementById("search-field").value = "";
        document.getElementById("search-field").blur();
        document.getElementById("search").style.display = "none";
    }
});