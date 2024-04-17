const getData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        if (!response.ok) {
            alert('No fue posible recuperar los datos.')
            throw new Error('No se pudieron recuperar los datos');
        }
        let data = await response.json();
        renderPosts(data);
    } catch (error) {
        console.error('Fallo: ', error);
    }
}

const renderPosts = (data) => {
    let postSave = '';
    data.forEach(posts => {
        postSave +=
            `<li>
        <h3>${posts.title}</h3>
        <p>${posts.body}</p>
        </li>`
    });
    document.querySelector('#post-data').innerHTML = postSave;
}