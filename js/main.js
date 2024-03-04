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
