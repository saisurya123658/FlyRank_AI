require("dotenv").config();

const { Worker } = require("bullmq");
const OpenAI = require("openai");

const jobs = require("./jobs");

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const worker = new Worker(
    "aiQueue",
    async job => {

        const id = job.data.id;

        try {

            jobs[id].status = "processing";

            const response = await client.responses.create({
                model: "gpt-4.1-mini",
                input: job.data.prompt
            });

            jobs[id].status = "completed";
            jobs[id].result = response.output_text;

        } catch (err) {

            jobs[id].status = "failed";
            jobs[id].result = err.message;

            throw err;
        }

    },
    {
        connection: {
            host: "127.0.0.1",
            port: 6379
        }
    }
);

console.log("Worker running...");
