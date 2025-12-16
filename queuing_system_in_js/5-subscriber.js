import { createClient, print } from 'redis';

const subscriber = createClient();

subscriber.on("connect", () => {
    console.log("Redis client connected to the server");
})

subscriber.on("error", (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
})

async function main() {
    
    await subscriber.connect();

    await subscriber.subscribe("holberton school channel", (message) => {
        console.log(message);


        if (message == "KILL_SERVER") {
            subscriber.unsubscribe("holberton school channel")
                .then(() => {subscriber.quit()});
        }
    });
}
main();