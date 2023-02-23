import { Router } from "express";

export const bullringRouter = Router()

bullringRouter
    .get('/fight-form', (_, res) => {
        res.render('bullring/fight-form')
    })
    .post('/fight', (req, res) => {
        res.render('bullring/fight')
    })