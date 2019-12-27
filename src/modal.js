export const modalFunction = () => {
  // Get the modal
  const modal = document.getElementById("myModal");

  // Get the button that opens the modal
  const btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", (event) => {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener('click', event => {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      modal.style.display = "none";
    }
  });
};

