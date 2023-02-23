import { MongoClient } from "mongodb";

const URL = 'mongodb://localhost:27017';
const DB_NAME = 'bullring'
const WARRIOR_COLLECTION = 'warrior'

const client = new MongoClient(URL)
client.connect()
const db = client.db(DB_NAME)

export const warriorCollection = db.collection(WARRIOR_COLLECTION)