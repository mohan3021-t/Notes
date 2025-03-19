document.addEventListener("DOMContentLoaded", function () {
    let searchBar = document.getElementById('searchBar');
    let filterClass = document.getElementById('filterClass');
    let filterSubject = document.getElementById('filterSubject');

    function filterNotes() {
        let selectedClass = filterClass.value;
        let selectedSubject = filterSubject.value;
        let notes = document.querySelectorAll('.note');

        notes.forEach(note => {
            let noteClasses = note.classList; // Get class names

            let isClassMatch = selectedClass === "all" || noteClasses.contains(selectedClass);
            let isSubjectMatch = selectedSubject === "all" || noteClasses.contains(selectedSubject);

            if (isClassMatch && isSubjectMatch) {
                note.style.display = "block";
            } else {
                note.style.display = "none";
            }
        });
    }

    function toggleClasses(subject) {
        let classSection = document.getElementById(subject);
        classSection.style.display = classSection.style.display === "none" ? "block" : "none";
    }

    function showNotes(selectedClass, selectedSubject) {
        let notes = document.querySelectorAll('.note');

        notes.forEach(note => {
            let noteClasses = note.classList;
            let isClassMatch = noteClasses.contains(selectedClass);
            let isSubjectMatch = noteClasses.contains(selectedSubject);

            if (isClassMatch && isSubjectMatch) {
                note.style.display = "block";
            } else {
                note.style.display = "none";
            }
        });
    }

    // Search Function
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

    // Apply filters when dropdown changes
    filterClass.addEventListener("change", filterNotes);
    filterSubject.addEventListener("change", filterNotes);

    // Ensure filtering works on page load
    filterNotes();

    // Expose toggle function globally
    window.toggleClasses = toggleClasses;
    window.showNotes = showNotes;
});
