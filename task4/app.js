import { getAuthForm, registerWithEmail, loginWithEmail } from './auth'
import './main.css'
import {User} from './users.js'
import { createModal } from './utilits.js'
console.log('script works')

const form = document.getElementById('form')
let userMail = document.getElementById('email-inp')
let userName = document.getElementById('username')
//let userPwrd = document.getElementById('password-inp')
//const enterBtn = document.getElementById('enter-new')
const signBtn = document.getElementById('login-btn')
const modalBtn = document.getElementById('modal-btn')

window.addEventListener('load', User.renderList)
form.addEventListener('load', submitFormHandler)
modalBtn.addEventListener('click', openModal)
signBtn.addEventListener('click', openLoginModal)

function submitFormHandler(event){
    event.preventDefault()
    // console.log(userName.value)
    // console.log(userMail.value)
    const user = {
        text: event.target.querySelector('#username').value,
        date: new Date().toJSON(),
        mail: event.target.querySelector('#email-inp').value,
    }

    User.create(user).then(() => {
        console.log('User: ', user)
        userMail.value = ''
        userMail.className = ''
        userName.value = ''
        userName.className = ''
    })
}

function openModal() {
    createModal('Autorisation: ', getAuthForm())
    document.getElementById('auth-form')
    document.addEventListener('submit', registerFormHandler, {once: true})
}

function openLoginModal() {
    createModal('Autorisation: ', getAuthForm())
    document.getElementById('auth-form')
    document.addEventListener('submit', loginFormHandler, {once: true})
}

function registerFormHandler(event){
    event.preventDefault()
    const email = event.target.querySelector('#email-inp').value
    const password = event.target.querySelector('#password-inp').value
    //const name = event.target.querySelector('#username-input').value
    registerWithEmail(email, password)
}

function loginFormHandler(event){
    event.preventDefault()
    const email = event.target.querySelector('#email-inp').value
    const password = event.target.querySelector('#password-inp').value
    //const name = event.target.querySelector('#username-input').value
    loginWithEmail(email, password)
}