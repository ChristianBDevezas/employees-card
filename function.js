// create card of the selected employee
const cardsContainer = document.querySelector(".cards");
if(!cardsContainer) {
  throw new Error("Conainer not found.");
}

export function createCard(employee) {
    const articleCard = document.createElement("article");
    articleCard.classList.add("card");

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

    // body card button remove
    const cardBodyDivButtonRemove = document.createElement("div");
    cardBodyDivButtonRemove.classList.add("card__body__remove");

    const cardBodyButtonRemove = document.createElement("button");
    cardBodyButtonRemove.classList.add("remove");
    cardBodyButtonRemove.innerText = "Remove Card";
    cardBodyDivButtonRemove.appendChild(cardBodyButtonRemove);

    cardBodyDiv.appendChild(cardBodyDivButtonRemove);

    // remove card and update localStorage
    cardBodyButtonRemove.addEventListener("click", (e) => {
        const cardElement = e.currentTarget.closest(".card");
        
        const employeeIds = JSON.parse(localStorage.getItem("employeeIds") || "[]");
        const updatedIds = employeeIds.filter((id) => id !== employee.id);
        console.log(updatedIds, Array.isArray(updatedIds));
        localStorage.setItem("employeeIds", JSON.stringify(updatedIds));

        // cardElement.remove();
        cardElement?.remove();

        if(updatedIds.length === 0) window.location.href = "index.html";
    });

    // body card button back to home
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

    cardsContainer.appendChild(articleCard);
}