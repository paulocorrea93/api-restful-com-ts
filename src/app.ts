import express from 'express'
import config from 'config'

const app = express()

app.use(express())

const port = config.get<number>("port")

app.listen(port, async () => {
    console.log(`conectado a porta: ${port}`)
})