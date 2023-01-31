const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const STATUS = process.env.STATUS || 'DEV'
const userRoute = require('./routes/user')

if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
    require('dotenv').config()
}

console.log(PORT)
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.set('view engine', 'ejs')
app.use('/user', userRoute)

import * as pg from 'pg';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:postgrespw@localhost:32768/postgres', {
    dialectModule: pg
});

app.listen(PORT, () => {
    if (STATUS == 'DEV') {
        console.log(`listening to port ${PORT} live and well in DEV enviroment`)
    } else if (STATUS == 'PROD') {
        console.log(`listening to port ${PORT} live and well in PROD enviroment`)
    } else {
        console.log('cannot read status error')
        return
    }
})

