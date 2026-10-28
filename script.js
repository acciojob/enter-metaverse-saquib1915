let enterBtn = document.getElementById("enterBtn");
let status = document.getElementById("status");

enterBtn.addEventListener("click", function () {
    let heading = document.createElement("h1");
    heading.textContent = "Entered Metaverse";

    status.innerHTML = "";
    status.appendChild(heading);
});