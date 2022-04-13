export function getAuthForm(){
    return `
    <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
      <input type="text" id="username" required>
      <label>Username</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
      <input type="email" id="email-inp" required>
      <label>Email Address</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
      <!-- <textarea required></textarea> -->
      <input type="password" id="password-inp" required>
      <label>Password</label>
    </div>
    <button type="submit" id="enter-new" class="mui-btn mui-btn--raised mui-btn--primary">Continue</button>
    </form>
    `
}

export function registerWithEmail(email, password){
    const apiKey = 'AIzaSyAf--UZ5-AdKXMQnWrI-o7WhhKa1128OBM'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json()) 
    //.then(data => console.log(data))
}

export function loginWithEmail(email, password){
    const apiKey = 'AIzaSyAf--UZ5-AdKXMQnWrI-o7WhhKa1128OBM'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json()) 
    //.then(data => console.log(data))
}