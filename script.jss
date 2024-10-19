document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-bar');
    
    // Add dynamic focus effects on the search bar
    searchInput.addEventListener('focus', function() {
        searchInput.style.backgroundColor = "#ff6347";
        searchInput.style.color = "#fff";
    });

    searchInput.addEventListener('blur', function() {
        searchInput.style.backgroundColor = "#fff";
        searchInput.style.color = "#000";
    });

    // Additional placeholder text animation (optional)
    searchInput.addEventListener('input', function() {
        if (searchInput.value !== "") {
            searchInput.style.backgroundColor = "#ff6347";  // Keep the red background while typing
        } else {
            searchInput.style.backgroundColor = "#fff";     // Revert when empty
        }
    });
});

