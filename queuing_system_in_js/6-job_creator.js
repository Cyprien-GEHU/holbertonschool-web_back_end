import kue from "kue"

const queue = kue.createQueue();

const data = {
    phoneNumber: "0397523642",
    message: "random phone number",
}

const job = queue.create("push_notification_code", data).save((err) => {
    if(!err) {
        console.log(`Notification job created: ${job.id}`)
    } else {
        console.log("ERROR:", err)
    }
});

job.on("completed", () => {
    console.log("Notification job completed");
});

job.on("failed", () => {
    console.log("Notification job failed");
});