// nuh uh no js here
// dogshit fuckass language
//
//
//
//
// i lied
// chatgpt my goat
fetch('./posts.json')
.then(response => response.json())
.then(data => {
    const postsTableBody = document.querySelector('#posts tbody');

    // Sort the posts by date in descending order
    data.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });

    // Take only the three most recent posts
    const recentPosts = data.slice(0, 3);

    recentPosts.forEach(post => {
        const row = postsTableBody.insertRow();
        const dateCell = row.insertCell(0);
        const titleCell = row.insertCell(1);
        
        // Add hyphens between date and title
        const hyphenatedTitle = `${post.title} ----------------- ${post.date}`;
        dateCell.textContent = "";
        titleCell.innerHTML = `<a href="${post.linksto}">${hyphenatedTitle}</a>`;
        
        // Align date to the right and title to the left
        dateCell.style.textAlign = "right";
        titleCell.style.textAlign = "left";
    });
})
.catch(error => {
    console.error('Error fetching posts data: ', error);
});
