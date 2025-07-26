import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

const user = encodeURIComponent(process.env.MONGO_USER || "");
const pass = encodeURIComponent(process.env.MONGO_PASSWORD || "");

export async function connectToDb() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = `mongodb+srv://${user}:${pass}cluster0.vqdwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();

  cachedClient = client;
  cachedDb = client.db('ecommerce-nextjs');

  return { client, db: client.db('ecommerce-nextjs') }
}