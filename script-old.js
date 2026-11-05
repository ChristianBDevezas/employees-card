import dataEmployees from "./data.js";

const cards = document.querySelector(".cards");

// create all cards
function createCards(employee) {
    // cards.insertAdjacentHTML("beforeend", `
    //     <article class="card">
    //         ...
    //     </article>
    // `);

    cards.innerHTML += `
        <article class="card">
            <div class="card__top">
                <img src=${employee.imageBg} alt="office image" class="card__top__img">
            </div>

            <div class="card__body">
                <div class="card__body__name">
                    <span class="name-dash"></span>${employee.name}<span class="name-dash"></span>
                </div>

                <div class="card__body__role">${employee.role}</div>

                <div class="card__body__email">
                    <i class="fa-solid fa-envelope"></i>
                    <span id="email">${employee.email}</span>
                </div>

                <div class="card__body__phone">
                    <i class="fa-solid fa-phone"></i>
                    <span id="phone">${employee.phone}</span>
                </div>
                    
                <div class="card__body__linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <span id="linkedin">${employee.linkedin}</span>
                </div>

                <div class="card__body__btn is-loading">
                    <a href="#" class="card__btn" id=${employee.id}>Select</a>
                </div>
            </div>

            <div class="card__image">
                <img src=${employee.image} alt="woman">
            </div>
        </article>
    `;
}
// createCards();

// loop through employee's data to call createCards function to create a card for each employee
for(const employee of dataEmployees) {
    createCards(employee);
}

const selectButtons = Array.from(document.querySelectorAll(".card__btn"));
console.log(selectButtons);

for(const button of selectButtons) {    
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const idSelectedButton = +(button.getAttribute("id"));
        // const idSelectedButton = button.id;
        console.log(idSelectedButton, typeof idSelectedButton);

        // set id to localStorage
        localStorage.setItem("employeeId", idSelectedButton);

        // window.location.href = `selected.html?id=${encodeURIComponent(idSelectedButton)}`;
        window.location.href = `selected.html`;
    });
}

const getIdselectButtons = selectButtons.map((btn) => {
    return btn.getAttribute("id");
});
console.log(getIdselectButtons);