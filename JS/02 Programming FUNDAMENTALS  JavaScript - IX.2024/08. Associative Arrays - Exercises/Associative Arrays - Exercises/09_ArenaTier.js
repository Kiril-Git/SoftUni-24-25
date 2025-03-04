function manipulatingMDArrs (inputArr) {

    let pool = {}

    while (inputArr[0] !== 'Ave Cesar') {

        if (inputArr[0].includes('->')) {

        let [name, tech, skill] = inputArr.shift().split(' -> ')
            skill = +skill

            if (!pool[name]) {
                pool[name] = {}
            }

            if (!pool[name][tech] || pool[name][tech] < skill) {
                pool[name][tech] = skill
            }
        }

        else if (inputArr[0].includes('vs')) {

            let [name1, name2] = inputArr.shift().split(' vs ')

            if (pool[name1] && pool[name2]) {

                let tech1 = Object.keys(pool[name1])
                let tech2 = Object.keys(pool[name2])

                let commonTechs = tech1.filter(el => tech2.includes(el))

                if ( commonTechs.length > 0) {

                    let totalSkill1 = Object.values(pool[name1]).reduce((a, b) => a + b, 0)
                    let totalSkill2 = Object.values(pool[name2]).reduce((a, b) => a + b, 0)

                    if (totalSkill1 > totalSkill2) {
                        delete pool[name2]
                    }
                    else if (totalSkill2 > totalSkill1) {
                        delete pool[name1]
                    }
                }
            }
        }
    }

    let sortedPool = Object.entries(pool)
        .map(([name, techs]) => ({
            name,
            totalSkill: Object.values(techs).reduce((a, b) => a + b, 0),
            techs
        }))
        .sort((a, b) => b.totalSkill - a.totalSkill || a.name.localeCompare(b.name))


        for (let { name, totalSkill, techs } of sortedPool) {

            console.log(`${name}: ${totalSkill} skill`)
        
        Object.entries(techs)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([techs, skill]) => console.log(`- ${techs} <!> ${skill}`))    
        }

}

manipulatingMDArrs([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
     )



    //  print:             Gladius: 700 skill
    //                     - Shield <!> 250
    //                     - Support <!> 250
    //                     - Heal <!> 200
    //                     Peter: 400 skill
    //                     - Duck <!> 400

    //


