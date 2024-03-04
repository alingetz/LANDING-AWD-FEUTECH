// turn pages when clicked next

const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

pageTurnBtns.forEach((button, index) => {
  button.onclick = () => {
    const pageTurnId = button.getAttribute('data-page');
    const pageToTurn = document.getElementById(pageTurnId);

    if (pageToTurn.classList.contains('turn')) {
      pageToTurn.classList.remove('turn');
      setTimeout(() => {
        pageToTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageToTurn.classList.add('turn');
      setTimeout(() => {
        pageToTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

// create reverse index function (assuming `pages` is defined elsewhere)
let totalPages = pages.length;
let pageNumber = 0;
