const { Queue } = require("bullmq");

const connection = {
    host: "127.0.0.1",
    port: 6379
};

const aiQueue = new Queue("aiQueue", {
    connection
});

module.exports = aiQueue;
