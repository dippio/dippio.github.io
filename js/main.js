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

        // Calculate the number of hyphens needed to extend to the edges of the viewport
        const titleLength = post.title.length;
        const viewportWidth = window.innerWidth;
        const hyphenCount = Math.max(viewportWidth - titleLength - 10, 0); // Adjust as needed

        // Create a string of hyphens with the calculated count
        const hyphens = '-'.repeat(hyphenCount);

        // Concatenate title, hyphens, and date
        const hyphenatedTitle = `${post.title} ${hyphens} ${post.date}`;
        dateCell.textContent = "";
        titleCell.innerHTML = `<a href="${post.linksto}">${hyphenatedTitle}</a>`;
    });
})
.catch(error => {
    console.error('Error fetching posts data: ', error);
});
