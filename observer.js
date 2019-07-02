//publish / subscribe
//Not working atm (just to explain the pattern)
const user = new User()

const init = () => {
    user.on('login', userLoggedIn)
}

const userLoggedIn = () => {
    //user logged
}

//app.init()

// somewhere else in app
const login = () => {
    //login logic
    //...
    user.trigger('login')
}

login()