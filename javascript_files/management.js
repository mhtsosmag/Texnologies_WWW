function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        localStorage.setItem('adminLoggedIn', 'true');
        alert("Successful login!");
    } else {
        alert("Invalid username or password.");
    }

    return true;
}

function logout() {
    localStorage.removeItem('adminLoggedIn');
    alert("Successfully logged out!");
    hideAdminOptions(); // Απόκρυψε τις επιλογές διαχείρισης
    return false;
}

function showAdminOptions() {
    document.getElementById("songsManagement").style.display = "block";
    document.getElementById("linksManagement").style.display = "block";
}

function hideAdminOptions() {
    document.getElementById("songsManagement").style.display = "none";
    document.getElementById("linksManagement").style.display = "none";
}

// Έλεγχος για την κατάσταση σύνδεσης κατά τη φόρτωση της σελίδας
window.onload = function() {
    var adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
        showAdminOptions();
    } else {
        hideAdminOptions();
    }
};

