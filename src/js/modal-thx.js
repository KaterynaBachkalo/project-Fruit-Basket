const ACTIVE_CLASS_NAME = "active";

const successModal = document.querySelector(".thx-modal");
const successOverlay = document.querySelector(".js-overlay-modal");
const form = document.querySelector(".modal-form");

const openFormModalBtn = document.querySelector(".open-modal-btn");

const closeBtns = document.querySelectorAll(".close-btn");

openFormModalBtn.setAttribute("disabled", true);

const emailInput = document.querySelector(".modal-field-input");

emailInput.addEventListener("input", changeInput);

function changeInput() {
        if (emailInput.value.length !== 0) {
                openFormModalBtn.removeAttribute("disabled");
        }
}

const closeFormModal = () => {
        successOverlay.classList.remove(ACTIVE_CLASS_NAME);
        successModal.classList.remove(ACTIVE_CLASS_NAME);
        document.body.classList.remove('no-scroll');
};

closeBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
                e.stopPropagation();
                closeFormModal();
        });
});

function clearFormFields() {
        const modalFields = form.querySelectorAll("input");

        modalFields.forEach((field) => {
                field.value = "";
        });
}

form.addEventListener("submit", (e) => {
        e.preventDefault();
        successOverlay.classList.add(ACTIVE_CLASS_NAME);
        successModal.classList.add(ACTIVE_CLASS_NAME);
        document.body.classList.add('no-scroll');

        clearFormFields();
});
