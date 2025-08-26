 const itemsPerPage = 8; // ✅ 8 items per page
  const items = document.querySelectorAll(".gallery-items > div");
  const totalPages = Math.ceil(items.length / itemsPerPage);

  let currentPage = 1;

  function showPage(page) {
    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    items.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "block" : "none";
    });

    document.querySelectorAll(".pagination a.page").forEach((a) =>
      a.classList.remove("active")
    );
    document
      .querySelector(`.pagination a.page[data-page="${page}"]`)
      .classList.add("active");
  }

  function createPagination() {
    const pagesContainer = document.querySelector(".pagination .pages");
    pagesContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      let link = document.createElement("a");
      link.href = "#";
      link.textContent = i;
      link.dataset.page = i;
      link.classList.add("page");
      if (i === 1) link.classList.add("active");
      pagesContainer.appendChild(link);
    }
  }

  // Initial setup
  createPagination();
  showPage(currentPage);

  // Event delegation
  document.querySelector(".pagination").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("page")) {
      currentPage = parseInt(e.target.dataset.page);
      showPage(currentPage);
    } else if (e.target.classList.contains("prev") && currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    } else if (
      e.target.classList.contains("next") &&
      currentPage < totalPages
    ) {
      currentPage++;
      showPage(currentPage);
    }
  });