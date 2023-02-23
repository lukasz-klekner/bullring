import { ValidationError } from "../utils/errors";

export class WarriorRecord {
    _id?: string;
    readonly name: string;
    readonly power: number;
    readonly defence: number;
    readonly strength: number;
    readonly agility: number;
    wins?: number;

    constructor(object: WarriorRecord){
        const { _id, name, power, defence, strength, agility, wins } = object;

        const sum = [power, defence, strength, agility].reduce((prev,current) => prev+current, 0) 

        if(sum !== 10) {
            throw new ValidationError('Sum of all skills need to be equal 10.')
        }

        if (name.length <3 || name.length > 50){
            throw new ValidationError('Name needs to have from 3 to 50 characters')
        }

        this._id = _id,
        this.name = name,
        this.power = power,
        this.defence = defence
        this.strength = strength
        this.agility = agility
        this.wins = wins
    }
}