import { WarriorRecord } from "../records/Warrior";

export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): {
    logs: string[],
    winner: WarriorRecord
} => {
    const logs: string[] = []

    const warrior1Obj = {
        hp: warrior1.strength * 10,
        dp: warrior1.defence,
        warrior: warrior1
    }

    const warrior2Obj = {
        hp: warrior2.strength * 10,
        dp: warrior2.defence,
        warrior: warrior2
    }

    let attacker = warrior1Obj
    let defender = warrior2Obj

    do {
        const attackStrength = attacker.warrior.power

        logs.push(`${attacker.warrior.name} will attack ${defender.warrior.name} with power of ${attackStrength}`)

        if(defender.dp + defender.warrior.agility > attackStrength) {
            logs.push(`${defender.warrior.name} defends attack from ${attacker.warrior.name}`)
            defender.dp -= attackStrength

            if(defender.dp < 0){
                logs.push(`${attacker.warrior.name} hits ${defender.warrior.name} with power of ${defender.dp}`)

                defender.hp += defender.dp
            }
        } else {
            logs.push(`${attacker.warrior.name} hits with power of ${attackStrength}`)

            defender.hp -= attackStrength
        }

        [defender, attacker] = [attacker, defender]
    } while (attacker.hp > 0)

    const winner = defender.warrior
    logs.push(`${winner.name} wins!!!`)

    return {
        logs,
        winner
    }
}