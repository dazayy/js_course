
const list = document.querySelector(".list-group");
const filter = document.getElementById("filter");

let USERS = []

async function start() {
    list.innerHTML = "<p class='title'>Loading...</p>"
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        setTimeout(() => {
            USERS = data;
            render(data);
        }, 2000);
    
    
    }
    catch (err) {
        list.innerHTML = `<p class="title">${err.message}</p>`;
        console.log(err)
    }
}


filter.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value);
    })
    render(filteredUsers);
});


function render(users=[]) {

    if (users.length === 0) {
        list.innerHTML = `<p class="title">No matched users</p>`;
    }
    else {
        const html = users.map(toHTML).join("");
        list.innerHTML = html;
    }
}

function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
        `
}

start()























