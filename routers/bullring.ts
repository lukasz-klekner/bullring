import { Router } from "express";

export const bullringRouter = Router()

bullringRouter
    .get('/fight-form', (_, res) => {
        res.send('Fight warrior :-)')
    })
    .post('/fight', (req, res) => {
        res.send('Fight! fight!')
    })