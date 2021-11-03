import express from 'express'
import router from './src/router/index'
import {config} from 'dotenv'

config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use('/', router)

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()