import { Router } from "express";

export const hallOfFameRouter = Router()

hallOfFameRouter.get('/', (_, res) => {
    res.render('hall-of-fame/list')
})