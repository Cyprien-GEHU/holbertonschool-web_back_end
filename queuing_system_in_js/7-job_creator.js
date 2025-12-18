import kue from "kue"

const queue = kue.createQueue();

const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account'
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account'
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account'
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account'
  }
];

jobs.forEach((job) => {
    const one_job = queue.create("push_notification_code_2", job).save((err) => {
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