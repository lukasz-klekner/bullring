import { Router } from "express";

export const homeRouter = Router()

homeRouter.get('/', (_, res) => {
    res.send('Dziala! v2')
})