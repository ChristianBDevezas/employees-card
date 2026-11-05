import dataEmployees from "./data-employees.js";
import { createCard } from "./function.js";

class Employee {
  constructor({ id, name, role, email, phone, linkedin, image, imageBg }) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.linkedin = linkedin;
    this.image = image;
    this.imageBg = imageBg;
  }
}

// creates a new array containing an Employee instance for every object in dataEmployees
const employees = dataEmployees.map((data) => new Employee(data));
console.log(employees, typeof employees[0]);

// get id of each employee from localStorage
// const currentEmployeeId = localStorage.getItem("employeeId");
const currentEmployeeIds = JSON.parse(localStorage.getItem("employeeIds") || "[]");

// check if currentEmployeeIds is actually an array type
if(!Array.isArray(currentEmployeeIds)) {
  throw new Error("This value is not an array type");
}

// get selected id
const params = new URLSearchParams(window.location.search);
// const idSelectedButton = params.get("id");
const idSelectedButton = Number(params.get("id"));
console.log(idSelectedButton);

// // using the class Employee instead of working directly with dataEmployees
// const selectedEmployee = employees.find((employee) => {
//   return employee.id === employeeId;
// });
// console.log(selectedEmployee);

// Select the employees whose IDs are stored in localStorage
const selectedEmployees = employees.filter((employee) => {
  return currentEmployeeIds.includes(employee.id);
});
console.log(selectedEmployees);

// error message if not found
if(selectedEmployees.length === 0) {
  throw new Error("Nenhum funcionário encontrado.");
}

// const articleCard = document.querySelector(".card");
// console.log(articleCard);

// createCard(selectedEmployee);

for(const employee of selectedEmployees) {
    createCard(employee);
}

// selectedEmployees.forEach(createCard);