import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import dotenv from "dotenv";

dotenv.config();

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const prompt = `
  You are an expert in data formatting. For the following csv data, output it as json.
  Output the json only.
  
  \`\`\`
  name,age,occupation
  Jane Smith,25,Data Scientist
  Bob Johnson,42,Software Developer
  Emily Davis,37,Product Manager
  \`\`\`
  `;

const input = {
  modelId: "cohere.command-r-v1:0",
  contentType: "application/json",
  accept: "*/*",
  body: JSON.stringify({
    message: prompt,
    max_tokens: 400,
    temperature: 0.75,
    p: 0.01,
    k: 0,
    stop_sequences: [],
  }),
};

const command = new InvokeModelCommand(input);

const response = await client.send(command);
console.log("-------------------");
console.log("---Full Response---");
console.log("-------------------");
console.log(response);

const rawRes = response.body;

const jsonString = new TextDecoder().decode(rawRes);

const parsedResponse = JSON.parse(jsonString);

console.log("-------------------------");
console.log("---Parsed Response Body---");
console.log("-------------------------");
console.log(parsedResponse);
console.log("-------------------------");

console.log("-------------------------");
console.log("----Generation Result----");
console.log("-------------------------");
console.log(parsedResponse.text);
console.log("-------------------------");
