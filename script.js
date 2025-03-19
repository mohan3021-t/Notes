// SEARCH FUNCTION
document.getElementById("searchBar").addEventListener("keyup", function () {
    let input = this.value.toLowerCase();
    let notes = document.querySelectorAll(".note");

    notes.forEach(note => {
        let title = note.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
});

// TOGGLE FUNCTION FOR SUBJECTS & CLASSES
function toggleClasses(subject) {
    let classSection = document.getElementById(subject);
    if (classSection.style.display === "none" || classSection.style.display === "") {
        classSection.style.display = "block";
    } else {
        classSection.style.display = "none";
    }
}

// FILTER FUNCTION FOR CLASS & SUBJECT
function filterNotes() {
    let selectedClass = document.getElementById("filterClass").value;
    let selectedSubject = document.getElementById("filterSubject").value;
    let notes = document.querySelectorAll(".note");

    notes.forEach(note => {
        let noteClasses = note.classList;
        let isClassMatch = selectedClass === "all" || noteClasses.contains(selectedClass);
        let isSubjectMatch = selectedSubject === "all" || noteClasses.contains(selectedSubject);

        if (isClassMatch && isSubjectMatch) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
}

// ADD EVENT LISTENERS TO FILTERS
document.getElementById("filterClass").addEventListener("change", filterNotes);
document.getElementById("filterSubject").addEventListener("change", filterNotes);
// SEARCH FUNCTION (Searches both titles & content)
document.getElementById("searchBar").addEventListener("keyup", function () {
    let input = this.value.toLowerCase();
    let notes = document.querySelectorAll(".note");

    notes.forEach(note => {
        let title = note.getAttribute("data-title").toLowerCase();
        let content = note.textContent.toLowerCase(); // Searches inside the note content too

        if (title.includes(input) || content.includes(input)) {
            note.style.display = "block";
        } else {
            note.style.display = "none";
        }
    });
});
