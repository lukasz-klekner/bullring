import { Router } from "express";

export const warriorRouter = Router()

warriorRouter
    .get('/add-form', (_, res) => {
        res.send('Dziala! warrior')
    })
    .post('/', (req, res) => {
        res.send('Adding a warrior')
    })