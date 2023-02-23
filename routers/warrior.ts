import { Router } from "express";

export const warriorRouter = Router()

warriorRouter
    .get('/add-form', (_, res) => {
        res.render('warrior/add-form')
    })
    .post('/', (req, res) => {
        res.send('warrior/added')
    })