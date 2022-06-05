const express = require('express')
const app = express()
const PORT = 8000

const wowClasses = {
    'death knight': {
        'numOfSpecs': 3,
        'specNames': 'Blood, Frost, Unholy',
        'roles': 'DPS, Tank'
    },
    'demon hunter': {
        'numOfSpecs': 2,
        'specNames': 'Havoc, Vengeance',
        'roles': 'DPS, Tank'
    },
    'druid': {
        'numOfSpecs': 4,
        'specNames': 'Restoration, Balance, Guardian, Feral',
        'roles': 'DPS, Tank, Healer'
    },
    'hunter': {
        'numOfSpecs': 3,
        'specNames': 'Beast Mastery, Marksmanship, Survival',
        'roles': 'DPS only'
    },
    'mage': {
        'numOfSpecs': 3,
        'specNames': 'Fire, Frost, Arcane',
        'roles': 'DPS only'
    },
    'monk': {
        'numOfSpecs': 3,
        'specNames': 'Brewmaster, Mistweaver, Windwalker',
        'roles': 'DPS, Tank'
    },
    'paladin': {
        'numOfSpecs': 3,
        'specNames': 'Protection, Retribution, Holy',
        'roles': 'DPS, Tank, Healer'
    },
    'priest': {
        'numOfSpecs': 3,
        'specNames': 'Holy, Discipline, Shadow',
        'roles': 'DPS, Healer'
    },
    'rogue': {
        'numOfSpecs': 3,
        'specNames': 'Subtlety, Assassination, Outlaw',
        'roles': 'DPS only'
    },
    'shaman': {
        'numOfSpecs': 3,
        'specNames': 'Restoration, Enhancement, Elemental',
        'roles': 'DPS, Healer'
    },
    'warlock': {
        'numOfSpecs': 3,
        'specNames': 'Affliction, Destruction, Demonology',
        'roles': 'DPS only'
    },
    'warrior': {
        'numOfSpecs': 3,
        'specNames': 'Protection, Arms, Fury',
        'roles': 'DPS, Tank'
    },
    'unknown': {
        'numOfSpecs': 0,
        'specNames': 'unknown',
        'roles': 'unknown'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:className', (request, response) => {
    const wowClassName = request.params.className.toLowerCase()
    if(wowClasses[wowClassName]) {
        response.json(wowClasses[wowClassName])
    }else{
        response.json(wowClasses['unknown'])
    }   
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}, BETTER GO CATCH IT!`)
})