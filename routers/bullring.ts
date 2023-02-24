import { Router } from "express";
import { WarriorRecord } from "../records/Warrior";
import { ValidationError } from "../utils/errors";

export const bullringRouter = Router()

bullringRouter
    .get('/fight-form', async (_, res) => {
        const warriors = await WarriorRecord.listAll()

        res.render('bullring/fight-form', {
            warriors
        })
    })
    .post('/fight', async (req, res) => {
        const { warrior1: warrior1Id, warrior2: warrior2Id } = req.body

        if(warrior1Id === warrior2Id){
            throw new ValidationError('The same warrior! Change one of them to start a battle')
        }

        const warrior1 = await WarriorRecord.findOne(warrior1Id)
        const warrior2 = await WarriorRecord.findOne(warrior2Id)

        if(warrior1){
            throw new ValidationError('The warrior1 does not exist')
        }

        if(warrior2){
            throw new ValidationError('The warrior2 does not exist')
        }

         res.render('bullring/fight')
    })