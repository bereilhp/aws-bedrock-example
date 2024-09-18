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

const input = {
  modelId: "amazon.titan-embed-text-v1",
  contentType: "application/json",
  accept: "application/json",
  body: JSON.stringify({
    inputText: "Hello world",
  }),
};

const command = new InvokeModelCommand(input);
console.log("-------------------");
console.log("---Input Text---");
console.log("-------------------");
console.log(input.body);

const response = await client.send(command);
// console.log("-------------------");
// console.log("---Full Response---");
// console.log("-------------------");
// console.log(response);

const rawRes = response.body;
const jsonString = new TextDecoder().decode(rawRes);
const parsedResponse = JSON.parse(jsonString);

// console.log("-------------------------");
// console.log("---Parsed Response Body---");
// console.log("-------------------------");
// console.log(parsedResponse);

console.log("-------------------------");
console.log("--------Embedding--------");
console.log("-------------------------");
console.log(parsedResponse.embedding);
console.log("-------------------------");

console.log("-------------------------");
console.log("--------Embeddings Dimensions--------");
console.log("-------------------------");
console.log(parsedResponse.embedding.length);
console.log("-------------------------");
