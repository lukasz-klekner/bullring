import { ObjectId } from "mongodb";
import { warriorCollection } from "../utils/db";
import { ValidationError } from "../utils/errors";

interface WarriorSchema {
    _id?: ObjectId;
    readonly name: string;
    readonly power: number;
    readonly defence: number;
    readonly strength: number;
    readonly agility: number;
    wins?: number;   
}

export class WarriorRecord {
    _id?: ObjectId;
    readonly name: string;
    readonly power: number;
    readonly defence: number;
    readonly strength: number;
    readonly agility: number;
    wins?: number;

    constructor(object: WarriorSchema){
        const { _id, name, power, defence, strength, agility, wins } = object;

        const stats = [power, defence, strength, agility]

        for(const stat of stats){
            if(stat < 1){
                throw new ValidationError('Any skill needs to be grater than 1.') 
            }
        }

        const sum = stats.reduce((prev,current) => prev+current, 0)
        
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
        this.wins = wins ?? 0
    }

    async insert(){
        await warriorCollection.insertOne(this)

        return this._id.toString()
    } 

    async update(){
        await warriorCollection.updateOne({
            _id: this._id,
        }, {
            ...this,
            wins: this.wins
        })
    }   
    
    static async findOne(id: string): Promise<WarriorRecord | null>{
        const result = await warriorCollection.findOne({
            _id: new ObjectId(id)
        }) as WarriorSchema

        return result === null ? null : new WarriorRecord(result)
    }

    static async listAll(){
        return (await warriorCollection.find().toArray() as WarriorRecord[]).map(obj => new WarriorRecord(obj))
    }

    static async listTop(topCounter: number){
        return (await warriorCollection.find().sort({ wins: -1 }).toArray() as WarriorRecord[]).splice(0, topCounter).map(obj => new WarriorRecord(obj))
    }

}