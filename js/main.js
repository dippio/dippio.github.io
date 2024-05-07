//  formats pages based on device type
document.addEventListener("DOMContentLoaded", function() {
    
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    var aspectRatio = windowWidth / windowHeight;

    if (aspectRatio > 1.4) {
        mainContentBox.style.width = "23vw";
    } else if (aspectRatio >= 1 && aspectRatio <= 1.4) {
        mainContentBox.style.width = "40vw";
    } else {
        mainContentBox.style.width = "85vw";
    }
});

// post loader
fetch('../posts.json')
.then(response => response.json())
    .then(data => {
        document.addEventListener("DOMContentLoaded", function() {
            const postsTableBody = document.querySelector('#posts tbody');

            // sort by date
            data.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            });

            // only 3 posts for home page
            if (document.title === "tyler batkin // welcome" || "tylerbatk.in // welcome") { 
                data = data.slice(0, 3);
            }

            data.forEach(post => {
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
        });
    })
    .catch(error => {
        console.error('Error fetching posts data: ', error);
    });




// random flavor text for main page
document.addEventListener("DOMContentLoaded", function() {
    var flavorText = [
        "hacker by day, sleeper by night",
        "monster energy fiend",
        "ctrl + ccccccccccccc, ctrl + v",
        "interplanetary good vibe zone",
        "this is the return, of the space cowboy",
        "see you later, space cowboy",
    ];
    var randIndex = Math.floor(Math.random() * flavorText.length);
    var flavorText = flavorText[randIndex];
    
    var flavorTextElement = document.getElementById("flavorText");
    flavorTextElement.innerHTML = "<i>" + flavorText + "</i>";
});




// date stuff for posts
if (window.location.pathname.includes("/posts/")) {
    // format as dd / mm / yy
    function formatDate(date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear().toString().substr(-2); // Get last two digits of the year
        return (day < 10 ? '0' : '') + day + ' / ' + (month < 10 ? '0' : '') + month + ' / ' + year;
    }

    var modificationDate = new Date(document.lastModified);

    var formattedModificationDate = formatDate(modificationDate);

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("modificationDate").textContent = formattedModificationDate;
    });
}
