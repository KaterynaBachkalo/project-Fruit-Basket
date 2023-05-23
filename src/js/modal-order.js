(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        overlay: document.querySelector(".js-overlay-modal"),
        modal: document.querySelector(".order-modal"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.overlay.classList.toggle("active");
        refs.modal.classList.toggle("active");
    }
})();