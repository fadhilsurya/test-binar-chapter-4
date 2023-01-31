const { Op } = require('sequelize')
const { Student } = require('./models')
class User {
    async postsighup(email, password) {

        // Logic <---
        let value = {
            name: "fadhil",
            gender: "pria",
            hobby: "coding",
            score: 80
        }

        if (value.name == 'fadhil') {
            value.score = 100
        }

        // // Insert value to database <----
        // await Student.Create(value)

        // find

        const listStudent = await Student.find({
            where: {
                score: {
                    [Op.gte]: 75
                }
            }
        })

        console.log(`successfully inject to controller email ${email}`)
        console.log(`successfully inject to controller email ${password}`)
        return
    }
}

module.exports = User