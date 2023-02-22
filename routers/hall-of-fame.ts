import { Router } from "express";

export const hallOfFameRouter = Router()

hallOfFameRouter.get('/', (_, res) => {
    res.send('The list of famous players')
})