// utils/dynamoDB.ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-1", // Replace with your AWS region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!, // Ensure you have these in your .env.local file
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const ddbDocClient = DynamoDBDocumentClient.from(client);

export const submitToDynamoDB = async (data: string) => {
  const params = {
    TableName: 'YourDynamoDBTableName',
    Item: {
      id: Date.now().toString(),
      content: data,
    },
  };

  const command = new PutCommand(params);
  return ddbDocClient.send(command);
};
