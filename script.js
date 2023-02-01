const toggleButton = document.getElementById("themeButton");
var images = document.querySelectorAll("img");
let isLight = false;

toggleButton.addEventListener("click", function() {
    const body = document.body;
    if (isLight) {
    body.style.backgroundColor = "#101018";
    body.style.color = "white";
    toggleButton.innerText = "Dark Mode";
    images.forEach(function(img) {
        img.style.filter = "invert(0%)";
    });
    } else {
    body.style.backgroundColor = "#EFEFE7";
    body.style.color = "black";
    toggleButton.innerText = "Light Mode";
    images.forEach(function(img) {
        img.style.filter = "invert(100%)";
    });
    }
    isLight = !isLight;
});

function main() {
    const body = document.body;
    body.style.backgroundColor = "#101018";
    body.style.color = "white";
    toggleButton.innerText = "Dark Mode";
}

main();