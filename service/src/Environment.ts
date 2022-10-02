// import { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';

class Environment {
   // ddbClientConfig: DynamoDBClientConfig = makeDynamoDBClientConfig();
   expressPort: number = parseInt(process.env.EXPRESS_PORT as string);
}

const environment = new Environment();

// function makeDynamoDBClientConfig(): DynamoDBClientConfig {
//    const config: DynamoDBClientConfig = {
//       region: process.env.AWS_DEFAULT_REGION as string,
//    };
//    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
//       config.credentials = {
//          accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
//          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
//       };
//       config.endpoint = process.env.DYNAMODB_ENDPOINT as string;
//    }
//    return config;
// }

export { environment };
