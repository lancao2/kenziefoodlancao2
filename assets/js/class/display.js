import {App} from "./../login.js"
import { Url } from "./handleUrl.js"
class Display {
    static displayLogin(){
        let h2 = document.createElement("h2")
        h2.innerText = "Login"
        h2.classList.add("login--title")
        let div = document.createElement('div')
        div.classList.add("form-container")
        let divTop = document.createElement('div')
        divTop.classList.add("title--top")
        let titleLogoBlack = document.createElement("p")
        titleLogoBlack.classList.add("title--logo")
        titleLogoBlack.classList.add("title--logo--black")
        titleLogoBlack.innerText = "Kenzie"
        let titleLogoRed = document.createElement("span")
        titleLogoRed.classList.add("title--logo")
        titleLogoRed.classList.add("title--logo--red")
        titleLogoRed.innerText = "Food"
        titleLogoBlack.appendChild(titleLogoRed)
        divTop.appendChild(titleLogoBlack)
        let form = document.createElement('form')
        let labelEmail = document.createElement('label')
        let labelPw = document.createElement('label')
        let inputEmail = document.createElement('input')
        let inputPw = document.createElement('input')
        labelPw.setAttribute("for","password")
        inputEmail.setAttribute("name","email")
        inputEmail.classList.add("field")
        inputEmail.setAttribute("placeholder","E-mail")
        inputPw.setAttribute("type","password")
        inputPw.setAttribute("name","password")
        inputPw.setAttribute("placeholder","Senha")
        inputPw.classList.add("field")
        let button = document.createElement("button")
        button.classList.add("login--button")
        button.innerText = "Entrar"
        let textRegister = document.createElement("p")
        textRegister.classList.add("link--text")
        textRegister.innerText = "Não tem conta?"
        let linkRegister = document.createElement("a")
        linkRegister.innerText = " Cadastre-se Agora!"
        linkRegister.classList.add("link--register")
        let textOr = document.createElement("p")
        textOr.innerText = "Ou"
        textOr.classList.add("link--text")
        let linkSkipLogin = document.createElement("a")
        linkSkipLogin.innerText = "Continuar sem se identificar"
        linkSkipLogin.classList.add("link--text")
        labelEmail.setAttribute("for","email")
        button.setAttribute("type", "button")
        form.appendChild(labelEmail)
        form.appendChild(inputEmail)
        form.appendChild(labelPw)
        form.appendChild(inputPw)
        form.appendChild(button)
        div.appendChild(divTop)
        div.appendChild(h2)
        div.appendChild(form)
        textRegister.appendChild(linkRegister)
        div.appendChild(textRegister)
        div.appendChild(textOr)
        div.appendChild(linkSkipLogin)
        document.querySelector('main').appendChild(div)
        linkRegister.addEventListener("click", ()=> this.changeToRegister())
        button.addEventListener("click", ()=> App.login(form))
        linkSkipLogin.addEventListener("click", ()=> Url.goHome())
    }

    static displayRegister(){
        let h2 = document.createElement("h2")
        h2.innerText = "Register"
        h2.classList.add("login--title")
        let div = document.createElement('div')
        div.classList.add("form-container")
        let divTop = document.createElement('div')
        divTop.classList.add("title--top")
        let titleLogoBlack = document.createElement("p")
        titleLogoBlack.classList.add("title--logo")
        titleLogoBlack.classList.add("title--logo--black")
        titleLogoBlack.innerText = "Kenzie"
        let titleLogoRed = document.createElement("span")
        titleLogoRed.classList.add("title--logo")
        titleLogoRed.classList.add("title--logo--red")
        titleLogoRed.innerText = "Food"
        titleLogoBlack.appendChild(titleLogoRed)
        divTop.appendChild(titleLogoBlack)
        let form = document.createElement('form')
        let labelEmail = document.createElement('label')
        labelEmail.setAttribute("for","email")
        let labelName = document.createElement('label')
        labelName.setAttribute("for","name")
        let labelPw = document.createElement('label')
        labelPw.setAttribute("for","password")
        let inputEmail = document.createElement('input')
        inputEmail.setAttribute("name","email")
        inputEmail.classList.add("field")
        inputEmail.setAttribute("placeholder","E-mail")
        let inputPw = document.createElement('input')
        inputPw.setAttribute("type","password")
        inputPw.setAttribute("name","password")
        inputPw.setAttribute("placeholder","Senha")
        inputPw.classList.add("field")
        let inputName = document.createElement('input')
        inputName.setAttribute("name", "name")
        inputName.classList.add("field")
        inputName.setAttribute("placeholder", "Nome")      
        let button = document.createElement("button")
        button.classList.add("login--button")
        button.innerText = "Registrar"
        let textLogin = document.createElement("a")
        textLogin.classList.add("link--text")
        textLogin.innerText = "Voltar ao Login"
        let textOr = document.createElement("p")
        textOr.innerText = "Ou"
        textOr.classList.add("link--text")
        let linkSkipLogin = document.createElement("a")
        linkSkipLogin.innerText = "Continuar sem se identificar"
        linkSkipLogin.classList.add("link--text")
        button.setAttribute("type", "button")
        form.appendChild(labelName)
        form.appendChild(inputName)
        form.appendChild(labelEmail)
        form.appendChild(inputEmail)
        form.appendChild(labelPw)
        form.appendChild(inputPw)
        form.appendChild(button)
        div.appendChild(divTop)
        div.appendChild(h2)
        div.appendChild(form)
        div.appendChild(textLogin)
        div.appendChild(textOr)
        div.appendChild(linkSkipLogin)
        document.querySelector('main').appendChild(div)
        textLogin.addEventListener("click", ()=> this.changeToLogin())
        button.addEventListener("click", ()=> App.register(form))
        linkSkipLogin.addEventListener("click", ()=> Url.goHome())
    }

    static resetMain(){
        document.querySelector("main").innerHTML = ""
    }

    static changeToRegister(){
        this.resetMain();
        this.displayRegister();
    }

    static changeToLogin(){
        this.resetMain();
        this.displayLogin();
    }
}

export {Display}