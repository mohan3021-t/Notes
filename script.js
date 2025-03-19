document.addEventListener("DOMContentLoaded", function () {
    let searchBar = document.getElementById('searchBar');

    searchBar.addEventListener("keyup", function () {
        let input = searchBar.value.toLowerCase();
        let notes = document.querySelectorAll('.note');

        notes.forEach(note => {
            let title = note.textContent.toLowerCase();
            if (title.includes(input)) {
                note.style.display = "block"; // Show matching notes
            } else {
                note.style.display = "none"; // Hide non-matching notes
            }
        });
    });
});
