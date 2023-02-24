import * as express from "express"
import { static as eStatic, json } from "express"
import "express-async-errors"
import { engine } from "express-handlebars"
import * as methodOverride from "method-override"
import { bullringRouter } from "./routers/bullring"
import { hallOfFameRouter } from "./routers/hall-of-fame"
import { homeRouter } from "./routers/home"
import { warriorRouter } from "./routers/warrior"
import { handleError } from "./utils/errors"
import "./utils/db"

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

app.use('/', homeRouter)
app.use('/warrior', warriorRouter)
app.use('/bullring', bullringRouter)
app.use('/hall-of-fame', hallOfFameRouter)

// TO DO : catch errors
app.use(handleError)

app.listen(3000, 'localhost', () => {
    console.log('listening on http://localhost')
})