export default function createPushNotificationsJobs(jobs, queue) {
    if(!Array.isArray(jobs))
    {
        throw new Error("Jobs is not an array")
    }

    jobs.forEach((job) => {
        const one_job = queue.create("push_notification_code_3", job).save((err) => {
        if(!err) {
            console.log(`Notification job created: ${one_job.id}`)
        } else {
            console.log("ERROR:", err)
        }
    })


        one_job.on("completed", () => {
            console.log(`Notification job ${one_job.id} completed`);
        });

        one_job.on("failed", (error) => {
            console.log(`Notification job ${one_job.id} failed: ${error}`);
        });

        one_job.on("progress", (progress) => {
            console.log(`Notification job ${one_job.id} ${progress}% complete`);
        });
    })
}