import { Router } from "express";
import { WarriorRecord } from "../records/Warrior";
import { ValidationError } from "../utils/errors";

export const warriorRouter = Router()

warriorRouter
    .get('/add-form', (_, res) => {
        res.render('warrior/add-form')
    })
    .post('/', async (req, res) => {
        const { name, power, defence, strength, agility } = req.body

        if(await WarriorRecord.isNameUsed(name)){
            throw new ValidationError('This name is already used')
        }

        const warrior = new WarriorRecord({
            ...req.body,
            power: Number(power),
            defence: Number(defence),
            strength: Number(strength),
            agility: Number(agility),
        })

        await warrior.insert()

        res.render('warrior/added', {
            name: name,
        })
    })