var headers = document.querySelectorAll('.rowTopics .collapsible');

// Select all sections
var sections = document.querySelectorAll('#displayArea section');

// Variable to keep track of the currently displayed section
var currentSection = null;

// Loop over each <h2> element
headers.forEach((header, index) => {
    // Add a click event listener
    header.addEventListener('click', function() {
        // Find the icon within the clicked header
        var icon = this.querySelector(".bi");

        // Select the respective <section> within the #displayArea div
        var section = sections[index];

        // If the clicked section is currently displayed, hide it
        if (section === currentSection) {
            section.style.display = 'none';
            currentSection = null;
            // If the icon is found, change its class
            if (icon) {
                icon.classList.remove("bi-caret-down-fill");
                icon.classList.add("bi-caret-right-fill");
            }
        } else {
            // Otherwise, hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // And show the clicked section
            section.style.display = 'flex';
            currentSection = section;

            // Change all icons to "bi-caret-right-fill"
            headers.forEach(header => {
                var headerIcon = header.querySelector(".bi");
                if (headerIcon) {
                    headerIcon.classList.remove("bi-caret-down-fill");
                    headerIcon.classList.add("bi-caret-right-fill");
                }
            });

            // If the icon is found, change its class
            if (icon) {
                icon.classList.remove("bi-caret-right-fill");
                icon.classList.add("bi-caret-down-fill");
            }
        }
    });
});