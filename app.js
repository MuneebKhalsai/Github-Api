const form = document.getElementById('form');
const id = document.getElementById('id');
    const div = document.querySelector('div');
form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const userId = id.value.trim();
axios(`https://api.github.com/users/${userId}`)
.then(res => {
    div.innerHTML = "";
    const data = res.data;
    div.innerHTML += `
    <div class = "card">
    <img src = '${data.avatar_url}' width = '240px'>
    <br>
    Name: ${data.name}
    <br>
    Bio: ${data.bio}
    <br>
    Id: ${data.id}
    <br>
    Location: ${data.location}
    <br>
    Email:${data.email}
    <br>
    </div>
    `;
})
.catch(err => {
    console.log('Error' , err);
    alert('Github Username Is Invalid');
});
});




 // Extra spaces remove karega

    // if (!userId) {
    //     alert('Please enter a valid GitHub username');
    //     return;
    // }

