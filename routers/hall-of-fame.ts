import { Router } from "express";
import { WarriorRecord } from "../records/Warrior";

export const hallOfFameRouter = Router()

hallOfFameRouter.get('/', async (_, res) => {
    const warriors = (await WarriorRecord.listTop(10)).map((warrior, index) => ({
        place: index+1,
        ...warrior
    }))

    res.render('hall-of-fame/list', {
        warriors
    })
})