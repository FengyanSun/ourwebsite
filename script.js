let currentPage = 0;

const pages = document.querySelectorAll(".page");

const memoryLink = document.getElementById("memory-link");

document.body.addEventListener("click", function () {

    if (currentPage >= pages.length - 1) {
        return;
    }

    pages[currentPage].classList.remove("active");

    currentPage = currentPage + 1;

    pages[currentPage].classList.add("active");

    if (currentPage === pages.length - 1) {
        memoryLink.style.display = "block";
    }

});