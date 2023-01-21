const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const STATUS = process.env.STATUS || 'DEV'
const userRoute = require('./routes/user')

console.log(PORT)
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.set('view engine', 'ejs')
app.use('/user', userRoute)

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

