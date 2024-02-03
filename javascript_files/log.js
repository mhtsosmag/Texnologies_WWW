document.addEventListener("DOMContentLoaded", function() {
    // Εδώ μπορείς να προσθέσεις κώδικα που θα εκτελείται μόλις φορτωθεί η σελίδα

    // Ελέγχει την κατάσταση σύνδεσης του διαχειριστή
    checkAdminLogin();
});

function checkAdminLogin() {
    var adminLoggedIn = localStorage.getItem('adminLoggedIn');

    // Εμφανίζει ή κρύβει τα στοιχεία διαχείρισης ανάλογα με την κατάσταση σύνδεσης
    var managementLinks = document.querySelectorAll(".management");
    managementLinks.forEach(function(link) {
        if (adminLoggedIn === 'true') {
            link.style.display = "block";
        } else {
            link.style.display = "none";
        }
    });
}
