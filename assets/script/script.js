function showModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  function hideModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.getElementById("category-dropdown-btn");
    const dropdownContent = document.getElementById("category-dropdown-content");

    dropdownBtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches("#category-dropdown-btn")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});