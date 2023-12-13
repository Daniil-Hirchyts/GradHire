import {config} from "dotenv";
import {Client} from 'pg'

config()
const client = new Client()

client.connect().catch((err) => {
    console.error(err)
    process.exit(1)
})

export default client