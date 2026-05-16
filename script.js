let currentPage = 0;

const pages = document.querySelectorAll(".page");

document.body.addEventListener("click", function () {
    pages[currentPage].classList.remove("active");

    currentPage = currentPage + 1;

    if (currentPage >= pages.length) {
        currentPage = 0;
    }

    pages[currentPage].classList.add("active");
});