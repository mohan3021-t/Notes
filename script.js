document.addEventListener("DOMContentLoaded", function () {
    let searchBar = document.getElementById('searchBar');
    let filterCategory = document.getElementById('filterCategory');

    // Search Functionality
    searchBar.addEventListener("keyup", function () {
        let input = searchBar.value.toLowerCase();
        let notes = document.querySelectorAll('.note');

        notes.forEach(note => {
            let title = note.getAttribute("data-title").toLowerCase();
            if (title.includes(input)) {
                note.style.display = "block";
            } else {
                note.style.display = "none";
            }
        });
    });

    // Category Filtering
    filterCategory.addEventListener("change", function () {
        let selectedCategory = filterCategory.value.toLowerCase();
        let notes = document.querySelectorAll('.note');

        notes.forEach(note => {
            let title = note.getAttribute("data-title").toLowerCase();
            if (selectedCategory === "all" || title.includes(selectedCategory)) {
                note.style.display = "block";
            } else {
                note.style.display = "none";
            }
        });
    });
});
