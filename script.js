function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); // Simulate data fetching completion
        }, 3000); // Simulate 3 seconds delay
    });
}

// Show loading page
document.getElementById('loading').style.display = 'block';

// Fetch data asynchronously
fetchData().then(() => {
    // Hide loading page
    document.getElementById('loading').style.display = 'none';
    
    // Show main content
    document.getElementById('content').style.display = 'block';
});