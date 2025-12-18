import createPushNotificationsJobs from "./8-job";
import kue from "kue";
import { expect } from "chai";

const queue = kue.createQueue();

describe("test the function createPushNotificationsJobs" , () => {
    before(() => {
        queue.testMode.enter();
    });

    after(() => {
        queue.testMode.clear();
        queue.testMode.exit();
    });

    it("display a error message if jobs is not an array", () => {
        expect(() => createPushNotificationsJobs("bonjour", queue)).to.throw("Jobs is not an array");
        expect(() => createPushNotificationsJobs(2, queue)).to.throw("Jobs is not an array");
        expect(() => createPushNotificationsJobs({"key": "bonjour"}, queue)).to.throw("Jobs is not an array");
    })

    it("create two new jobs to the queue", () => {
        const jobs = [
            {
                phoneNumber: '4154318781',
                message: 'This is the code 4562 to verify your account'
            },
            {
                phoneNumber: '4151218782',
                message: 'This is the code 4321 to verify your account'
            }
        ]

        createPushNotificationsJobs(jobs, queue);

        expect(queue.testMode.jobs.length).to.equal(2);

        expect(queue.testMode.jobs[0].type).to.equal("push_notification_code_3");
        expect(queue.testMode.jobs[0].data).to.deep.equal(jobs[0]);
        expect(queue.testMode.jobs[0].data.phoneNumber).to.equal('4154318781');
        expect(queue.testMode.jobs[0].data.message).to.equal('This is the code 4562 to verify your account');

        expect(queue.testMode.jobs[1].type).to.equal("push_notification_code_3");
        expect(queue.testMode.jobs[1].data).to.deep.equal(jobs[1]);
        expect(queue.testMode.jobs[1].data.phoneNumber).to.equal('4151218782');
        expect(queue.testMode.jobs[1].data.message).to.equal('This is the code 4321 to verify your account');
    })
})