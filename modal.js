document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelector("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const modal = document.querySelector("[data-modal]");

  function toggleModal() {
    modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      toggleModal();
    }
  });
});
