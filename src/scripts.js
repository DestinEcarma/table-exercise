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

let onEdit = false;
let editIndex = -1;

function render(person) {
	const row = document.createElement("tr");

	setRow(row, person);

	list.appendChild(row);
}

function setRow(row, person) {
	row.innerHTML = `
		<td>${person.firstName}</td>
		<td>${person.lastName}</td>
		<td>${person.emailAddress}</td>
		<td>${person.contactNumber}</td>
		<td>
			<div class="flex gap-4 justify-center">
				<button class="edit hover:drop-shadow-glow transition">
					<span class="material-symbols-rounded">edit</span>
				</button>
				<button class="delete hover:drop-shadow-glow transition">
					<span class="material-symbols-rounded">delete</span>
				</button>
			</div>
		</td>
	`;

	row.querySelector(".edit").addEventListener("click", () => {
		onEdit = true;
		editIndex = people.indexOf(person);

		firstName.value = person.firstName;
		lastName.value = person.lastName;
		emailAddress.value = person.emailAddress;
		contactNumber.value = person.contactNumber;

		addRowModal.dataset.active = "true";
	});

	row.querySelector(".delete").addEventListener("click", () => {
		deletePerson(people.indexOf(person));
	});
}

function closeModalFunc() {
	addRowModal.dataset.active = "false";

	firstName.value = "";
	lastName.value = "";
	emailAddress.value = "";
	contactNumber.value = "";

	onEdit = false;
}

function addPerson() {
	const person = {
		firstName: firstName.value,
		lastName: lastName.value,
		emailAddress: emailAddress.value,
		contactNumber: contactNumber.value,
	};

	people.push(person);
	render(person);

	localStorage.setItem("people", JSON.stringify(people));
}

function updatePerson(index, person) {
	if (index < 0) return;

	setRow(list.children[index], person);

	people[index] = person;

	localStorage.setItem("people", JSON.stringify(people));
}

function deletePerson(index) {
	if (index < 0) return;

	list.children[index].remove();
	people.splice(index, 1);

	localStorage.setItem("people", JSON.stringify(people));
}

addRow.addEventListener("click", () => {
	addRowModal.dataset.active = "true";
});

closeModal.addEventListener("click", () => {
	closeModalFunc();
});

addRowForm.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!onEdit) {
		addPerson();
	} else {
		updatePerson(editIndex, {
			firstName: firstName.value,
			lastName: lastName.value,
			emailAddress: emailAddress.value,
			contactNumber: contactNumber.value,
		});
	}

	closeModalFunc();
});

for (const person of people) {
	render(person);
}
