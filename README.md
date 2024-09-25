# AWS Bedrock Examples

This project demonstrates the usage of AWS Bedrock Runtime and its APIs to invoke model commands.

## Files

The project consists of three files:
- embedding-model-cohere.js  
- embedding-model-titan.js 
- text-model-cohere.js

## Usage

To run this project, you'll need to:

Install dependencies by running:
```
npm install
```

Set environment variables:
```
AWS_REGION="your AWS region"
AWS_ACCESS_KEY_ID="your AWS access key ID"
AWS_SECRET_ACCESS_KEY="your AWS secret access key"
```

## Running the Scripts

To run the example for Cohere Embedding model, use:
````
make cohere
````

To run the example for Titan Embedding model, use:
```
make titan
```

To run the example for Cohere Text model, use:
```
make text-cohere
```