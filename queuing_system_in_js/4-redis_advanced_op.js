import { createClient, print } from 'redis';
import { promisify } from "util";
const client = createClient();
const hgetall = promisify(client.hgetall).bind(client);

client.on("connect", () => {
    console.log("Redis client connected to the server");
})

client.on("error", (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
})

async function main() {
    const values_school = {
        Portland: 50,
        Seattle: 80,
        "New York": 20,
        Bogota: 20,
        Cali: 40,
        Paris: 2,
    }

    for (const value in values_school) {
        client.hset("HolbertonSchools", value, values_school[value], print)
    }

    const Object = await hgetall("HolbertonSchools");
    console.log(Object)
}

main();