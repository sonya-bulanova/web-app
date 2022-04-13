export class User {
    static create(user){
        return fetch ('https://web-app-5cf66-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
           method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(response => {
            user.id = response.name
            return user
        })
        .then(addToLocalStorage)
        .then(User.renderList)
    }
    static renderList(){
        const users = getUserFromLocSt()
        const html = users.length 
            ? users.map(toCard).join('')
            : `<div class="mui-textfield mui-textfield--float-label"> Please, log in or create account </div>`
        const list = document.getElementById('list')
        list.innerHTML = html
    }
}

function addToLocalStorage(user){
    const all = getUserFromLocSt()
    all.push(user)
    localStorage.setItem('users', JSON.stringify(all))
}

function getUserFromLocSt(){
    return JSON.parse(localStorage.getItem('users') || '[]')
}

function toCard(user){
    return `<div class="mui--text-black-54"></div>
    <div>${user.text}</div>
    <div>${user.mail}</div>
    <div>${new Date(user.date).toLocaleDateString()}
    ${new Date(user.date).toLocaleTimeString()}</div>
    <br>`
}