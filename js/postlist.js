fetch('../posts.json')
.then(response => response.json())
.then(data => {
    const postsTableBody = document.querySelector('#posts tbody');

    // Sort the posts by date in descending order
    data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });

    recentPosts.forEach(post => {
        const row = postsTableBody.insertRow();
        const dateCell = row.insertCell(0);
        const titleCell = row.insertCell(1);
        
        dateCell.textContent = post.date;
        dateCell.style.textAlign = "left";
        
        // Set title text and make it clickable with link
        const titleLink = document.createElement('a');
        titleLink.href = post.linksto;
        titleLink.textContent = post.title;
        titleCell.appendChild(titleLink);
        titleCell.style.textAlign = "right";
    });
})
.catch(error => {
    console.error('Error fetching posts data: ', error);
});

// get screen aspect ratio
document.addEventListener("DOMContentLoaded", function() {
    
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    var aspectRatio = windowWidth / windowHeight;

    if (aspectRatio > 1.4) {
        document.body.style.width = "30%";
    } else if (aspectRatio >= 1 && aspectRatio <= 1.4) {
        document.body.style.width = "40%";
    } else {
        document.body.style.width = "85%";
    }
});