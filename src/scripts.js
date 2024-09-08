const addRow = document.getElementById("add-row");
const addRowModal = document.getElementById("add-row-modal");
const addRowForm = document.getElementById("add-row-form");
const closeModal = document.getElementById("close-modal");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailAddress = document.getElementById("email-address");
const contactNumber = document.getElementById("contact-number");

const list = document.getElementById("list");

const people = JSON.parse(localStorage.getItem("people") ?? "[]");

function render(person) {
	const row = document.createElement("tr");

	row.innerHTML = `
		<td>${person.firstName}</td>
		<td>${person.lastName}</td>
		<td>${person.emailAddress}</td>
		<td>${person.contactNumber}</td>
	`;

	list.appendChild(row);
}

function addPerson() {
	const person = {
		firstName: firstName.value,
		lastName: lastName.value,
		emailAddress: emailAddress.value,
		contactNumber: contactNumber.value,
	};

	console.log(person);

	people.push(person);
	render(person);

	localStorage.setItem("people", JSON.stringify(people));
}

function updatePerson(index, person) {
	const row = list.children[index];

	row.innerHTML = `
		<td>${person.firstName}</td>
		<td>${person.lastName}</td>
		<td>${person.emailAddress}</td>
		<td>${person.contactNumber}</td>
	`;

	people[index] = person;

	localStorage.setItem("people", JSON.stringify(people));
}

function deletePerson(index) {
	list.children[index].remove();

	people.splice(index, 1);

	localStorage.setItem("people", JSON.stringify(people));
}

addRow.addEventListener("click", () => {
	addRowModal.dataset.active = "true";
});

closeModal.addEventListener("click", () => {
	addRowModal.dataset.active = "false";
});

addRowForm.addEventListener("submit", (e) => {
	e.preventDefault();

	addPerson();

	firstName.value = "";
	lastName.value = "";
	emailAddress.value = "";
	contactNumber.value = "";

	addRowModal.dataset.active = "false";
});

for (const person of people) {
	render(person);
}
