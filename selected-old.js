import dataEmployees from "./data.js";

// get id from localStorage
const currentEmployeeId = localStorage.getItem("employeeId");

// check if id from localStorage is a string type
if(typeof currentEmployeeId !== 'string') {
    // alert("None card is selected!");
    throw new Error("This value is not a string type");
}

// check if currentEmployeeId contains only digits
if(!/^[0-9]+$/.test(currentEmployeeId)) {
  throw new Error("ID inválido");
}

// convert id from localStorage into number type
const employeeId = +(currentEmployeeId);

// get selected id
const params = new URLSearchParams(window.location.search);
// const idSelectedButton = params.get("id");
const idSelectedButton = Number(params.get("id"));
console.log(idSelectedButton);

// check which id was selected and find it in database (dataEmployees)
const selectedEmployee = dataEmployees.find((employee) => {
    // return employee.id === idSelectedButton;
    return employee.id === employeeId;
});
// const selectedEmployee = Number.isInteger(employeeId) ? dataEmployees.find((employee) => employee.id === employeeId) : undefined;
console.log(selectedEmployee);

// error message if not found
if(!selectedEmployee) {
    throw new Error("Employee not found.");
}

const articleCard = document.querySelector(".card");
console.log(articleCard);

// create card of the selected employee
function createCard(employee) {
    // top card
    const cardTopDiv = document.createElement("div");
    cardTopDiv.classList.add("card__top");

    const imagecardTopDiv = document.createElement("img");
    imagecardTopDiv.classList.add("card__top__img");
    // imagecardTopDiv.src = "img/card1-bg.jpg";
    imagecardTopDiv.src = employee.imageBg;
    // imagecardTopDiv.setAttribute("src", "img/card1-bg.jpg");
    imagecardTopDiv.setAttribute("alt", "office image");

    cardTopDiv.appendChild(imagecardTopDiv);

    // body card
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card__body");

    // body card name
    const cardBodyNameDiv = document.createElement("div");
    cardBodyNameDiv.classList.add("card__body__name");
    // cardBodyNameDiv.innerText = "Ketlyn Smith";
    cardBodyNameDiv.innerText = employee.name;

    cardBodyDiv.appendChild(cardBodyNameDiv);

    // body card role
    const cardBodyRoleDiv = document.createElement("div");
    cardBodyRoleDiv.classList.add("card__body__role");
    // cardBodyRoleDiv.innerText = "Graphic Designer";
    cardBodyRoleDiv.innerText = employee.role;

    cardBodyDiv.appendChild(cardBodyRoleDiv);

    // body card email
    const cardBodyEmailDiv = document.createElement("div");
    cardBodyEmailDiv.classList.add("card__body__email");

    const cardBodyEmailIcon = document.createElement("i");
    cardBodyEmailIcon.classList.add("fa-solid", "fa-envelope");
    cardBodyEmailDiv.appendChild(cardBodyEmailIcon);

    const cardBodyEmailSpan = document.createElement("span");
    // cardBodyEmailSpan.innerText = "ketlyn.smith@gmail.com";
    cardBodyEmailSpan.innerText = employee.email;
    cardBodyEmailSpan.setAttribute("id", "email");
    cardBodyEmailDiv.appendChild(cardBodyEmailSpan);

    cardBodyDiv.appendChild(cardBodyEmailDiv);

    // body card phone
    const cardBodyPhoneDiv = document.createElement("div");
    cardBodyPhoneDiv.classList.add("card__body__phone");

    const cardBodyPhoneIcon = document.createElement("i");
    cardBodyPhoneIcon.classList.add("fa-solid", "fa-phone");
    cardBodyPhoneDiv.appendChild(cardBodyPhoneIcon);

    const cardBodyPhoneSpan = document.createElement("span");
    // cardBodyPhoneSpan.innerText = "+1 555 025-9957";
    cardBodyPhoneSpan.innerText = employee.phone;
    cardBodyPhoneSpan.setAttribute("id", "phone");
    cardBodyPhoneDiv.appendChild(cardBodyPhoneSpan);

    cardBodyDiv.appendChild(cardBodyPhoneDiv);

    // body card linkedin
    const cardBodyLinkedinDiv = document.createElement("div");
    cardBodyLinkedinDiv.classList.add("card__body__linkedin");

    const cardBodyLinkedinIcon = document.createElement("i");
    cardBodyLinkedinIcon.classList.add("fa-brands", "fa-linkedin");
    cardBodyLinkedinDiv.appendChild(cardBodyLinkedinIcon);

    const cardBodyLinkedinSpan = document.createElement("span");
    // cardBodyLinkedinSpan.innerText = "linkedin.com/ketlyndesign";
    cardBodyLinkedinSpan.innerText = employee.linkedin;
    cardBodyLinkedinSpan.setAttribute("id", "linkedin");
    cardBodyLinkedinDiv.appendChild(cardBodyLinkedinSpan);

    cardBodyDiv.appendChild(cardBodyLinkedinDiv);

    // body card button
    const cardBodyButtonDiv = document.createElement("div");
    cardBodyButtonDiv.classList.add("card__body__btn");

    const cardBodyButtonAnchor = document.createElement("a");
    cardBodyButtonAnchor.setAttribute("href", "index.html");
    // cardBodyButtonAnchor.href = "index.html";
    cardBodyButtonAnchor.classList.add("card__btn");
    cardBodyButtonAnchor.innerText = "Back to Home";
    cardBodyButtonDiv.appendChild(cardBodyButtonAnchor);

    cardBodyDiv.appendChild(cardBodyButtonDiv);

    // main image
    const cardMainImageDiv = document.createElement("div");
    cardMainImageDiv.classList.add("card__image");

    const cardMainImageImg = document.createElement("img");
    // cardMainImageImg.setAttribute("src", "img/person-01.jpeg");
    cardMainImageImg.setAttribute("src", employee.image);
    // cardMainImageImg.src = employee.image;
    cardMainImageImg.setAttribute("alt", "woman");
    cardMainImageDiv.appendChild(cardMainImageImg);

    // append childs divs to article element
    articleCard.appendChild(cardTopDiv);
    articleCard.appendChild(cardBodyDiv);
    articleCard.appendChild(cardMainImageDiv);
}

createCard(selectedEmployee);