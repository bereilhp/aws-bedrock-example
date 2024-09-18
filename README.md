# AWS Bedrock Examples

This project demonstrates the usage of AWS Bedrock Runtime and its APIs to invoke model commands and retrieve embeddings.

## Files

The project consists of two files:
- embedding-model-cohere.js  
- embedding-model-titan.js 

> **_NOTE:_**  They are identical, but with different model IDs and inputs.

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

To run the example for Cohere models, use:
````
make cohere
````

To run the example for Titan models, use:
```
make titan
```

## Output
The script will output the following information:
- The input text
- The response from the model
- The dimensions of the retrieved embeddings