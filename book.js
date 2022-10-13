const nameInput = document.querySelector("#inputName");
const bookInput = document.querySelector("#inputBook");
const authorInput = document.querySelector("#inputAuthor");
const form = document.querySelector(".form-details");
const submit = document.querySelector("#submit");

submit.addEventListener('click', (e) => {
    console.log("fuck pls print this");
    let div = document.createElement("div");
    
    let img = document.createElement("img");

    let pName = document.createElement("p");
    let pBook = document.createElement("p");
    let pAuthor = document.createElement("p");

    img.src = "user.png";
    img.style.width = "200px";
    pName.innerHTML = `<span style="background-color: #D8E137";">Name:</span> ${nameInput.value}`;
    pBook.innerHTML = `<span style="background-color: #4BE137";">Book:</span> ${bookInput.value}`;
    pAuthor.innerHTML = `<span style="background-color: #DB6060";">Author:</span> ${authorInput.value}`;

    div.style.border = "2px solid black";

    div.appendChild(img);
    div.appendChild(pName);
    div.appendChild(pBook);
    div.appendChild(pAuthor);

    form.appendChild(div);
});


