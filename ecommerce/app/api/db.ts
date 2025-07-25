
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}:@cluster0.ntqtufo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export async function connectToDb() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

    try {
      await client.connect();
    } finally {
      await client.close();
    }
}