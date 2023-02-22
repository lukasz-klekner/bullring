import * as express from "express"
import { static as eStatic, json } from "express"
import "express-async-errors"
import { engine } from "express-handlebars"
import * as methodOverride from "method-override"


const app = express()

app.use(eStatic('public'))
app.use(express.urlencoded({
    extended: true,
}))
app.use(json())
app.use(methodOverride('_method'))

app.engine('.hbs', engine({
    extname: '.hbs',
    //helpers: ????
}))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.send('Dziala!')
})

// TO DO : chat errors

app.listen(3000, 'localhost', () => {
    console.log('listening on http://localhost')
})