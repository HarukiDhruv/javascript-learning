let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let descInfo = document.querySelector("textarea");
let Ncontainer = document.querySelector("#notes-container");

form.addEventListener("submit", function(dets){
    dets.preventDefault(); // preventing the html to reload;

    let note = document.createElement("div");
    note.classList.add("note");

    let h2 = document.createElement("h2");
    h2.textContent = inputs[0].value;

    let p = document.createElement("p");
    p.textContent = descInfo.value;

    let button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("del-btn");

    button.addEventListener("click", function() {
        note.remove();
    })

    //append:
    note.appendChild(h2);
    note.appendChild(p);
    note.appendChild(button);

    Ncontainer.append(note);

    //clean up for the form:
    inputs[0].value = "";
    descInfo.value = "";

});
