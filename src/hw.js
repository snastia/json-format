import './styles.css'
import hbs from './users.handlebars'
import users from './users.js'

const render = (hbs, users) => {
    const ppl = document.getElementById('ppl')
    ppl.innerHTML = hbs(users)
}
render(hbs, users)