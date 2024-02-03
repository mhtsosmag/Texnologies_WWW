document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML content into the main article section
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('main-article').innerHTML = data;
            })
            .catch(error => console.error('Error loading content: ', error));
    }

    // Add event listeners to the links in the sidebar to load corresponding content
    const sidebarLinks = document.querySelectorAll('.sb-item');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove the #
            const url = targetId + '.html'; // Assuming your HTML files are named accordingly
            loadContent(url);
        });
    });

    // Load the default content when the page loads
    loadContent('who_was.html'); // Assuming 'who_was.html' is your default content
});

