// nuh uh no js here
// dogshit fuckass language
//
//
//
//
// i lied
fetch('./posts.json')
        .then(response => response.json())
        .then(data => {
            const postsTableBody = document.querySelector('#posts tbody');

            data.forEach(post => {
                const row = postsTableBody.insertRow();
                const dateCell = row.insertCell(0);
                const titleCell = row.insertCell(1);
                dateCell.textContent = post.date;
                titleCell.innerHTML = `<a href="${post.linksto}">${post.title}</a>`;
            });
        })
        .catch(error => {
            console.error('Error fetching posts data: ', error);
        });